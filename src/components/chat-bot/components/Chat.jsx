import { useEffect, useState, useRef } from "react";
import Message from "./Message";
import Menu from "./Menu";
import SendIcon from "./SendIcon";
import ExitIcon from "./ExitIcon";
import useMessage from "../../../hooks/useMessages";

// Definición de palabras clave para identificar el tipo de pregunta
const options = {
  password: [
    "cambiar",
    "contraseña",
    "clave",
    "ingresar",
    "problema",
    "quiero",
  ],
  pqr: [
    "problema",
    "pqr",
    "cambiar",
    "no",
    "funciona",
    "error",
    "quiero",
    "queja",
    "insatisfecho",
  ],
  tournament: ["torneo", "problema", "ingresar", "persona", "participante"],
};

// Función para determinar el tipo de pregunta en función de las palabras clave
const giveAnAnswer = (message) => {
  let answers = message.toLowerCase().split(" ");

  let bestOne = "";
  let contador = 0;
  // Iterar sobre las opciones y contar las coincidencias
  for (let clave in options) {
    let contadorTemp = 0;
    for (let answer of answers) {
      if (options[clave].includes(answer)) {
        contadorTemp++;
      }
    }
    // Actualizar la mejor opción si se encuentra una con más coincidencias
    if (contadorTemp > contador) {
      contador = contadorTemp;
      bestOne = clave;
    }
  }

  // Lógica para determinar la mejor opción si no hay suficientes coincidencias
  if (contador < 3) {
    if (answers.includes("contraseña") || answers.includes("clave"))
      return "password";
    if (
      answers.includes("pqr") ||
      answers.includes("queja") ||
      answers.includes("insatisfecho") ||
      answers.includes("insatisfecha")
    )
      return "pqr";
    if (answers.includes("torneo")) return "tournament";
    if (answers.length === 1) {
      if (answers[0] === "si") return "yes";
      if (answers[0] === "no") return "no";
      return "no_sense";
    }
    bestOne = "no_sense";
  }
  return bestOne;
};

// Respuestas posibles en función del tipo de pregunta
const PROCESS = {
  password: ["¿Quieres cambiar tu contraseña?", "Ingresa tu nueva contraseña"],
  pqr: ["¿Quieres hacer una PQR para presentar tu problema?", "Ingresa la pqr"],
  tournament: ["Hacer torneo", "Empezar torneo"],
  no_sense: ["No entiendo"],
  no: ["Esta bien, estoy aqui para lo que necesites"],
  si: ["Dime"],
};

// Funciones de manejo para procesos específicos
const HANDLE_PROCESS = {
  pqr: (message, setAnswer) => {
    // Cambiado de alert a mensaje en el chat
    const pqrMessage = {
      type: "bot",
      text: "Realizaste una PQR: " + message,
    };
    setAnswer((lastMessages) => [...lastMessages, pqrMessage]);
  },
  password: (message, setAnswer) => {
    // Cambiado de alert a mensaje en el chat
    const newPasswordMessage = {
      type: "bot",
      text: `¡Nueva contraseña establecida: ${message}!`,
    };
    setAnswer((lastMessages) => [...lastMessages, newPasswordMessage]);
  },
  tournament: (message, setAnswer) => {
    // Cambiado de alert a mensaje en el chat
    const tournamentMessage = {
      type: "bot",
      text: "Torneo: " + message,
    };
    setAnswer((lastMessages) => [...lastMessages, tournamentMessage]);
  },
};

// Función para controlar el desplazamiento automático de los mensajes
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

// Función para determinar la respuesta del bot y manejar los procesos
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
    HANDLE_PROCESS[currentProcess](message, setAnswer);
    setIsAnswering(false);
    setCurrentProcess(undefined);
    messageObject.text = "¿Hay algo más en lo que pueda ayudarte?";
    return setAnswer((lastMessages) => [...lastMessages, messageObject]);
  }

  const response = giveAnAnswer(message);
  const process = PROCESS[response] ?? response;
  messageObject.text = process[0];

  if (currentProcess) {
    if (process === "yes") {
      messageObject.text = PROCESS[currentProcess][1];
      setIsAnswering(true);
    } else {
      messageObject.text = "Entonces, cuéntame cómo puedo ayudarte";
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
    if (messages.length === 0 || lastMessage?.type !== "user") return () => {};
    checkQuestion(
      lastMessage?.text,
      setMessages,
      currentProcess,
      setCurrentProcess,
      isAnswering,
      setIsAnswering
    );


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
