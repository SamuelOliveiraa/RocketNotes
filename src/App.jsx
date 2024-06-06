import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AlertMessage from "./components/AlertMessage";
import ErrorPage from "./pages/ErrorPage";
import ThemeToggle from "./components/ThemeToggle";
import Providers from "./contexts/Providers";

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/create-account" Component={CreateAccount}></Route>
          <Route path="*" Component={ErrorPage}></Route>
        </Routes>
      </Router>
      <ThemeToggle />
      {<AlertMessage />}
    </Providers>
  );
}

export default App;
