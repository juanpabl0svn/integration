// eslint-disable-next-line react/prop-types
const Minus = ({handle}) => {
  return (
    <svg
    onClick={handle}
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-square-rounded-Minus"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 12h6" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
    </svg>
  );
};

export default Minus;
