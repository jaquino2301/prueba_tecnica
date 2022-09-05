import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
    nombre: "",
    apellido: "",
    cedula: "",
    github: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombres
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, nombre: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="escribe tu nombre"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="apellido"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Apellidos
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, apellido: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="escribe tu apellido"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="cedula"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Cedula
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, cedula: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Cedula"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="github"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Usuario GitHub
          </label>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, github: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Escribe tu usuario GitHub"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Ya tienes una cuenta? Registrate
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
}