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

import Zodiaco from "./components/zodiaco/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Template>
        <Home />
      </Template>
    ),
  },
  {
    path: "/store",
    element: (
      <Template>
        <Ecommerce />
      </Template>
    ),
  },
  {
    path: "/ruleta",
    element: (
      <Template>
        <Ruleta />
      </Template>
    ),
  },
  {
    path: "/loteria",
    element: (
      <Template>
        <Loteria />
      </Template>
    ),
  },
   {
     path: "/zodiaco",
     element: (
       <Template>
         <Zodiaco />
       </Template>
     ),
   },
   {
    path: "/torneos",
    element: (
      <Template>
        <Tournament />
      </Template>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
