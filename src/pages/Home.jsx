import { useContext, useEffect } from "react";
import { TokenContext } from "../contexts/TokenContext";
import ErrorPage from "./ErrorPage";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Aside from "../components/Aside";

function Home() {
  const { token } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      console.log(token);
      if (token !== "") {
        const res = await fetch("http://localhost:3333/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        }).then(data => data.json());
        setUser(res);
      }
    }
    fetchData();
  }, [token, setUser]);

  return token === "" && user ? (
    <ErrorPage />
  ) : (
    <div className="grid grid-cols-home bg-dark-gray w-screen h-screen">
      <Aside />
      <Header />
    </div>
  );
}

export default Home;
