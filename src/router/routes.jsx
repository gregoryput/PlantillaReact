import LayoutApp from "@/layout";
import { Login, PageError } from "@/page";
import ProtectedRoute from "@/router/ProtectedRoute";
import {  ProjectView } from "@/views";
import { createBrowserRouter } from "react-router-dom";

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
  