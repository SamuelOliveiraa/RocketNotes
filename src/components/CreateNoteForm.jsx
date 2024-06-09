import { Link } from "react-router-dom";
import GenericInput from "./GenericInput";
import { useContext, useState } from "react";
import LinkItem from "./LinkItem";
import TagItem from "./TagItem";
import Button from "./Button";
import { UserContext } from "../contexts/UserContext";
import { MessageContext } from "../contexts/MessageContext";

function CreateNoteForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState([]);
  const { user } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);

  async function handleCreate(e) {
    e.preventDefault();
    const dataJSON = { title, description, links, tags };
    setMessage({});
    const res = await fetch(`http://localhost:3333/notes/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataJSON)
    }).then(data => data.json());
    setMessage(res);
    setTimeout(() => {
      setMessage({ message: "" });
    }, 4000);
  }

  return (
    <div
      className="w-full max-w-lg flex flex-col items-center gap-4 
    justify-self-center"
    >
      <header className="flex items-center justify-between w-full">
        <h2 className="text-2xl text-white">Criar Nota</h2>
        <Link className="text-gray" to={"/home"}>
          Voltar
        </Link>
      </header>
      <form onSubmit={handleCreate} className="flex flex-col gap-5 w-full mt-5">
        <GenericInput text={""} placehoder={"Titulo"} value={title} setValue={setTitle} />

        <GenericInput text={"textarea"} placehoder={"Descrição"} value={description} setValue={setDescription} />

        <LinkItem links={links} setLinks={setLinks} />

        <TagItem tags={tags} setTags={setTags} />

        <Button text={"Enviar"} />
      </form>
    </div>
  );
}

export default CreateNoteForm;
