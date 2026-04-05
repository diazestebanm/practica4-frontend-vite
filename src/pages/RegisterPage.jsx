import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/notes");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center px-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">

      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-2">
        Crear Cuenta
      </h2>
      <p className="text-center text-gray-500 mb-6 text-sm">
        Completa el formulario para registrarte
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Usuario</label>
          <input
            type="text"
            {...register("username")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Tu nombre de usuario"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Correo</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="tucorreo@email.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Contraseña</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 rounded-lg transition duration-200 shadow-md"
        >
          Registrarse
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-4">
        ¿Ya tienes cuenta?{" "}
        <a href="/login" className="text-indigo-600 hover:underline font-medium">
          Inicia sesión
        </a>
      </p>
    </div>
  </div>
);

}
export default RegisterPage;
