import GenericInput from "./GenericInput";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
function LoginForm() {
  return (
    <form className="max-w-80 flex flex-col gap-2">
      <h2>Faça seu login</h2>
      <GenericInput placehoder={"E-mail"} text={"email"} Icon={MdOutlineEmail} />
      <GenericInput placehoder={"Senha"} text={"password"} Icon={FaLock} />
    </form>
  );
}

export default LoginForm;
