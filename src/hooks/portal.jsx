import { createPortal } from "react-dom";

const portal = ({ name }) => {
  return createPortal(<div>{name}</div>);
};

export default portal;
