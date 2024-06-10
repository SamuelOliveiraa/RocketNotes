import { createContext, useState } from "react";

export const MessageContext = createContext({ message: "", setMessage: () => {} });

export const MessageProvider = ({ children }) => {
  const [message, setMessageValue] = useState({ message: "" });
  const setMessage = value => setMessageValue(value);

  return <MessageContext.Provider value={{ message, setMessage }}>{children}</MessageContext.Provider>;
};
