import Image from "next/image"
import figure_picker from "."

export default function Square({figure, bg_color}: {figure: string | null, bg_color: string}){
  return (
    <div className={`${bg_color} flex items-center aspect-square justify-center relative `}>
      { figure ?
        <Image
          src={figure_picker(figure)} 
          alt="figure"
          fill={true}
        />
        : null
      }
    </div>
  )
}