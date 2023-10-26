import { useState } from "react";

import "./ruleta.css";

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

  async function handleClick() {
    if (ball == null || money == "") return;

    const bola = $(".bola");

    bola.style.top = "47%";
    bola.style.left = "50%";
    const randomValue = Math.floor(Math.random() * angles.length);
    const { angle, value } = angles[randomValue];

    console.log(angle, value);

    setIsWorking(true);

    const ruleta = $(".ruleta-img");

    let anguloActual = 0;

    // Velocidad de rotación (cuántos grados se moverá la bola por cada intervalo de tiempo)
    const velocidadRotacion = 1; // Puedes ajustar este valor

    const radio = 155; // Radio de la ruleta

    const anguloFinal = angle;
    console.log(anguloFinal);
    // Usamos setInterval para simular la animación
    const intervalo = setInterval(() => {
      anguloActual += velocidadRotacion;

      // Calcular las coordenadas X e Y de la bola según el ángulo
      const x = radio * Math.sin(anguloActual * (Math.PI / 180));
      const y = radio * -Math.cos(anguloActual * (Math.PI / 180));

      bola.style.left = `calc(50% + ${x}px - 5px)`; // 5px es la mitad del ancho de la bola
      bola.style.top = `calc(50% + ${y}px - 5px)`; // 5px es la mitad de la altura de la bola

      if (anguloActual >= anguloFinal + 360 * 2) {
        clearInterval(intervalo); // Detener la animación cuando se alcance el ángulo final
        setIsWorking(false);

        setTimeout(() => {
          if (ball === value) {
            alert("ganaste");
          } else {
            alert("perdiste");
          }
        }, 1000);
      }
    }, 10);

    // const numberData = await fetch("", {

    ruleta.classList.add("girar");

    setTimeout(() => ruleta.classList.remove("girar"), 5000);
  }

  return (
    <>
      <main className="ruleta">
        <div className="container">
          <img className="ruleta-img" src="./images/ruleta.jpg" alt="" />
          <img className="bola" src="./images/bola.png" alt="" />
        </div>
        <div className="separator">
          <button
            className={`button-ruleta ${isWorking ? `hidden` : ""}`}
            onClick={handleClick}
          >
            <span>Girar!</span>
            <i></i>
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
            max={99999}
            value={money}
            name="money"
            id="money"
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
