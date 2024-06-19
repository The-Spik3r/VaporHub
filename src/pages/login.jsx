// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [defecto, setDefecto] = useState("Login");
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate("/");
  };
  const changeToRegister = () => {
    setDefecto("Register");
  }
  const changeToLogin = () => {
    setDefecto("Login");
  }

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-dark">
        <div className="relative sm:max-w-sm w-full mt-24 sm:mt-0">
          <div className=" bg-primary shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className=" bg-blue-950 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-white shadow-md">
            <p
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl cursor-pointer text-center"
              onClick={handlerClick}
            >
              VaporHub
            </p>

            <div  className="mt-10">
              {defecto === "Login" && (
                <>
                     <p className="text-center font-medium">Inicia Sesión</p>
                  <div>
                    <input
                      type="email"
                      placeholder="Correo electronico"
                      className="mt-1 block w-full border-none bg-white h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-3"
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-3"
                    />
                  </div>
                  <div className="mt-7 flex">
                    <label
                      for="remember_me"
                      className="inline-flex items-center w-full cursor-pointer"
                    >
                      <input
                        id="remember_me"
                        type="checkbox"
                        className=" rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                        name="remember"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Recuerdame
                      </span>
                    </label>
                    <div className="w-full text-right">
                      <a
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        href="#"
                      >
                        ¿Olvidó su contraseña?
                      </a>
                    </div>
                  </div>
                  <div className="mt-7">
                    <button className="bg-blue-950 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Login
                    </button>
                  </div>
                  <div className="flex mt-7 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <label className="block font-medium text-sm text-gray-600 w-full">
                      Accede con
                    </label>
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                  </div>
                  <div className="flex mt-7 justify-center w-full">
                    <button className="mr-5 bg-blue-950 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Facebook
                    </button>
                    <button className="bg-primary border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Google
                    </button>
                  </div>
                  <div className="mt-7">
                    <div className="flex justify-center items-center">
                      <label className="mr-2">¿Eres nuevo?</label>
                      <a
                        href="#"
                        className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                        onClick={changeToRegister}
                      >
                        Crea una cuenta
                      </a>
                    </div>
                  </div>
                </>
              )}
              {defecto === "Register" && (
                <>
                <p className="text-center font-medium">Crea Una Cuenta</p>
                <div>
                    <input
                      type="email"
                      placeholder="Correo electronico"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-3"
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-3"
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      type="password"
                      placeholder="Confirmar Contraseña"
                      className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-3"
                    />
                  </div>
                  <div className="mt-7 flex">
                    <label
                      for="remember_me"
                      className="inline-flex items-center w-full cursor-pointer"
                    >
                      <input
                        id="remember_me"
                        type="checkbox"
                        className=" rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
                        name="remember"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Recuerdame
                      </span>
                    </label>
                    <div className="w-full text-right">
                      <a
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        href="#"
                      >
                        ¿Olvidó su contraseña?
                      </a>
                    </div>
                  </div>
                  <div className="mt-7">
                    <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Login
                    </button>
                  </div>
                  <div className="flex mt-7 items-center text-center">
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                    <label className="block font-medium text-sm text-gray-600 w-full">
                      Create una con
                    </label>
                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                  </div>
                  <div className="flex mt-7 justify-center w-full">
                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Facebook
                    </button>
                    <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                      Google
                    </button>
                  </div>
                  <div className="mt-7">
                    <div className="flex justify-center items-center">
                      <label className="mr-2">¿Ya Tienes Cuenta?</label>
                      <a
                        href="#"
                        className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                        onClick={changeToLogin}
                      >
                        Inicia Sesion
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
