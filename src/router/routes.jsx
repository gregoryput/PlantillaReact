import { Login, PageError } from "@/page";
import ProtectedRoute from "@/router/ProtectedRoute";
import { Home, ProjectView } from "@/views";
import { createBrowserRouter } from "react-router-dom";





export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute roles={["Administrador"]}>
          <Home />
        </ProtectedRoute>
      ),
      errorElement: <PageError />,
      children: [
        {
          path: "/projectView",
          element: (
            <ProtectedRoute roles={["Administrador"]}>
              <ProjectView />
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
  