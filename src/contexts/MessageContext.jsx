import { createContext, useState } from "react";

export const MessageContext = createContext({ message: "", setMessage: () => {} });

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState({ message: "" });

  return <MessageContext.Provider value={{ message, setMessage }}>{children}</MessageContext.Provider>;
};
