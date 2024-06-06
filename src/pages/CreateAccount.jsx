import CreateAccountForm from "../components/CreateAccountForm";
import FormContainer from "../components/FormContainer";
import Coffee from "/bg-coffee.svg";

function CreateAccount() {
  return (
    <div className="flex bg-dark-gray  items-center flex-col justify-center h-screen sm:flex-row-reverse ">
      <FormContainer className="order-2">
        <CreateAccountForm />
      </FormContainer>
      <img src={Coffee} alt="" className="max-h-screen w-full object-cover order-1" />
    </div>
  );
}

export default CreateAccount;
