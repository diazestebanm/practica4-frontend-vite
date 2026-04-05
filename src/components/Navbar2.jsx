import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar2() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <Link to="/notes" className="text-xl font-extrabold tracking-tight hover:text-blue-200 transition">
        📝 NotesApp
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/notes" className="hover:text-blue-200 transition text-sm font-medium">
          Mis Notas
        </Link>
        <Link to="/profile" className="hover:text-blue-200 transition text-sm font-medium">
          Perfil
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg transition text-sm"
        >
          Salir
        </button>
      </div>
    </nav>
  );
}

export default Navbar2;

