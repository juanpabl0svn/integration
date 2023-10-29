import { useUserContext } from "../../../context";

// eslint-disable-next-line react/prop-types
const Cart = ({ products, handleVisibility }) => {
  const { userData, setUserData } = useUserContext();

  function handleAdd(id) {
    setUserData((lastValue) => {
      const value = lastValue.cart[id];
      if (value.unitsTaken == value.units) return lastValue;
      value.unitsTaken += 1;
      return { ...lastValue, cart: { ...lastValue.cart, [value.name]: value } };
    });
  }
  function handleMinus(id) {
    setUserData((lastValue) => {
      const value = lastValue.cart[id];
      if (value.unitsTaken == 1) {
        // eslint-disable-next-line no-unused-vars
        const { [id]: itemOut, ...newCart } = lastValue.cart;
        return { ...lastValue, cart: newCart };
      }
      value.unitsTaken -= 1;
      return { ...lastValue, cart: { ...lastValue.cart, [value.name]: value } };
    });
  }

  return (
    <aside className="shopping-cart">
      <input
        className="close"
        type="button"
        value="x"
        onClick={handleVisibility}
      />
      <article>
        {Object.values(products).map(({ name, price, unitsTaken, image }) => {
          return (
            <section key={crypto.randomUUID()}>
              <img src={image} alt="" />
              <div>
                <p>{name}</p>
                <p>
                  {(price * unitsTaken).toLocaleString("en", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
                <p>Cantidad: {unitsTaken}</p>
              </div>
              <div className="right">
                <button onClick={() => handleAdd(name)}>+</button>
                <button onClick={() => handleMinus(name)}>-</button>
              </div>
            </section>
          );
        })}
      </article>
      <input
        type="button"
        value="Purchase"
        className={`purchase ${
          Object.entries(userData?.cart).length !== 0 && "green"
        }`}
        disabled={Object.entries(userData?.cart).length === 0}
        onClick={() => console.log(Object.entries(userData?.cart).length !== 0)}
      />
    </aside>
  );
};

export default Cart;
