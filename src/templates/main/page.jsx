import { Link } from "react-router-dom";
import ChatBot from "../../components/chat-bot/page";

// eslint-disable-next-line react/prop-types
const Templeate = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <img
            style={{ width: "80px", marginRight: "30%" }}
            src="http://www.localhost:5173/images/krilin.png"
            alt=""
          />
          <Link to="/">Inicio</Link>
          <Link to="/store">E-commerce</Link>
          <Link to="/ruleta">Ruleta</Link>
          <Link to="/loteria">Loteria</Link>
          <Link to="https://multihexagon.github.io/zodiaco/#0">Zodiaco</Link>
          <Link to="/torneos">Torneos</Link>
          <Link to="/subasta">Subasta</Link>
          <Link to="/login">Log in</Link>
        </nav>
      </header>
      <div>{children}</div>
      <ChatBot />
    </>
  );
};

export default Templeate;
