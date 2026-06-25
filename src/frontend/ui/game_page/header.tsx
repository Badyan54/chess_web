import crown from "@/public/crown.svg"
import id_card from "@/public/id-card.svg"
import Image from "next/image";

export default function Header() {
  return (
    <>
        <footer className="flex justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <Image 
            src={crown} 
            alt="crown" 
            width={20} 
            height={20} 
            loading="eager"
          />
          <h1>Шахи</h1>
        </div>
        <div className="flex gap-1 p-px bg-(--light-bg) text-sm rounded-md">
          <a className="p-1">Правила</a>
          <a className="p-1">Головна</a>
          <a className="p-1">Github</a>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-white font-bold [text-shadow:_0_0_5px_#96B0A4,_0_0_10px_#96B0A4,_0_0_20px_#96B0A4]">
            1281u8js81u281
          </h2>
          <Image
            src={id_card} 
            alt="id-card" 
            width={20} 
            height={20} 
            loading="eager"
          />
          {/* user id */}
        </div>

        </footer>
    </>
  );
}