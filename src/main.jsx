import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./components/login/page";
import Ecommerce from "./components/e-commerce/page";
import Loteria from "./components/loteria/page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ruleta from "./components/ruleta/page";

import Template from "./templates/main/page";

const router = createBrowserRouter([
  {
    path: "/",
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
    element: (<Template>
      <Loteria />
    </Template>)
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
