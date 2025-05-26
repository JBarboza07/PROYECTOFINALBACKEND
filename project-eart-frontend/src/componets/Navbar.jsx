import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Project Eart
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Feed
        </Link>
        <Link to="/create" className="text-gray-700 hover:text-blue-600">
          Crear
        </Link>
        <Link to="/profile/1" className="text-gray-700 hover:text-blue-600">
          Perfil
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link to="/register" className="text-gray-700 hover:text-blue-600">
          Registro
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
