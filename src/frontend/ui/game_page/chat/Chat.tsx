import swords from "@/public/swords.svg"
import send from "@/public/send.svg"
import Image from "next/image"
import Message from "./message"


export default function Chat (){
  return(
    <div className="grid grid-rows-[auto_1fr_auto] h-full min-w-3xs divide-y divide-[#1F232B]">
      <div className="flex gap-2 items-center p-2">
        <Image 
          src={swords} 
          alt="swords" 
          width={20} 
          height={20} 
        />
        <h3>Чат з противником</h3>
      </div>
      <div className="p-2">
        <Message />
      </div>
      <div className="flex items-center gap-2 p-2">
        <input type="text" className="p-1 bg-[#1C2233]"/>
        <button className="p-2 rounded-full bg-[#202D2E]">
          <Image 
            src={send}
            alt="send"
            width={18}
            height={18}
          />
        </button>
      </div>
    </div>
  )
}