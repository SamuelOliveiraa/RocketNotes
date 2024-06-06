import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { MessageContext } from "./contexts/MessageContext";
import AlertMessage from "./components/AlertMessage";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [message, setMessage] = useState();

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" Component={Login}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/create-account" Component={CreateAccount}></Route>
            <Route path="*" Component={ErrorPage}></Route>
          </Routes>
        </Router>
        {message && <AlertMessage newMessage={message.message} newSeverity={message.error === false ? "success" : "error"} />}
      </div>
    </MessageContext.Provider>
  );
}

export default App;
