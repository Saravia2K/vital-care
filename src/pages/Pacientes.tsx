import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgregarPaciente from "../components/AgregarPaciente";
import usePatients from "../hooks/usePacientes";
import { Patient } from "../types";

const Pacientes = () => {
  const { patients } = usePatients();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editPatient, setEditPatient] = useState<Patient>();
  const itemsPerPage = 4;

  const navigate = useNavigate();

  const filteredData = patients.filter((paciente) => {
    const searchLower = searchTerm.toLowerCase();
    const values = [
      paciente.first_name,
      paciente.second_name,
      paciente.first_last_name,
      paciente.second_last_name,
      paciente.birthdate,
      paciente.sex,
    ];
    return values.some(
      (v) =>
        v.toLowerCase().includes(searchLower) || v.toLowerCase() == searchLower
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleViewInfo = (id: number) => {
    navigate(`/Secretaria/HistorialMedico/${id}`);
  };

  return (
    <div className="p-0 bg-[#f0f0f5] min-h-screen">
      <div
        className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0"
        style={{ marginTop: "-2rem" }}
      >
        <h2 className="text-2xl font-bold text-[#9588d0]">Pacientes</h2>
      </div>

      <div className="flex justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar paciente"
            className="pl-4 pr-4 py-2 border rounded-lg shadow-sm w-full text-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="flex items-center space-x-2 mb-20 text-xl"
          onClick={() => setShowModal(true)}
        >
          <img src="/img/plus.svg" alt="Mas" width={30} />
          <span>Agregar Paciente</span>
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full text-left table-auto">
          <thead>
            <tr className="bg-[#9588d0] text-white text-xl">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Apellido</th>
              <th className="px-4 py-2">Fecha de Nacimiento</th>
              <th className="px-4 py-2">Sexo</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((paciente, index) => (
              <tr
                key={paciente.id_patient}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border px-4 py-2 text-xl">
                  {paciente.id_patient}
                </td>
                <td className="border px-4 py-2 text-xl">
                  {paciente.first_name} {paciente.second_name}
                </td>
                <td className="border px-4 py-2 text-xl">
                  {paciente.first_last_name} {paciente.second_last_name}
                </td>
                <td className="border px-4 py-2 text-xl">
                  {new Date(paciente.birthdate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2 text-xl">{paciente.sex}</td>
                <td className="border px-4 py-2 flex justify-center space-x-2">
                  <button onClick={() => handleViewInfo(paciente.id_patient)}>
                    <img src="/img/info.svg" alt="Ver Información" width={30} />
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setEditPatient(paciente);
                    }}
                  >
                    <img
                      src="/img/editar.svg"
                      alt="Editar Paciente"
                      width={30}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#9588d0] text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <AgregarPaciente
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditPatient(undefined);
        }}
        initialValues={editPatient}
      />
    </div>
  );
};

export default Pacientes;
