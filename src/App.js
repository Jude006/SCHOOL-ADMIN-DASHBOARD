import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages/components

import DashBoard from "./pages/DashBoard";
import Chat from "./pages/Chat";
import Events from "./pages/Events";
import Finance from "./pages/Finance";
import Food from "./pages/Food";
import LatestActivity from "./pages/LatestActivity";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <DashBoard />,
  },
  {
    path: "/events", 
    element: <Events />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/finance",
    element: <Finance />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/activities",
    element: <LatestActivity />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*", 
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
