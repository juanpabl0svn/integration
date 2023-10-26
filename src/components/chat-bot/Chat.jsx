import { useEffect, useState, useRef } from "react";
import Message from "./Message";
import Menu from "./Menu";
import { getFromService } from "../../services/getFromService";
import SendIcon from "./SendIcon";
import ExitIcon from "./ExitIcon";
import useMessage from "../../hooks/useMessages";

const PROCESS = {
  password: ["¿Quieres cambiar tu contraseña?", "Ingresa tu nueva contraseña"],
  pqr: ["¿Quieres hacer una PQR para presentar tu problema?", "Ingresa la pqr"],
  tournament: ["Hacer torneo", "Empezar torneo"],
  no_sense: ["No entiendo"],
  no: ["Esta bien, estoy aqui para lo que necesites"],
  si: ["Dime"],
};

const URL = "http://localhost:5000";

function makeAPQR(message) {
  alert(message);
}

const HANDLE_PROCESS = {
  pqr: makeAPQR,
};

function controlMessages() {
  const chat = document.getElementById("chat");
  if (!chat) return;
  chat.scrollTop = chat.scrollHeight;
  const chatLastChild = chat.lastChild;
  if (!chatLastChild) return;
  chatLastChild.classList.add("new-message");
  setTimeout(() => {
    chatLastChild.classList.remove("new-message");
  }, 1000);
}

async function checkQuestion(
  message,
  setAnswer,
  currentProcess,
  setCurrentProcess,
  isAnswering,
  setIsAnswering
) {
  const messageObject = {
    type: "bot",
    text: "",
  };

  if (isAnswering) {
    console.log(currentProcess);
    HANDLE_PROCESS[currentProcess](message);
    setIsAnswering(false);
    setCurrentProcess(undefined);
    messageObject.text = "Hay algo mas en lo que pueda ayudarte?";
    return setAnswer((lastMessages) => [...lastMessages, messageObject]);
  }

  const { response } = await getFromService(`${URL}/review/${message}`);

  if (response == null) {
    messageObject.text =
      "Estamos experimentando fallas tecnicas, intente de nuevo mas tarde";

    return setAnswer((lastMessages) => [...lastMessages, messageObject]);
  }

  const process = PROCESS[response] ?? response;

  messageObject.text = process[0];

  if (currentProcess) {
    if (process == "yes") {
      messageObject.text = PROCESS[currentProcess][1];
      setIsAnswering(true);
    } else {
      messageObject.text = "Entonces cuentame como puedo ayudarte";
      setCurrentProcess(undefined);
    }
    return setAnswer((lastMessages) => [...lastMessages, messageObject]);
  }

  if (response !== "no" && response !== "yes") {
    setCurrentProcess(response);
  }

  return setAnswer((lastMessages) => [...lastMessages, messageObject]);
}

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const newMessage = useRef();

  const { currentProcess, setCurrentProcess, isAnswering, setIsAnswering } =
    useMessage();

  useEffect(() => {
    controlMessages();
    const lastMessage = messages[messages.length - 1];
    if (messages.length == 0 || lastMessage?.type !== "user") return () => {};
    checkQuestion(
      lastMessage?.text,
      setMessages,
      currentProcess,
      setCurrentProcess,
      isAnswering,
      setIsAnswering
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const handleSubmit = () => {
    const value = newMessage.current.value;
    const array = value
      .split(" ")
      .filter((word) => word !== "")
      .join(" ");
    if (!array) return;

    const messageObject = {
      type: "user",
      text: value,
    };
    setMessages((lastMessages) => [...lastMessages, messageObject]);
    newMessage.current.value = "";
  };

  const handleExit = () => {
    const element = document.getElementById("card");
    if (!element.classList) return;
    element.classList.remove("show");
  };

  return (
    <article className="card-chat" id="card">
      <p className="title">Tu amigo</p>
      <ExitIcon click={handleExit} />
      <section className="chat" id="chat">
        <Menu />
        {messages != null &&
          messages.map((message) => (
            <Message key={crypto.randomUUID()} message={message} />
          ))}
      </section>
      <section className="send">
        <textarea
          ref={newMessage}
          onKeyDown={(e) => {
            if (e.which === 13 && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
              return;
            }
          }}
        ></textarea>
        <SendIcon click={handleSubmit} />
      </section>
    </article>
  );
};
export default Chat;
