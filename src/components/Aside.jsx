import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { TokenContext } from "../contexts/TokenContext";

function Aside() {
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  const [notes, setNotes] = useState([]);
  const [allTitles, setAllTitles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:3333/notes/${user.id}`, {
        method: "GET",
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json"
        }
      }).then(data => data.json());
      setNotes(res);
      const tagTitles = notes.flatMap(note => note.tags.map(tag => tag.name));
      const uniqueTagTitles = Array.from(new Set(tagTitles));
      setAllTitles(uniqueTagTitles);
    }
    fetchData();
  }, [user, token]);

  return (
    <aside className="h-screen fixed bg-input min-w-72 max-w-80 flex flex-col w-full col-start-1">
      <h1 className="h-24 flex items-center justify-center text-2xl text-orange font-semibold border-b border-ligth-gray">RocketNotes</h1>
      <ul className="p-4 flex flex-col items-center gap-3 pt-10 text-white">
        <li>Todos</li>
        {allTitles && allTitles.map(title => <li key={title}>{title}</li>)}
      </ul>
      <Link to={"/create-note"} className="w-full text-center bg-orange py-3 text-dark-gray font-semibold mt-auto block  "> 
        Criar Nota
      </Link>
    </aside> 
  ); 
} 

export default Aside;  
  