import { useEffect, useRef } from "react";
import { useUserContext } from "../../context";
import "./log-in.css";
import { Link, useNavigate } from "react-router-dom";
import localStorage from "../../services/localStorage";

// const URL = "http://localhost:3000";

const Login = () => {
  const navigate = useNavigate();

  const username = useRef();
  const password = useRef();

  const { userData, setUserData } = useUserContext();

  useEffect(() => {
    const user = localStorage(setUserData);

    if (userData != null || user) navigate("/main");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const obj = {
      name: "juan pablo sanchez",
      username: username.current.value,
      password: password.current.value,
      currency: 4000,
      cart: {},
      selectedItem: null,
    };

    setUserData(obj);

    navigate("/main");

    window.localStorage.setItem("userData", JSON.stringify(obj));
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
