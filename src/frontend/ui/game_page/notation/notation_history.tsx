import Nonation_card from "./notation_card"

export default function Nonation_history(){
  return(
    <div className="grid grid-rows-[auto_1fr_auto] h-full py-1">
      <div className="flex justify-between gap-2 py-2">
        <p>Нотіція</p>
        <p>Хід </p>{/* номур ходу */}
      </div>
      <div>
        <Nonation_card />
      </div>
      <div></div>
    </div>
  )
}