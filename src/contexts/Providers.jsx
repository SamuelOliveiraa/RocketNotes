import { MessageProvider } from "./MessageContext";
import { ThemeProvider } from "./ThemeContext";
import { TokenProvider } from "./TokenContext";
import { UserProvider } from "./UserContext";

function Providers({ children }) {
  return (
    <TokenProvider>
      <UserProvider>
        <ThemeProvider>
          <MessageProvider>{children}</MessageProvider>
        </ThemeProvider>
      </UserProvider>
    </TokenProvider>
  );
}

export default Providers;
