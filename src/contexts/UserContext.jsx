import { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [user, setUserValue] = useState([]);
  const setUser = value => setUserValue(value);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
