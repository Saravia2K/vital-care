import React, { useState } from 'react';

interface AgregarCitaProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgregarCita: React.FC<AgregarCitaProps> = ({ isOpen, onClose }) => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [paciente, setPaciente] = useState('');
  const [doctor, setDoctor] = useState('');
  const [estado, setEstado] = useState('Pendiente');

  const pacientes = ['Andrea Liliana Aguilar Cruz', 'Juan Pérez', 'María González'];
  const doctores = ['Dr. Ruiz', 'Dr. Guevara'];

  const handleSave = () => {
  
    console.log({
      fecha,
      hora,
      paciente,
      doctor,
      estado,
    });
    onClose();
  };

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
          Agregar Nueva Cita
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[#9588d0] font-bold">Fecha</label>
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Hora</label>
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Paciente</label>
              <select
                value={paciente}
                onChange={(e) => setPaciente(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              >
                <option value="">Seleccionar Paciente</option>
                {pacientes.map((p, index) => (
                  <option key={index} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Doctor</label>
              <select
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              >
                <option value="">Seleccionar Doctor</option>
                {doctores.map((d, index) => (
                  <option key={index} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-[#9588d0] font-bold">Estado</label>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              >
                <option value="Pendiente">Pendiente</option>
                <option value="Realizada">Realizada</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 bg-[#9588d0] text-white rounded-lg hover:bg-purple-700"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarCita;
