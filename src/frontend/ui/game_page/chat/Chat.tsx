import swords from "@/public/swords.svg"
import send from "@/public/send.svg"
import Image from "next/image"
import Message from "./message"


export default function Chat (){
  return(
    <div className="grid grid-rows-[auto_1fr_auto] h-full py-1 min-w-3xs">
      <div className="flex gap-2 items-center py-2">
        <Image 
          src={swords} 
          alt="swords" 
          width={20} 
          height={20} 
        />
        <h3>Чат з противником</h3>
      </div>
      <div>
        <Message />
      </div>
      <div className="flex items-center gap-2 py-2">
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