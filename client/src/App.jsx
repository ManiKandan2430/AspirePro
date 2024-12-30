import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import {
  HomePage,
  LandingPage,
  Register,
  Error,
  Dashboard,
  Login,
  Profile,
  Addjob,
  Stats,
  Alljob,
  EditJob,
  Admin,
} from "./pages";

import { action as RegisterAction } from "./pages/Register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage user={currentUser} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "register",
          element: <Register />,
          action: RegisterAction, // Ensure the action is passed here
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
          children: [
            {
              index: true,
              element: <Addjob data={currentUser} />,
            },
            {
              path: "profile",
              element: <Profile data={currentUser} />,
            },
            {
              path: "stats",
              element: <Stats />,
            },
            {
              path: "alljobs",
              element: <Alljob />,
            },
            {
              path: "edit-job/:id",
              element: <EditJob />,
            },
            {
              path: "admin",
              element: <Admin />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
