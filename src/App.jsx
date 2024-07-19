import ProtectedRoute from "@/router/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, ProjectView } from "./views";
import { Login, PageError } from "./page";

const router = createBrowserRouter([
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
