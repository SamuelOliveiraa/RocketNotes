import { Plus, X } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function LinkItem() {
  const [links, setLinks] = useState([]);
  const [text, setText] = useState("");

  function handleAdd(e) {
    e.preventDefault()
    const newLink = [...links, { id: uuidv4(), url: text }];
    setLinks(newLink);
    setText("")
  }

  function handleDelete(id) {
    const filteredLinks = links.filter(link => {
      return link.id !== id;
    });
    setLinks(filteredLinks);
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-xl text-gray border-b pb-4 border-ligth-gray">Links úteis</h1>
      <div className="mt-2 flex justify-between py-2 px-1 items-center rounded-sm border border-dashed border-ligth">
        <input
          type="text"
          placeholder="Novo link"
          className="text-gray px-2 bg-transparent h-full w-11/12 outline-none"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={handleAdd}>
          <Plus className="w-6 h-6 text-orange" />
        </button>
      </div>
      {links.map(link => (
        <div className="w-full bg-input py-2 px-3 rounded text-white flex  items-center justify-between" key={link.id}>
          {link.url}
          <button onClick={() => handleDelete(link.id)}>
            <X className="w-5 h-5 text-red-500" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default LinkItem;
