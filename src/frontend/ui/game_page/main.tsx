import Header from "@/ui/header";
import Wrapper from "./wrapper";
import Chat from "./chat/Chat";
import Nonation_history from "./notation/notation_history";
import Game_zone from "./gama_zone/game_zone";

export default function Game_page() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Chat />
        <Game_zone />
        <Nonation_history />
      </Wrapper>
      
    </>
  );
}