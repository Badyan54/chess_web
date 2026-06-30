import Player from "./player"
import Board from "./board"

export default function Game_zone(){
  return(
    <div className="flex flex-col h-full p-4 gap-4 relative">
      <div className="flex justify-between">
        <Player />
        <p className="self-center">14:55</p> {/*time */}
      </div>
      <Board />
      <div className="flex justify-between">
        <Player />
        <p className="self-center">14:55</p> {/*time */}
      </div>
    </div>
  )
}