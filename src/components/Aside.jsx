
function Aside() {
  return (
    <aside className="h-screen fixed bg-input min-w-72 max-w-80 flex flex-col w-full col-start-1">
      <h1 className="h-24 flex items-center justify-center text-2xl text-orange font-semibold border-b border-ligth-gray">RocketNotes</h1>
      <ul className="p-4 flex flex-col items-center gap-3 pt-10 text-white">
        <li>Todos</li>
        <li>Frontend</li>
        <li>Node</li>
        <li>React</li>
      </ul>
      <button className="w-full bg-orange py-3 text-dark-gray font-semibold mt-auto block  ">
        Criar Note
      </button>
    </aside>
  );
}

export default Aside;
