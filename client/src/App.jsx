import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Username,
  PageNoteFound,
  Password,
  Profile,
  Recovery,
  Reset,
  Register,
} from "./components/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset ",
    element: <Reset />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "*",
    element: <PageNoteFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
