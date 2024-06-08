import { Link } from "react-router-dom";
import GenericInput from "./GenericInput";
import { useState } from "react";
import LinkItem from "./LinkItem";

function CreateNoteForm() {
  const [title, setTitle] = useState("");
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
      <form action="" className="flex flex-col gap-5 w-full mt-5">
        <GenericInput text={""} placehoder={"Titulo"} value={title} setValue={setTitle} />

        <GenericInput text={"textarea"} placehoder={"Titulo"} value={title} setValue={setTitle} />

        <LinkItem />

      </form>
    </div>
  );
}

export default CreateNoteForm;
