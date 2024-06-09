import { Plus, X } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TagItem({ tags, setTags }) {
  const [name, setName] = useState("");

  function handleTags(e) {
    e.preventDefault();
    const newTags = [...tags, { id: uuidv4(), name }];
    setTags(newTags);
    setName("");
  }

  function handleDelete(id) {
    const filteredTags = tags.filter(tag => {
      return tag.id !== id;
    });
    setTags(filteredTags);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="text-xl text-gray border-b pb-4 border-ligth-gray">Marcadores</h1>
      <div className="grid grid-cols-links griro gap-2 w-full mb-6">
        <div className="flex justify-between py-2 px-1 items-center rounded-sm border border-dashed border-ligth">
          <input
            type="text"
            placeholder="Novo marcador"
            className="text-gray font-thin px-2 bg-transparent h-full w-32 outline-none text-sm"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleTags}>
            <Plus className="w-6 h-6 text-orange" />
          </button>
        </div>
        {tags.map(tag => (
          <div className="h-10 min-w-24 h- text-base bg-input py-1 px-3 rounded-md text-white flex gap-2  items-center justify-between" key={tag.id}>
            {tag.name}
            <button onClick={() => handleDelete(tag.id)}>
              <X className="w-4 h-4 text-red-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagItem;
