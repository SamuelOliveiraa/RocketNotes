import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AlertMessage from "./components/AlertMessage";
import ErrorPage from "./pages/ErrorPage";
import Providers from "./contexts/Providers";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NotePreview from "./pages/NotePreview";

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          <Route path="/" Component={Login}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/note/:id" Component={NotePreview}></Route>
          <Route path="/create-account" Component={CreateAccount}></Route>
          <Route path="/create-note" Component={CreateNote}></Route>
          <Route path="*" Component={ErrorPage}></Route>
        </Routes>
      </Router>
      {<AlertMessage />}
    </Providers>
  );
}

export default App;
