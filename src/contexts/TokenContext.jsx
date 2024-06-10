import { createContext, useState } from "react";

export const TokenContext = createContext("");

export const TokenProvider = ({ children }) => {
  const [token, setTokenValue] = useState("");
  const setToken = value => setTokenValue(value);

  return <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>;
};
