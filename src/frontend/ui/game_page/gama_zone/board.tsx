import Square from "./square"

let default_shame = [
    ['r', 'n', 'b', 'k', 'q', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'K', 'Q', 'B', 'N', 'R']
]

export default function Board(){
  return(
    <div className="grid grid-cols-8 aspect-square m-auto min-h-96 h-full">
      {default_shame.map((row, rowI) => 
      (row.map((col, colI) => (
        <Square
          key={`${rowI}-${colI}`}
          figure={col}
          bg_color={(colI + rowI) % 2 === 0 ? "bg-[#304E4A]" : "bg-[#8FA89C]" }
          />
      ))))}
    </div>
  )
}