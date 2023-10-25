import { Link } from "react-router-dom";
import ChatBot from "../../components/chat-bot/page";

// eslint-disable-next-line react/prop-types
const Templeate = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Ecommerce</Link>
          <Link to="/ruleta">Ruleta</Link>
          <Link to="/loteria">Loteria</Link>
          <Link to="/login">Log in</Link>
        </nav>
      </header>
      <div >
        {children}
      </div>
      <ChatBot />
    </>
  );
};

export default Templeate;
