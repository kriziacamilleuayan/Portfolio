import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Layout from "./pages/layout.jsx";
import About from "./pages/about";

import "@fontsource/open-sans";
import "@fontsource/press-start-2p";
import "@fontsource/montserrat";
import "@fontsource-variable/source-code-pro";
import "@fontsource/reenie-beanie";
import "./index.css";
import "animate.css/animate.min.css";
import { AboutPath, BasePath, HomePath, ResumePath } from "./const";

const router = createBrowserRouter(
  [
    {
      path: HomePath,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ResumePath,
          element: <Resume />,
        },
        {
          path: AboutPath,
          element: <About />,
        },
      ],
    },
  ],
  {
    basename: BasePath,
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
