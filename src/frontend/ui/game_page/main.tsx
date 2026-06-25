import Header from "@/ui/header";
import Chat from "./chat/Chat";
import Wrapper from "./wrapper";

export default function Game_page() {
  return (
    <>
      <Header/>
      <Wrapper>
        <Chat />
      </Wrapper>
      
    </>
  );
}