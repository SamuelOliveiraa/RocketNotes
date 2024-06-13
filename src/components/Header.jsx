import { Power } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";
import { UserContext } from "../contexts/UserContext";

function Header({ clasName }) {
  const { setToken } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleClose() {
    setToken("");
    setUser({});
    navigate("/");
  }

  return (
    <header className={`h-24 ${clasName}`}>
      <nav className="border-b border-ligth-gray h-full">
        <ul className="flex items-center justify-between p-4">
          <li>
            <Link to={`/profile/${user.id}`} className="flex items-center gap-2">
              <img src="https://github.com/SamuelOliveiraa.png" alt="Imagem perfil" className="rounded-full w-16 h-16 overflow-x-hidden" />
              <div className="flex flex-col">
                <span className="text-gray">Bem vindo</span>
                <h2 className="text-white">{user.name}</h2>
              </div>
            </Link>
          </li>
          <li>
            <Power className="w-7 h-7 text-gray cursor-pointer" onClick={handleClose} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
