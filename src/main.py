from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from pydantic import BaseModel
from uuid import UUID, uuid4
#from typing import Any

class Room(BaseModel):
    white: UUID
    black: UUID
#    board: str

class Invite(BaseModel):
    invite_id: UUID
    from_u: UUID
    to_u: UUID

users: dict[UUID, WebSocket] = {}
players_room: dict[UUID, UUID] = {}
rooms: dict[UUID, Room] = {}
find_queue: list[UUID] = []
invites: list[Invite] = []

app = FastAPI()

@app.websocket("/ws/{user_id}")
async def get_websocket(websocket: WebSocket, user_id: UUID):   
    await websocket.accept()
    users[user_id] = websocket
    try:
        while True:
            data = await websocket.receive_json()

    except WebSocketDisconnect:
        del users[user_id]

def create_game(player_1: UUID, player_2: UUID):
    room_id = uuid4()
    rooms[room_id] = Room(white=player_1, black=player_2) #board
    players_room[player_1] = room_id
    players_room[player_2] = room_id
    return room_id

@app.post("/games/find/")
async def players_search(user_id: UUID):
    if players_room.get(user_id):
        return {"status": "already in game"}
    if user_id in find_queue:
        return {"status": "already_waiting"}
    
    if find_queue:
        opponent = find_queue.pop(0)
        game_id = create_game(user_id, opponent)
        for player in [user_id, opponent]:
            ws = users.get(player)
            if ws:
                await ws.send_json({
                    "status": "oponent finded",
                    "opponent": opponent if player == user_id else user_id,
                    "game_id": game_id
                })

        return {"status": "finded", "opponent": opponent}
    
    find_queue.append(user_id)

    return {"status": "waiting"}

@app.post("/games/invite/send")
async def invite_send(user_id: UUID, friend_id: UUID):
    if players_room.get(user_id):
        return {"status": "already in game"}
    friend_ws = users.get(friend_id)
    if friend_ws:
        invite = Invite(invite_id=uuid4(), from_u=user_id, to_u=friend_id)
        invites.append(invite)
        await friend_ws.send_json({
            "type": "invite",
            "ivite": invite,
        })

        return {"status": "invite send"}
    return {"status": "friend dosnt exist"}

@app.post("/games/invite/accept")
async def invite_accept(invite: Invite):
    for i, recorded_inv in enumerate(invites):
        if recorded_inv.invite_id == invite.invite_id:
            sender_ws = users.get(invite.from_u)
            if not sender_ws:
                return {"status": "inviter disappiered"}
            game_id = create_game(invite.from_u, invite.to_u)
            invites.pop(i)        
            await sender_ws.send_json({
                "status": "invite accepted",
                "game_id": game_id
            })

            return {
                "status": "invite accepted",
                "game_id": game_id
            }
    else:
        return {"status": "invite dose not exist"}

@app.post("/games/invite/reject")
async def invite_reject(invite: Invite):
    for i, recorded_inv in enumerate(invites):
        if recorded_inv.invite_id == invite.invite_id:
            sender_ws = users.get(invite.from_u)
            invites.pop(i)
            if not sender_ws:
                return {"status": "inviter disappiered"}
            await sender_ws.send_json({"status": "invite rejected"})                
            return {"status": "invite rejected"}
    else:
        return {"status": "invite dose not exist"}
