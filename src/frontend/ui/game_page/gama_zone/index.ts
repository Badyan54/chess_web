import black_bishop from "@/public/figures/black_bishop.svg"
import white_bishop from "@/public/figures/white_bishop.svg"
import black_rook from "@/public/figures/black_rook.svg"
import white_rook from "@/public/figures/white_rook.svg"
import black_king from "@/public/figures/black_king.svg"
import white_king from "@/public/figures/white_king.svg"
import black_pawn from "@/public/figures/black_pawn.svg"
import white_pawn from "@/public/figures/white_pawn.svg"
import black_knight from "@/public/figures/black_knight.svg"
import white_knight from "@/public/figures/white_knight.svg"
import black_queen from "@/public/figures/black_queen.svg"
import white_queen from "@/public/figures/white_queen.svg"

export default function figure_picker(figure_name: string){
  switch (figure_name){
    case "P":
      return black_pawn
    case "p":
      return white_pawn
    case "R":
      return black_rook
    case "r":
      return white_rook
    case "N":
      return black_knight
    case "n":
      return white_knight
    case "B":
      return black_bishop
    case "b":
      return white_bishop
    case "K":
      return black_king
    case "k":
      return white_king
    case "Q":
      return black_queen
    case 'q':
      return white_queen
  }
}