import { Lock, Mail, User } from "lucide-react";
import GenericInput from "./GenericInput";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MessageContext } from "../contexts/MessageContext";
import { TokenContext } from "../contexts/TokenContext";

function CreateAccountForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setMessage } = useContext(MessageContext);
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const dataJSON = { name, email, password };
    setMessage({});
    const res = await fetch("http://localhost:3333/users", {
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
      <h2 className="text-white text-center">Crie sua conta</h2>
      <GenericInput placehoder={"Nome"} text={"text"} Icon={User} value={name} setValue={setName} />
      <GenericInput placehoder={"E-mail"} text={"email"} Icon={Mail} value={email} setValue={setEmail} />
      <GenericInput placehoder={"Senha"} text={"password"} Icon={Lock} value={password} setValue={setPassword} />
      <Button text="Cadastrar" />
      <Link to={"/login"} className="text-orange text-center mt-20">
        Voltar para o login
      </Link>
    </form>
  );
}

export default CreateAccountForm;
