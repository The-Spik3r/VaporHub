import "./dashboard.css";
import { LogOut } from "lucide-react";
import {
  UserCogIcon,
  CirclePlus,
  BookPlus,
  SquareChevronRight,
  SquareChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const dashboard = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [init, setInit] = useState("Publicaciones");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = useState("Publicaciones");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [closebar, setClosebar] = useState(false);
  const navigate = useNavigate();
  const handlerLogout = () => {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem("token");
    // Redireccionar a la página de inicio de sesión u otra página relevante
    navigate("/admin"); // Cambia '/login' por la URL de tu página de inicio de sesión
  };
  const handlerClick = (itemName) => {
    console.log(itemName);
    setInit(itemName);
    setActive(itemName);
  };
  const colpse = () => {
    setClosebar(!closebar);
  };
  const handleBack = () => {
    navigate("/")
  }
  return (
    <>
      <body className="dark">
        <div class={`sidebar  ${closebar ? "close" : " "} `}>
          <a class="logo" onClick={handleBack}>
            {/* <img
              src="logo.jpg"
              alt=""
              className=" mt-4 rounded-full mr-3 ml-2"
              style={{ width: "40px", padding: "15px;" }}
            /> */}
            <div class="logo-name ml-3">
              <p className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl cursor-pointer">
                {closebar ? "VH" : "VaporHub"}
              </p>
            </div>
          </a>

          <ul class="side-menu">
            <li
              className={active === "Publicaciones" ? "active" : ""}
              onClick={() => handlerClick("Publicaciones")}
            >
              <a href="#" className="">
                <BookPlus size="20" className=" ml-2 mr-2"></BookPlus>
                {closebar ? "" : "Publicaciones"}
              </a>
            </li>
            <li
              className={active === "Anuncios" ? "active" : ""}
              onClick={() => handlerClick("Anuncios")}
            >
              <a href="#" className="">
                <CirclePlus size="20" className=" ml-2 mr-2"></CirclePlus>
                {closebar ? "" : "Anuncios"}
              </a>
            </li>
            <li
              className={active === "Usuarios" ? "active" : ""}
              onClick={() => handlerClick("Usuarios")}
            >
              <a href="#" className="">
                <UserCogIcon size="20" className=" ml-2 mr-2"></UserCogIcon>
                {closebar ? "" : "Usuarios"}
                {/* Usuarios */}
              </a>
            </li>
          </ul>
          <ul class="side-menu" id="salir">
            <li>
              <a href="#" class="logout" id="logout" onClick={handlerLogout}>
                <LogOut />
                {closebar ? "" : "Cerrar Sesión"}
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Main Content --> */}
        <div class="content">
          {/* <!-- Navbar --> */}
          <nav>
            <div className="mt-3" onClick={colpse}>
              {closebar ? (
                <SquareChevronRight
                  size="26"
                  className=" ml-2 mr-2"
                ></SquareChevronRight>
              ) : (
                <SquareChevronLeft
                  size="26"
                  className=" ml-2 mr-2"
                ></SquareChevronLeft>
              )}
            </div>
            {/* <form action="#">
            <div class="form-input"></div>
          </form> */}
            {/* <input type="checkbox" id="theme-toggle" hidden />
            <label for="theme-toggle" class="theme-toggle"></label> */}
          </nav>

          {/* <!-- End of Navbar --> */}

          <main className="bg-dashboardMain h-screen"></main>
        </div>
      </body>
    </>
  );
};

// const Anuncios = () => {
//   return (
//     <div className="text-black ">
//       <div>
//         <div>
//           {/* Resumen */}
//           <div className="flex justify-between px-5 items-center">
//             <div>
//               <h1 className="font-semibold text-2xl">Anuncios</h1>
//               <p className="mt-2 text-gray-500"></p>
//             </div>
//           </div>
//           <div className="mt-10 p-5">
//             <div className="flex justify-center">
//               <div className="w-full rounded-xl relative text-white">
//                 <h1 className="absolute top-0 p-2 xl:p-10 font-semibold xl:text-3xl">
//                   Historial De Anuncios
//                 </h1>
//                 <p class="absolute top-10 xl:top-[4rem] p-2 xl:p-10 font-normal xl:text-xl">
//                   En esta sección, puede subir y administrar todos sus
//                   <br /> anuncios para su publicación.
//                 </p>
//                 <img src="bannerv3.png" alt="" className="rounded-xl w-full" />
//               </div>
//             </div>
//           </div>
//           {/* weadas mas */}
//           <div className="p-5">
//             <ModalAds />
//           </div>
//           <div className="px-5">
//           <TableAds/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
const Usuarios = () => {
  return (
    <div className="anuncios-container">
      <h1>Contenido de Usuarios</h1>
      {/* Contenido específico de Anuncios */}
    </div>
  );
};

export default dashboard;
