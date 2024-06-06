import { MessageProvider } from "./MessageContext";
import { ThemeProvider } from "./ThemeContext";

function Providers({ children }) {
  return (
    <ThemeProvider>
      <MessageProvider>{children}</MessageProvider>
    </ThemeProvider>
  );
}

export default Providers;
