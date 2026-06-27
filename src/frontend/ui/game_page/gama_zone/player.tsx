import girl from "@/public/avatars/girl1.svg"
import Image from "next/image"

export default function Player(){
  return(
    <div className="flex gap-2">
      <div className="rounded-full bg-white">
        <Image 
          src={girl} 
          alt="avatar" 
          width={50} 
          height={50} 
        />
      </div>
      <div>
        <p>Name</p>
        <p>status</p>
      </div>
    </div>
  )
}