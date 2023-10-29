import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/login/page";
import Ecommerce from "./components/e-commerce/page";
import Loteria from "./components/loteria/page";
import Tournament from "./components/torneo/tournament";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ruleta from "./components/ruleta/page";
import Home from "./components/home/page";

import Template from "./templates/main/page";
import Context from "./context";
import Subasta from "./components/subasta/pages/CrearSubasta";
import LoggedIn from "./routing/private-route";

const router = createBrowserRouter([
  {
    path: "/main",
    element: (
      <LoggedIn>
        <Template />
      </LoggedIn>
    ),
    children: [
      {
        path: "subasta",
        element: <Subasta />,
      },
      {
        path: "store",
        element: <Ecommerce />,
      },
      {
        path: "ruleta",
        element: <Ruleta />,
      },
      {
        path: "loteria",
        element: <Loteria />,
      },
      {
        path: "torneos",
        element: <Tournament />,
      },
      {
        path: '',
        element: <Home/>
      }
    ],
  },
  ,
  {
    path: "/",
    element: <Login />,
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
