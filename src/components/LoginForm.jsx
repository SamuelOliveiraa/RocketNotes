import { Lock, Mail } from "lucide-react";
import GenericInput from "./GenericInput";
import Button from "./Button";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <form className="max-w-80 flex flex-col gap-4 mt-10">
      <h2 className="text-white text-center">Faça seu login</h2>
      <GenericInput placehoder={"E-mail"} text={"email"} Icon={Mail} />
      <GenericInput placehoder={"Senha"} text={"password"} Icon={Lock} />
      <Button text="Entrar" />
      <Link to={"/create-account"} className="text-orange text-center mt-20">Criar Conta</Link>
    </form>
  );
}

export default LoginForm;
