import LayoutApp from "@/layout";
import ProtectedRoute from "@/router/ProtectedRoute";
import { Home, User } from "@/Module/views";
import { createBrowserRouter } from "react-router-dom";
import PageError from "@/Module/error/pageError";
import Login from "@/Module/login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute roles={["Administrador"]}>
          <LayoutApp />
        </ProtectedRoute>
      ),
      errorElement: <PageError />,
      children: [
        {
          path: "/home",
          element: (
            <ProtectedRoute roles={["Administrador"]}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "/user",
          element: (
            <ProtectedRoute roles={["Administrador"]}>
              <User />
            </ProtectedRoute>
          ),
        },
      ],
    },
  
    {
      path: "/login",
      element: (
        <ProtectedRoute roles={["Administrador"]}>
          <Login />
        </ProtectedRoute>
      ),
      errorElement: <PageError />,
    },
  ]);
  