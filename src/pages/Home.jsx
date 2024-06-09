import { useContext, useEffect } from "react";
import { TokenContext } from "../contexts/TokenContext";
import ErrorPage from "./ErrorPage";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Container from "./Container";

function Home() {
  const { token } = useContext(TokenContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
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
    <Container className={"grid grid-cols-home"}>
      <Aside />
      <Header clasName={"col-start-2"}/>
    </Container>
  );
}

export default Home;
