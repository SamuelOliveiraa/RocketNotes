import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";
import { MessageContext } from "../contexts/MessageContext";

function ShowNoteById() {
  const [note, setNote] = useState([]);
  const { token } = useContext(TokenContext);
  const { setMessage } = useContext(MessageContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3333/notes/note/${id}`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      }).then(data => data.json());
      setNote(res);
    }
    fetchData();
  }, [id, token]);

  async function handleDeleteNote() {
    setMessage({});
    const res = await fetch(`http://localhost:3333/notes/note/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    }).then(data => data.json());
    console.log(res);
    setMessage(res);
    setTimeout(() => {
      setMessage({ message: "" });
    }, 4000);
    if (res.error === false) {
      navigate("/home");
    }
  }

  return (
    note && (
      <div className="p-6 m-auto max-w-xl text-white">
        <h2 onClick={handleDeleteNote} className="mb-5 cursor-pointer text-end text-orange text-xl">
          Excluir a nota
        </h2>

        <h1 className="text-3xl uppercase font-semibold">{note.title}</h1>

        <p className="my-4">{note.description}</p>

        <div className="my-5">
          <h2 className="text-gray text-xl border-b border-ligth-gray pb-4">Links uteis</h2>
          {note.links &&
            note.links.map(link => (
              <a href={link.url} className="mt-1 block" key={link.id}>
                {link.url}
              </a>
            ))}
        </div>

        <div className="my-5">
          <h2 className="text-gray text-xl border-b border-ligth-gray pb-4">Marcadores</h2>
          <div className="my-5 grid grid-cols-tags gap-2">
            {note.tags &&
              note.tags.map(tag => (
                <span key={tag.id} className="p-1 text-sm text-black bg-orange rounded whitespace-nowrap text-center">
                  {tag.name}
                </span>
              ))}
          </div>
        </div>

        <Link to={"/home"} className="bg-orange block rounded p-3 text-center text-lg text-dark-gray font-bold mt-28">
          Voltar{" "}
        </Link>
      </div>
    )
  );
}

export default ShowNoteById;
