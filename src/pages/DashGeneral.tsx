import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDays, format } from "date-fns";
import useCitasHoy from "../hooks/useCitasHoy";
import useCitas from "../hooks/useCitas";

const DashGeneral: FC = () => {
  const { citas } = useCitas();
  const { citas: citasHoy } = useCitasHoy();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const navigate = useNavigate();

  const filteredData = citas.filter((cita) => {
    const searchLower = searchTerm.toLowerCase();
    const { patient, doctor } = cita;
    const patientFullname = [
      patient.first_name,
      patient.second_name,
      patient.first_last_name,
      patient.second_last_name,
    ].join(" ");
    const doctorFullname = [doctor.names, doctor.last_names].join(" ");
    const vals = [
      cita.date,
      patientFullname,
      doctorFullname,
      cita.finished ? "Realizada" : "Pendiente",
    ];
    return vals.some((v) => v.toLowerCase().includes(searchLower));
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCitaClick = (finished: boolean, id: number) => {
    if (finished) {
      navigate("/General/HistorialMedicoCita");
      return;
    }

    navigate(`/General/CitaGeneral/${id}`);
  };

  return (
    <div className="p-0 bg-[#f0f0f5] min-h-screen">
      <div
        className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0"
        style={{ marginTop: "-2rem" }}
      >
        <h2 className="text-2xl font-bold text-[#9588d0]">Dashboard</h2>
      </div>

      <div className="flex justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar cita"
            className="pl-4 pr-4 py-2 border rounded-lg shadow-sm w-full text-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <h3 className="text-center text-xl font-bold text-[#9588d0] mb-4">
            Mi Historial De Citas
          </h3>
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr className="bg-[#9588d0] text-white text-xl">
                  <th className="px-4 py-2">Fecha</th>
                  <th className="px-4 py-2">Hora</th>
                  <th className="px-4 py-2">Paciente</th>
                  <th className="px-4 py-2">Dr. Asignado</th>
                  <th className="px-4 py-2">Estado</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((cita, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    style={{ cursor: "pointer" }}
                  >
                    <td className="border px-4 py-2 text-xl">
                      {format(addDays(new Date(cita.date), 1), "dd/MM/yyyy")}
                    </td>
                    <td className="border px-4 py-2 text-xl">
                      {new Date(cita.date).toLocaleTimeString()}
                    </td>
                    <td className="border px-4 py-2 text-xl">
                      {cita.patient.first_name} {cita.patient.first_last_name}
                    </td>
                    <td className="border px-4 py-2 text-xl">
                      {cita.doctor.names} {cita.doctor.last_names}
                    </td>
                    <td className="border px-4 py-2 text-xl">
                      {cita.finished ? "Realizada" : "Pendiente"}
                      <button
                        className="p-2 rounded-full text-white ml-6"
                        onClick={() =>
                          handleCitaClick(cita.finished, cita.id_appointment)
                        }
                      >
                        <img src="/img/info.svg" alt="Editar" width={35} />
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
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-[#9588d0] mb-4">
            Citas para Ahora
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {citasHoy.map((cita, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src="/img/citas.png"
                  alt="Icono Cardiograma"
                  className="h-12 w-12"
                />
                <div>
                  <p className="font-bold text-[#9588d0]">
                    {cita.patient.first_name} {cita.patient.first_last_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {format(new Date(cita.date), "dd/MM/yyyy, HH:mm")}
                  </p>
                  <p className="font-bold text-[#f18b8d]">Pendiente</p>
                </div>
                <button
                  className="p-2 rounded-full text-white"
                  onClick={() => handleCitaClick(false, cita.id_appointment)}
                >
                  <img src="/img/info.svg" alt="Editar" width={35} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashGeneral;
