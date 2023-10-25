import InfoIcon from "./InfoIcon";
import Chat from "./Chat";
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
