function FormContainer({ children }) {
  return (
    <div className="p-3 text-center flex flex-col items-center justify-center gap-2 w-full">
      <h1 className="text-orange text-3xl">Rocket Notes</h1>
      <p className="text-gray text-base">Aplicação para salvar e gerenciar seus links úteis.</p>
      {children}
    </div>
  );
}

export default FormContainer;
