import "./log-in.css";
import { Link } from "react-router-dom";

const URL = "http://localhost:3000";

const Login = () => {
  async function handleSubmit(e) {
    e.preventDefault();

    const $ = (element) => e.currentTarget.elements.namedItem(element);

    const password = $("password");
    const username = $("username");

    // eslint-disable-next-line no-undef
    const req = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!req.ok) return;

    const data = await req.json();

    console.log(data);

    window.location.href = "/main";
  }

  return (
    <main className="log-in">
      <form onSubmit={handleSubmit} autoComplete="off">
        <article>
          <input type="text" id="username" name="usernamae" required />
          <label htmlFor="username">Usuario</label>
        </article>
        <article>
          <input type="password" id="password" name="password" required />
          <label htmlFor="password">Contraseña</label>
        </article>
        <Link to="">¿Olvidaste tu contraseña?</Link>

        <button>Ingresar</button>
      </form>
    </main>
  );
};

export default Login;
