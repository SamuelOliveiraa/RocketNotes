import { useContext, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import LoginForm from "../components/LoginForm";
import Coffee from "/bg-coffee.svg";
import { MessageContext } from "../contexts/MessageContext";

function Login() {
  const { message } = useContext(MessageContext);
  useEffect(() => {
    console.log(message);
  }, [message]);
  return (
    <div className="flex bg-dark-gray flex-col h-screen sm:grid sm:grid-cols-2 sm:">
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <img src={Coffee} alt="" className="max-h-screen w-full object-cover" />
    </div>
  );
}

export default Login;
