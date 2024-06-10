import { useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Element }) {
  const { token } = useContext(TokenContext);

  const isAuthenticated = token;

  return isAuthenticated ? <Element /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
