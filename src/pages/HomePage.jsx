import { Link } from "react-router-dom";

function HomePage() {
  return (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
    
    <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full">
      <div className="text-6xl mb-4">📝</div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
        Gestor de Notas
      </h1>
      <p className="text-gray-500 text-lg mb-8">
        Organiza tus ideas y pensamientos de forma sencilla y rápida.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/login"
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-xl transition duration-200 shadow-md"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition duration-200"
        >
          Registrarse
        </Link>
      </div>
    </div>

  </div>
);

}
export default HomePage;
