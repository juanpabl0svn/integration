import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function Context({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData({
      username: "Juan Pablo",
      cart: {},
      currency: 200,
      selectedItem: null,
    });
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);
