import { Link, Outlet } from "react-router-dom";
import ChatBot from "../../components/chat-bot/page";

// eslint-disable-next-line react/prop-types
const Templeate = ({ children }) => {
  function handleClick() {
    window.localStorage.removeItem("userData");
    window.location.reload();
  }

  return (
    <>
      <header>
        <nav>
          <img
            style={{ width: "80px", marginRight: "30%" }}
            src="http://www.localhost:5173/images/krilin.png"
            alt=""
          />
          <Link to="/main">Inicio</Link>
          <Link to="/main/store">E-commerce</Link>
          <Link to="/main/ruleta">Ruleta</Link>
          <Link to="/main/loteria">Loteria</Link>
          <Link to="https://multihexagon.github.io/zodiaco/#0">Zodiaco</Link>
          <Link to="/main/torneos">Torneos</Link>
          <Link to="/main/subasta">Subasta</Link>
          <Link onClick={handleClick}>Log out</Link>
        </nav>
      </header>
      <Outlet />
      <ChatBot />
    </>
  );
};

export default Templeate;
