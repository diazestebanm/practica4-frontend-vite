import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
  <nav className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
    <Link to="/" className="text-xl font-extrabold tracking-tight hover:text-blue-200 transition">
      📝 NotesApp
    </Link>
    <div className="flex gap-4">
      <Link
        to="/login"
        className="bg-white text-blue-900 hover:bg-blue-100 font-bold px-4 py-2 rounded-lg transition text-sm"
      >
        Iniciar Sesión
      </Link>
      <Link
        to="/register"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition text-sm"
      >
        Registrarse
      </Link>
    </div>
  </nav>
);

}

export default Navbar1;
