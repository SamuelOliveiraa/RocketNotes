import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { TokenContext } from "../contexts/TokenContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function ShowNotes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    async function fetchData() {
      setTimeout(async () => {
        const res = await fetch(`http://localhost:3333/notes/${user.id}`, {
          method: "GET",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json"
          }
        }).then(data => data.json());
        setNotes(res);
      }, 500);
    }
    fetchData();
  }, [search, user, token]);

  async function handleSearch(e) {
    setSearch(e.target.value);
    const res = await fetch(`http://localhost:3333/notes/search/${search}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      }
    }).then(data => data.json());
    setNotes(res);
  }

  return (
    <div className="col-start-2 px-7 mt-4 max-w-6xl">
      <input
        type="search"
        value={search}
        name="search"
        id="search"
        className="w-full text-gray placeholder:text-gray mb-5 rounded  bg-input p-2"
        placeholder="Pesquisar pelo titulo"
        onChange={handleSearch}
      />
      <h1 className="text-3xl text-gray">Minhas notas</h1>
      <div className="flex flex-col gap-2 mt-5">
        {notes ? (
          notes.map(note => (
            <Link key={note.id} to={`/note/${note.id}`}>
              <div className="flex flex-col gap-3 w-full bg-ligth-gray rounded p-3">
                <h2 className="text-2xl text-white">{note.title}</h2>
                <div className="flex gap-3">
                  {note.tags.map(tag => (
                    <span className="p-2 bg-orange rounded min-w-20" key={tag.id}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
}

export default ShowNotes;
