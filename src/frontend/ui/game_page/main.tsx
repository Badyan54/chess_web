import Header from "@/ui/header";
import Wrapper from "./wrapper";
import Chat from "./chat/Chat";
import Nonation_history from "./notation/notation_history";

export default function Game_page() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Chat />
        <Nonation_history />
      </Wrapper>
      
    </>
  );
}