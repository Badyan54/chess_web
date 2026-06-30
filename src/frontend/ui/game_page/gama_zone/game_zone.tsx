// import Player from "./player"
import Board from "./board"

export default function Game_zone(){
  return(
    <div className="flex h-full p-4 gap-4 relative">
      <Board />
      <div className="flex flex-col justify-around mx-auto">
        <p >14:55</p>
         <p >14:55</p> {/*time */}
      </div>
    </div>
  )
}