import InfoIcon from "./components/InfoIcon";
import Chat from "./components/Chat";
import './chat-bot.css'

const ChatBot = () => {
  function handleClick() {
    const element = document.getElementById("card");
    if (!element.classList) return;
    element.classList.add("show");
  }
  return (
    <main>
      <InfoIcon click={handleClick} />
      <Chat />
    </main>
  );
};

export default ChatBot;
