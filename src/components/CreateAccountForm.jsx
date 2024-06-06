import { Lock, Mail, User } from "lucide-react";
import GenericInput from "./GenericInput";
import Button from "./Button";
import { Link } from "react-router-dom";

function CreateAccountForm() {
  return (
    <form className="max-w-80 flex flex-col gap-4 mt-10">
      <h2 className="text-white text-center">Crie sua conta</h2>
      <GenericInput placehoder={"Nome"} text={"text"} Icon={User} />
      <GenericInput placehoder={"E-mail"} text={"email"} Icon={Mail} />
      <GenericInput placehoder={"Senha"} text={"password"} Icon={Lock} />
      <Button text="Cadastrar" />
      <Link to={"/login"} className="text-orange text-center mt-20">
        Voltar para o login
      </Link>
    </form>
  );
}

export default CreateAccountForm;
