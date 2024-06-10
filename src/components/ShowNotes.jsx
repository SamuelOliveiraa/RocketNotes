import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { TokenContext } from "../contexts/TokenContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function ShowNotes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let endpoint = `http://localhost:3333/notes/${user.id}`;
      
      if (search !== "") {
        endpoint = `http://localhost:3333/notes/search/${search}`;
        }
      const res = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      }).then(data => data.json());
      setNotes(res);
      setLoading(false);
    }
    fetchData();
  }, [user, token, search]);

  return (
    <div className="col-start-2 px-7 mt-4 max-w-6xl">
      <input
        type="search"
        value={search}
        name="search"
        id="search"
        className="w-full text-gray placeholder:text-gray mb-5 rounded  bg-input p-2"
        placeholder="Pesquisar pelo titulo"
        onChange={e => setSearch(e.target.value)}
      />
      <h1 className="text-3xl text-gray">Minhas notas</h1>
      <div className="flex flex-col gap-2 mt-5">

        {notes &&
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
          ))}
        
        {notes.length === 0 && <h1 className="text-xl text-white">Sem resultados</h1>}
      </div>
    </div>
  );
}

export default ShowNotes;
