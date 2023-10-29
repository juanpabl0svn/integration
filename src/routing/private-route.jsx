import { useEffect } from "react";
import { useUserContext } from "../context";
import localStorage from "../services/localStorage";
import { useNavigate } from "react-router-dom";

const LoggedIn = ({ children }) => {
  const { userData, setUserData } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage(setUserData);
    if (!user && userData == null) {
      navigate("/");
    }
  }, []);
  return userData != null ? children : null;
};

export default LoggedIn;
