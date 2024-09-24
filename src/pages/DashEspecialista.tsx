import React, { useState } from 'react';

const DashEspecialista: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const data = [
    { fecha: '20/04/24', hora: '10:30 Am', paciente: 'Andrea Liliana Aguilar Cruz', drAsignado: 'Dr. Ruiz', estado: 'Pendiente' },
    { fecha: '20/04/24', hora: '10:30 Am', paciente: 'Andrea Liliana Aguilar Cruz', drAsignado: 'Dr. Ruiz', estado: 'Pendiente' },
    { fecha: '20/04/24', hora: '10:30 Am', paciente: 'Andrea Liliana Aguilar Cruz', drAsignado: 'Dr. Ruiz', estado: 'Realizada' },
    { fecha: '20/04/24', hora: '10:30 Am', paciente: 'Andrea Liliana Aguilar Cruz', drAsignado: 'Dr. Ruiz', estado: 'Realizada' },
    { fecha: '20/04/24', hora: '10:30 Am', paciente: 'Andrea Liliana Aguilar Cruz', drAsignado: 'Dr. Ruiz', estado: 'Realizada' },
    { fecha: '20/04/24', hora: '10:30 Am', paciente: 'Andrea Liliana Aguilar Cruz', drAsignado: 'Dr. Ruiz', estado: 'Realizada' },
  ];

  const filteredData = data.filter((cita) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      cita.paciente.toLowerCase().includes(searchLower) ||
      cita.drAsignado.toLowerCase().includes(searchLower) ||
      cita.fecha.includes(searchLower) ||
      cita.estado.toLowerCase().includes(searchLower)
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

  return (
    <div className="p-0 bg-[#f0f0f5] min-h-screen">
    
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0" style={{ marginTop: '-2rem' }}>
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
          <h3 className="text-center text-xl font-bold text-[#9588d0] mb-4">Mi Historial De Citas Referidad</h3>
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
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border px-4 py-2 text-xl">{cita.fecha}</td>
                    <td className="border px-4 py-2 text-xl">{cita.hora}</td>
                    <td className="border px-4 py-2 text-xl">{cita.paciente}</td>
                    <td className="border px-4 py-2 text-xl">{cita.drAsignado}</td>
                    <td className="border px-4 py-2 text-xl">{cita.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          <div className="mt-4 flex justify-end space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-[#9588d0] text-white' : 'bg-gray-200'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-[#9588d0] mb-4">Referencias Pendientes</h3>
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md">
                <img
                  src="/img/citas.png"
                  alt="Icono Cardiograma"
                  className="h-12 w-12"
                />
                <div>
                  <p className="font-bold text-[#9588d0]">Hanna Johnson</p>
                  <p className="text-sm text-gray-600">23/07/24, 10:30 AM</p>
                  <p className="text-[#f18b8d] font-bold">Pendiente</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashEspecialista;
