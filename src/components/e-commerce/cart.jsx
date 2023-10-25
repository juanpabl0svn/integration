import { useUserContext } from "../../context";

// eslint-disable-next-line react/prop-types
const Cart = ({ products }) => {
  const { setUserData } = useUserContext();

  function handleAdd(id) {
    setUserData((lastValue) => {
      const value = lastValue.cart[id];
      console.log(value);
      if (value.unitsTaken == lastValue.units) return lastValue;
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
    <aside>
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
              <button onClick={() => handleAdd(name)}>Add</button>
              <button onClick={() => handleMinus(name)}>Minus</button>
            </section>
          );
        })}
      </article>
    </aside>
  );
};

export default Cart;
