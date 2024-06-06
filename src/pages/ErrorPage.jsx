import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col gap-6 bg-dark-gray items-center justify-center h-screen w-screen">
      <h1 className="text-3xl text-white">Voce esta perdido?</h1>
      <Link to="/login" className="text-orange">Voltar para pagina de Login</Link>
    </div>
  );
}

export default ErrorPage;
