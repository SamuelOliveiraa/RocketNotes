import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
      setTimeout(async () => {
        const res = await fetch(`http://localhost:3333/notes/note/${id}`, {
          method: "GET", 
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json"
          }
        }).then(data => data.json());
        console.log(res)  
        setNote(res);  
      }, 500);
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
    setMessage(res.message);
    setTimeout(() => {
      setMessage({ message: "" });
    }, 4000);
    if (res.error === false) {
      navigate("/home");
    }
  }
  return (
    note && (
      <div className="p-6">
        <h2 onClick={handleDeleteNote} className="cursor-pointer text-end text-orange text-xl">Excluir a nota</h2>

        <h1>{note.title}</h1>

        <p>{note.description}</p>

        <div>
          <h2>Links uteis</h2>
          {note.links && note.links.map(link => <p key={link.id}>{link.name}</p>)}
        </div>

        <div>
          <h2>Marcadores</h2>
          {note.tags &&
            note.tags.map(tag => (
              <span key={tag.id} className="p-2 bg-orange rounded">
                {tag.name}
              </span>
            ))}
        </div>
      </div>
    )
  );
}

export default ShowNoteById;
