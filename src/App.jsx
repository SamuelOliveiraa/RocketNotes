import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AlertMessage from "./components/AlertMessage";
import ErrorPage from "./pages/ErrorPage";
import Providers from "./contexts/Providers";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NotePreview from "./pages/NotePreview";
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
    <Providers>
      <Router>
        <Routes>
          {/* ROTAS PUBLICAS */}
          <Route path="/" Component={Login}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/create-account" Component={CreateAccount}></Route>
          <Route path="*" Component={ErrorPage}></Route>

          {/* Rota para a página inicial */}
          <Route path="/home" element={<ProtectedRoute element={Home} />} />
          <Route path="/note/:id" element={<ProtectedRoute element={NotePreview} />} />
          <Route path="/create-note" element={<ProtectedRoute element={CreateNote} />} />
          <Route path="/profile/:id" element={<ProtectedRoute element={Profile} />} />
        </Routes>
      </Router>
      {<AlertMessage />}
    </Providers>
  );
}

export default App;
