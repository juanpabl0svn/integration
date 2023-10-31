import { useState } from "react";

import "./ruleta.css";
import { useUserContext } from "../../context";

import Swal from "sweetalert2";

const $ = (element) => document.querySelector(element);

const buttons = new Array(37).fill(0);

const values = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 13, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const angles = new Array(37).fill(0).map((_, i) => {
  return { angle: i * 9.72972972973, value: values[i] };
});

function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [ball, setBall] = useState(null);
  const [money, setMoney] = useState("");

  const { userData } = useUserContext();

  async function handleClick() {
    if (ball == null || money == "" || userData.currency == 0 || isWorking)
      return;

    const bola = $(".bola");

    bola.style.top = "50%";
    bola.style.left = "50%";
    const randomValue = Math.floor(Math.random() * angles.length);
    const { angle, value } = angles[randomValue];

    setIsWorking(true);

    const ruleta = $(".ruleta-img");

    let anguloActual = 0;

    // Velocidad inicial
    let velocidadRotacion = 0.2; // Puedes ajustar este valor
    // Velocidad máxima
    const velocidadMaxima = 4;
    // Cuánto se incrementará/decrementará la velocidad por tick
    const aceleracion = 0.02;

    const radio = 110; // Radio de la ruleta

    const anguloFinal = angle + 360 * 3; // Añadimos 2 rotaciones completas

    let faseAceleracion = true;

    const intervalo = setInterval(() => {
      anguloActual += velocidadRotacion;

      if (faseAceleracion) {
        // Acelerar hasta la velocidad máxima
        if (velocidadRotacion < velocidadMaxima) {
          velocidadRotacion += aceleracion;
        } else {
          faseAceleracion = false; // Cambiar a fase de desaceleración
        }
      } else {
        // Desacelerar
        if (anguloActual >= anguloFinal - 1100) {
          // Comenzar a desacelerar en la última rotación
          velocidadRotacion -= aceleracion;
          if (velocidadRotacion <= 1) velocidadRotacion = 1; // Evitar que la velocidad sea 0
        }
      }

      const x = radio * Math.sin(anguloActual * (Math.PI / 180));
      const y = radio * -Math.cos(anguloActual * (Math.PI / 180));

      bola.style.left = `calc(50% + ${x}px - 5px)`;
      bola.style.top = `calc(50% + ${y}px - 5px)`;

      if (anguloActual >= anguloFinal) {
        clearInterval(intervalo);
        setIsWorking(false);
        const hasWon = bola == value;

        setTimeout(() => {
          if (hasWon)
            Swal.fire({
              icon: "success",
              title: "Yeahh",
              text: "Ganaste!!",
            });
          else
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No ganaste, lo sentimos!",
            });
        }, 1000);
      }
    }, 10);

    ruleta.classList.add("girar");

    setTimeout(() => ruleta.classList.remove("girar"), 4000);
  }

  return (
    <>
      <main className="ruleta">
        <div className="container">
          <img className="ruleta-img" src="/images/ruleta.jpg" alt="" />
          <img className="bola" src="/images/bola.png" alt="" />
        </div>
        <div className="separator">
          <button
            className={`glow-on-hover ${isWorking ? `hidden` : ""}`}
            onClick={handleClick}
          >
            Girar
          </button>

          <label htmlFor="">
            Numero de la ruleta: <span>{ball}</span>
          </label>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <article className="buttons">
            {buttons.map((_, i) => (
              <input
                key={i}
                type="submit"
                value={i}
                onClick={() => setBall(i)}
                disabled={isWorking}
              />
            ))}
          </article>
          <label htmlFor="money">Ingrese suma a apostar</label>
          <input
            type="number"
            min={0}
            max={userData?.currency}
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            disabled={isWorking}
            required
          />
        </form>
      </main>
    </>
  );
}

export default App;
