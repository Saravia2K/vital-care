import React, { useState } from 'react';
import AgregarMedicina from '../components/AgregarMedicina';
import EditarMedicina from '../components/EditarMedicina';

interface Medicina {
  id: number;
  nombre: string;
  presentacion: string;
  concentracion: string;
  inventario: number;
}

const Medicina = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAgregarModal, setShowAgregarModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [selectedMedicina, setSelectedMedicina] = useState<Medicina | null>(null);
  const itemsPerPage = 4;

  const data: Medicina[] = [
    { id: 1, nombre: 'Paracetamol', presentacion: 'Tabletas', concentracion: '500 mg', inventario: 20 },
    { id: 2, nombre: 'Paracetamol', presentacion: 'Tabletas', concentracion: '500 mg', inventario: 30 },
    { id: 3, nombre: 'Paracetamol', presentacion: 'Tabletas', concentracion: '500 mg', inventario: 50 },
    { id: 4, nombre: 'Paracetamol', presentacion: 'Tabletas', concentracion: '500 mg', inventario: 60 },
    { id: 5, nombre: 'Paracetamol', presentacion: 'Tabletas', concentracion: '500 mg', inventario: 70 },
    { id: 6, nombre: 'Paracetamol', presentacion: 'Tabletas', concentracion: '500 mg', inventario: 80 },
  ];

  const filteredData = data.filter((medicina) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      medicina.nombre.toLowerCase().includes(searchLower) ||
      medicina.presentacion.toLowerCase().includes(searchLower) ||
      medicina.concentracion.toLowerCase().includes(searchLower) ||
      medicina.id.toString().includes(searchLower)
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

  // Usa la interfaz para definir el tipo de medicina
  const handleEditarMedicina = (medicina: Medicina) => {
    setSelectedMedicina(medicina);
    setShowEditarModal(true);
  };

  return (
    <div className="p-0 bg-[#f0f0f5] min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0" style={{ marginTop: '-2rem' }}>
        <h2 className="text-2xl font-bold text-[#9588d0]">Medicina</h2>
      </div>

      <div className="flex justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar medicina"
            className="pl-4 pr-4 py-2 border rounded-lg shadow-sm w-full text-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center space-x-2 mb-20 text-xl" onClick={() => setShowAgregarModal(true)}>
          <img src="/img/plus.svg" alt="Agregar Medicina" width={30} />
          <span>Agregar Medicina</span>
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full text-left table-auto">
          <thead>
            <tr className="bg-[#9588d0] text-white text-xl">
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Presentación</th>
              <th className="px-4 py-2">Concentración</th>
              <th className="px-4 py-2">Inventario</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((medicina) => (
              <tr key={medicina.id} className="bg-white">
                <td className="border px-4 py-2 text-xl">{medicina.id}</td>
                <td className="border px-4 py-2 text-xl">{medicina.nombre}</td>
                <td className="border px-4 py-2 text-xl">{medicina.presentacion}</td>
                <td className="border px-4 py-2 text-xl">{medicina.concentracion}</td>
                <td className="border px-4 py-2 text-xl">{medicina.inventario}</td>
                <td className="border px-4 py-2 flex justify-center space-x-2">
                  <button className="p-2 rounded-full text-white" onClick={() => handleEditarMedicina(medicina)}>
                    <img src="/img/editar.svg" alt="Editar" width={35} />
                  </button>
                  <button className="p-2 rounded-full text-white">
                    <img src="/img/eliminar.svg" alt="Eliminar" width={35} />
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
            className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? 'bg-[#9588d0] text-white' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <AgregarMedicina isOpen={showAgregarModal} onClose={() => setShowAgregarModal(false)} />
      <EditarMedicina
        isOpen={showEditarModal}
        onClose={() => setShowEditarModal(false)}
       
      />
    </div>
  );
};

export default Medicina;
