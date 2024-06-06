import { createContext, useState } from "react";

export const ThemeContext = createContext("dark");

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeValue] = useState("dark");
  const setTheme = newMessage => {
    // Adicione qualquer lógica adicional aqui
    setThemeValue(newMessage);
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
