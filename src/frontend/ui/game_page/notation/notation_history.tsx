import Nonation_card from "./notation_card"

export default function Nonation_history(){
  return(
    <div className="grid grid-rows-[auto_1fr_auto] h-full min-w-56 divide-y divide-[#1F232B]">
      <div className="flex justify-between p-2 gap-2">
        <p>Нотіція</p>
        <p>Хід </p>{/* номур ходу */}
      </div>
      <div className="p-2">
        <Nonation_card />
      </div>
      <div></div>
    </div>
  )
}