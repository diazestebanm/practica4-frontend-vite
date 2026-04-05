import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const {
    register,   handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/notes");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signin(values);
  });
    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
            Bienvenido
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
            Ingresa tus credenciales para continuar
        </p>

        <form onSubmit={onSubmit}>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Correo</label>
            <input
                type="email"
                {...register("email")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="tucorreo@email.com"
            />
            </div>

            <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">Contraseña</label>
            <input
                type="password"
                {...register("password")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="••••••••"
            />
            </div>

            <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg transition duration-200 shadow-md"
            >
            Iniciar Sesión
            </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-4">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="text-blue-600 hover:underline font-medium">
            Regístrate
            </a>
        </p>
        </div>
    </div>
    );
 

}
export default LoginPage;
