import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import NotFound from "./components/404/404";
import Cart from "./components/Cart/Cart";
import Login from "./pages/login";
import Admin from "./components/admin/home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/404", element: <NotFound /> },
  { path: "/Cart", element: <Cart /> },
  { path: "*", element: <NotFound /> }, // Nueva ruta para cualquier otra ruta
  { path: "/login", element: <Login /> }, // Nueva ruta para cualquier otra ruta
  { path: "/admin", element: <Admin /> }, // Nueva ruta para cualquier otra ruta
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;