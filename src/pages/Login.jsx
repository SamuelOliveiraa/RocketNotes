import FormContainer from "../components/FormContainer";
import LoginForm from "../components/LoginForm";
import Coffee from "/bg-coffee.svg";

function Login() {
  
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
