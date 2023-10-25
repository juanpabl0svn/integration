import { Link } from "react-router-dom";
import "./e-commerce.css";

const page = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="e-commerce">
        
      </main>
    </>
  );
};

export default page;
