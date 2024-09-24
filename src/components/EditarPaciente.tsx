import React from "react";

interface   EditarPacienteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgregarPacienteModal: React.FC<EditarPacienteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-[600px] shadow-lg relative">
     
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
          Editar Paciente
        </h2>

      
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-6"> 
            <div>
              <label className="block text-[#9588d0] font-bold">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
               
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Segundo Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Apellido</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
               
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Segundo Apellido</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Sexo</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]">
                <option value="">Seleccionar</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Fecha de Nacimiento</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Correo</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
               
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Cel</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
               
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#9588d0] font-bold">Tipo De Sangre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                
              />
            </div>
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

export default AgregarPacienteModal;
