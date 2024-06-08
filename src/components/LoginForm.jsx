import { Lock, Mail } from "lucide-react";
import GenericInput from "./GenericInput";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MessageContext } from "../contexts/MessageContext";
import { TokenContext } from "../contexts/TokenContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setMessage } = useContext(MessageContext);
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const dataJSON = { email, password };
    setMessage({});
    const res = await fetch("http://localhost:3333/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataJSON)
    }).then(data => data.json());
    setMessage(res);
    setToken(res.token);
    setTimeout(() => {
      setMessage({ message: "" });
    }, 4000);
    if (res.error === false) {
      navigate("/home");
    }
  }

  return (
    <form className="max-w-80 flex flex-col gap-4 mt-10" onSubmit={handleSubmit}>
      <h2 className="text-white text-center">Faça seu login</h2>
      <GenericInput placehoder={"E-mail"} text={"email"} Icon={Mail} value={email} setValue={setEmail} />
      <GenericInput placehoder={"Senha"} text={"password"} Icon={Lock} value={password} setValue={setPassword} min="6" />
      <Button text="Entrar" />
      <Link to={"/create-account"} className="text-orange text-center mt-20">
        Criar Conta
      </Link>
    </form>
  );
}

export default LoginForm;
