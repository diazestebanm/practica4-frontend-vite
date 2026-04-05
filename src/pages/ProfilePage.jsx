import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">

        <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
          {user?.username?.charAt(0).toUpperCase()}
        </div>

        <h2 className="text-2xl font-bold text-blue-900 mb-1">{user?.username}</h2>
        <p className="text-gray-500 mb-6">{user?.email}</p>

        <div className="bg-gray-50 rounded-xl p-4 text-left mb-6">
          <p className="text-sm text-gray-500 mb-1">Nombre de usuario</p>
          <p className="font-semibold text-gray-800">{user?.username}</p>
          <hr className="my-3" />
          <p className="text-sm text-gray-500 mb-1">Correo electrónico</p>
          <p className="font-semibold text-gray-800">{user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition shadow-md"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;

