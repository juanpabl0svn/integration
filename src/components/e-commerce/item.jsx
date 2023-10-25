import Add from "../../svg/add";


// eslint-disable-next-line react/prop-types
const Item = ({ name, image, price, units }) => {
  return (
    <article>
      <img src={image} alt={name} />
      <section>
        <p>
          {price.toLocaleString("en", { style: "currency", currency: "USD" })}
        </p>
        <p>Disponibles: {units}</p>
        <Add/>
      </section>
    </article>
  );
};

export default Item;
