import { Link, useNavigate } from "react-router-dom";
import Container from "./Container";
import { ArrowLeft } from "lucide-react";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import userPhoto from "../../public/user.svg";
import GenericInput from "../components/GenericInput";
import Button from "../components/Button";
import { MessageContext } from "../contexts/MessageContext";
import { TokenContext } from "../contexts/TokenContext";

function Profile() {
  const { user } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);
  const { token } = useContext(TokenContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const dataJSON = { name, email, actualPassword, newPassword };
    setMessage({});
    const res = await fetch(`http://localhost:3333/users/${user.id}`, {
      method: "PUT",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataJSON)
    }).then(data => data.json());
    setMessage(res);
    setTimeout(() => {
      setMessage({ message: "" });
    }, 4000);
    if (res.error === false) {
      navigate("/home");
    }
  }

  return (
    <Container className={"grid grid-cols-1 gap-14 "}>
      <div className="h-44 bg-input w-full flex items-center">
        <Link to={"/home"}>
          <ArrowLeft className="w-6 h-6 ml-52 text-gray" />
        </Link>
      </div>

      <form className="flex flex-col max-w-sm mx-auto w-full gap-5 -mt-14  " onSubmit={handleSubmit}>
        {user.avatar === "" ? (
          <img src={userPhoto} alt={user.name} className="rounded-full w-36 h-36 bg-gray p-2 mx-auto" />
        ) : (
          <img src={user.avatar} alt={user.name} className="rounded-full w-52 h-52 mx-auto" />
        )}

        <div className="flex items-center gap-3 flex-col">
          <GenericInput text={"text"} placehoder={"Nome"} value={name} setValue={setName} />

          <GenericInput text={"text"} placehoder={"E-mail"} value={email} setValue={setEmail} />

          <GenericInput text={"password"} placehoder={"Senha atual"} value={actualPassword} setValue={setActualPassword} />

          <GenericInput text={"password"} required={false} placehoder={"Nova Senha"} value={newPassword} setValue={setNewPassword} />

          {actualPassword.length !== 0 ? <Button text={"Enviar"} /> : <Button disabled text={"Enviar"} />}
        </div>
      </form>
    </Container>
  );
}

export default Profile;
