import { useContext, createContext, useState, useEffect } from "react";
import localStorage from "./services/localStorage";

const UserContext = createContext({});

export default function Context({ children }) {

  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}


export const useUserContext = () => useContext(UserContext);
