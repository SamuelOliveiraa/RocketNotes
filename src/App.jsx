import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/create-account" Component={CreateAccount}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
