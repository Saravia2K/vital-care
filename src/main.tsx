import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import RegistroUsuario from "./pages/RegistroUsuario";
import DashEspecialista from "./pages/DashEspecialista";
import DashGeneral from "./pages/DashGeneral";
import DashSecretaria from "./pages/DashSecretaria";
import Citas from "./pages/Citas";
import Medicina from "./pages/Medicina";
import Pacientes from "./pages/Pacientes";
import LayoutSecretaria from "./components/LayoutSecretaria";
import LayoutGeneral from "./components/LayoutGeneral";
import LayoutEspecialista from "./components/LayoutEspecialista";
import HistorialMedico from "./components/HistorialMedico";
import HistorialMedicoCita from "./components/HistorialMedicoCita";
import CitaGeneral from "./components/CitaGeneral";
import CitaEspecialista from "./components/CitaEspecialista";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/RegistroUsuario",
    element: <RegistroUsuario />,
  },
  {
    path: "/Secretaria",
    element: <LayoutSecretaria />,
    children: [
      {
        path: "dashboard",
        element: <DashSecretaria />,
      },
      {
        path: "Pacientes",
        element: <Pacientes />,
      },
      {
        path: "Citas",
        element: <Citas />,
      },
      {
        path: "Medicina",
        element: <Medicina />,
      },
      {
        path: "HistorialMedicoCita/:id",
        element: <HistorialMedicoCita />,
      },
      {
        path: "HistorialMedico/:id",
        element: <HistorialMedico />,
      },
    ],
  },
  {
    path: "/General",
    element: <LayoutGeneral />,
    children: [
      {
        path: "dashboard",
        element: <DashGeneral />,
      },
      {
        path: "Medicina",
        element: <Medicina />,
      },
      {
        path: "CitaGeneral/:id",
        element: <CitaGeneral />,
      },
      {
        path: "HistorialMedicoCita/:id",
        element: <HistorialMedicoCita />,
      },
    ],
  },
  {
    path: "/Especialista",
    element: <LayoutEspecialista />,
    children: [
      {
        path: "dashboard",
        element: <DashEspecialista />,
      },
      {
        path: "Medicina",
        element: <Medicina />,
      },
      {
        path: "CitaEspecialista/:id",
        element: <CitaEspecialista />,
      },
      {
        path: "HistorialMedicoCita/:id",
        element: <HistorialMedicoCita />,
      },
    ],
  },
]);

const qc = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={qc}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
