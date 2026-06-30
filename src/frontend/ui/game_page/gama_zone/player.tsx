import girl from "@/public/avatars/girl1.svg"
import Image from "next/image"

export default function Player(){
  return(
    <div className="flex gap-2 items-center">
      <div className="rounded-full bg-white h-10">
        <Image 
          src={girl} 
          alt="avatar" 
          width={40} 
          height={40} 
        />
      </div>
      <div>
        <p>Name</p>
        <p>status</p>
      </div>
    </div>
  )
}