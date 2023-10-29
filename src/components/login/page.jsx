import { useRef } from "react";
import { useUserContext } from "../../context";
import "./log-in.css";
import { Link, useNavigate } from "react-router-dom";

// const URL = "http://localhost:3000";

const Login = () => {
  const navigate = useNavigate();

  const username = useRef();
  const password = useRef();

  const { userData, setUserData } = useUserContext;

  async function handleSubmit(e) {
    e.preventDefault();

    setUserData({
      
    })
  }

  return (
    <main className="log-in">
      <form onSubmit={handleSubmit} autoComplete="off">
        <article>
          <input
            type="text"
            id="username"
            name="username"
            ref={username}
            required
          />
          <label htmlFor="username">Usuario</label>
        </article>
        <article>
          <input
            type="password"
            id="password"
            name="password"
            ref={password}
            required
          />
          <label htmlFor="password">Contraseña</label>
        </article>
        <Link to="">¿Olvidaste tu contraseña?</Link>

        <button>Ingresar</button>
      </form>
    </main>
  );
};

export default Login;
