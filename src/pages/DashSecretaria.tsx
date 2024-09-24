import React, { useState } from 'react';
import AgregarPaciente from '../components/AgregarPaciente';
import AgregarCita from '../components/AgregarCita';

export default function DashSecretaria() {
  const [showAgregarPacienteModal, setShowAgregarPacienteModal] = useState(false);
  const [showAgregarCitaModal, setShowAgregarCitaModal] = useState(false);

  return (
    <div className="bg-[#f0f0f5] min-h-screen p-0">
    
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0" style={{ marginTop: '-2rem' }}>
        <h2 className="text-2xl font-bold text-[#9588d0]">Dashboard</h2>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        
       
        <div className="lg:col-span-7 flex justify-center items-center py-20">
          <img
            src="/img/Dash.png"
            alt="Ilustración de secretaria"
            className="w-full max-w-2xl"
          />
        </div>

        <div className="lg:col-span-2 flex flex-col justify-center items-start space-y-4 py-60">
          <button
            className="bg-[#c7c0e6] text-white text-xl px-6 py-3 rounded-3xl hover:bg-purple-700 w-full"
            onClick={() => setShowAgregarCitaModal(true)} 
          >
            Agregar Cita
          </button>
          <button
            className="bg-[#c7c0e6] text-white text-xl px-6 py-3 rounded-3xl hover:bg-purple-700 w-full"
            onClick={() => setShowAgregarPacienteModal(true)} 
          >
            Agregar Paciente
          </button>
        </div>

       
        <div className="lg:col-span-3 flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
            <h3 className="text-lg font-bold text-[#9588d0] mb-4">Citas para Ahora</h3>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <li key={item} className="flex items-center bg-[#f8f9fc] p-4 rounded-lg border border-gray-200">
                  <img
                    src="/img/citas.png"
                    alt="Icono Cita"
                    className="h-10 w-10 mr-4"
                  />
                  <div>
                    <p className="font-bold text-[#9588d0]">Hanna Jonhson</p>
                    <p className="text-sm text-gray-600">23/07/24, 10:30 AM</p>
                    <p className="text-[#f18b8d] font-bold">Pendiente</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

     
      <AgregarPaciente isOpen={showAgregarPacienteModal} onClose={() => setShowAgregarPacienteModal(false)} />
      <AgregarCita isOpen={showAgregarCitaModal} onClose={() => setShowAgregarCitaModal(false)} />
    </div>
  );
}
