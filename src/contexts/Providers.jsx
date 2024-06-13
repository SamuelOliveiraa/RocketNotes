import { MessageProvider } from "./MessageContext";
import { TokenProvider } from "./TokenContext";
import { UserProvider } from "./UserContext";

function Providers({ children }) {
  return (
    <TokenProvider>
      <UserProvider>
        <MessageProvider>{children}</MessageProvider>
      </UserProvider>
    </TokenProvider>
  );
}

export default Providers;
