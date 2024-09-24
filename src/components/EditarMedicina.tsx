import React, { useState } from "react";

interface AgregarMedicinaProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditarMedicina: React.FC<AgregarMedicinaProps> = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [concentracion, setConcentracion] = useState('');
  const [inventario, setInventario] = useState('');

  if (!isOpen) return null;

  const handleAgregar = (e: React.FormEvent) => {
    e.preventDefault();
    
    onClose();  
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg relative">
      
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

       
        <h2 className="text-center text-2xl font-bold text-[#9588d0] mb-6">
          Editar Medicina
        </h2>

        
        <form onSubmit={handleAgregar} className="space-y-4">
          <div>
            <label className="block text-[#9588d0] font-bold">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              required
            />
          </div>

          <div>
            <label className="block text-[#9588d0] font-bold">Presentación</label>
            <input
              type="text"
              value={presentacion}
              onChange={(e) => setPresentacion(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0] "
              required
            />
          </div>

          <div>
            <label className="block text-[#9588d0] font-bold">Concentración</label>
            <input
              type="text"
              value={concentracion}
              onChange={(e) => setConcentracion(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              required
            />
          </div>

          <div>
            <label className="block text-[#9588d0] font-bold">Inventario</label>
            <input
              type="number"
              value={inventario}
              onChange={(e) => setInventario(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              required
            />
          </div>

          
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-[#9588d0] text-white rounded-lg hover:bg-purple-700"
            >
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default  EditarMedicina;
