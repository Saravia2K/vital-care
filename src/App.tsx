import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegistroUsuario from "./pages/RegistroUsuario";
import DashEspecialista from "./pages/DashEspecialista";
import DashGeneral from "./pages/DashGeneral";
import DashSecretaria from "./pages/DashSecretaria";
import Citas from "./pages/Citas";
import Medicina from "./pages/Medicina";
import Pacientes from "./pages/Pacientes";
import HistorialMedico from "./components/HistorialMedico";
import HistorialMedicoCita from "./components/HistorialMedicoCita";
import CitaGeneral from "./components/CitaGeneral";
import CitaEspecialista from "./components/CitaEspecialista";
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/dataTables.bootstrap5.min.css" />


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
          <Route path="/DashEspecialista" element={<DashEspecialista />} />
          <Route path="/DashGeneral" element={<DashGeneral />} />
          <Route path="/DashSecretaria" element={<DashSecretaria />} />
          <Route path="/Citas" element={<Citas/>} />
          <Route path="/Medicina" element={<Medicina/>} />
          <Route path="/Pacientes" element={<Pacientes/>} />
          <Route path="/HistorialMedico" element={<HistorialMedico/>} />
          <Route path="/HistorialMedicoCita" element={<HistorialMedicoCita/>} />
          <Route path="/CitaGeneral" element={<CitaGeneral/>} />
          <Route path="/CitaEspecialista" element={<CitaEspecialista/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

