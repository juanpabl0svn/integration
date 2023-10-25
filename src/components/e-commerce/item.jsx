import Add from "../../svg/add";
import Minus from "../../svg/minus";
import { useUserContext } from "../../context";

// eslint-disable-next-line react/prop-types
const Item = ({ name, image, price, units }) => {
  const { userData, setUserData } = useUserContext();

  function handleClickTake() {
    if (units == 0) return;

    setUserData((lastValue) => {
      const newCart = lastValue.cart;
      const item = {
        name,
        image,
        units,
        price,
        unitsTaken: 1,
      };
      newCart[name] = item;
      return { ...lastValue, cart: newCart };
    });
  }

  function handleClickThrow() {
    if (units == 0) return;

    setUserData((lastValue) => {
      // eslint-disable-next-line no-unused-vars
      const { [name]: itemOut, ...newCart } = lastValue.cart;
      return { ...lastValue, cart: newCart };
    });
  }

  return (
    <article>
      <img src={image} alt={name} />
      <section>
        <p>
          {price.toLocaleString("en", { style: "currency", currency: "USD" })}
        </p>
        <p>Disponibles: {units}</p>
        {units != 0 &&
          (userData?.cart[name] ? (
            <Minus handle={handleClickThrow} />
          ) : (
            <Add handle={handleClickTake} />
          ))}
      </section>
    </article>
  );
};

export default Item;
