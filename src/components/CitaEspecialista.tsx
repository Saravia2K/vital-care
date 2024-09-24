import React from 'react';

export default function CitaEspecialista() {
  return (
    <div className="bg-[#f0f0f5] min-h-screen p-0">
      
   
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0" style={{ marginTop: '-2rem' }}>
        <h2 className="text-2xl font-bold text-[#9588d0]">Referencia - Liliana Aguilar</h2>
      </div>

   
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="space-y-4 col-span-1 flex justify-center">
          <div className="space-y-4 max-w-xl w-full">
            <div className="flex justify-center mb-4">
              <img
                src="/img/especialista.png" 
                alt="Icono Referencia"
                className="w-64 h-44"
              />
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Nombre:</strong> <span className="text-gray-600">Andrea Liliana Aguilar Cruz</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Tipo de Sangre:</strong> <span className="text-gray-600">ROH Negativo</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Motivo de Referencia:</strong> <span className="text-gray-600">Control Cardiaco</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Dr. que Refirió:</strong> <span className="text-gray-600">Dr. Ruiz</span>
            </div>
          </div>
        </div>

       
        <div className="col-span-1">
          <div className="bg-white p-6 rounded-3xl shadow-lg space-y-4">
            <div className="grid grid-cols-2 gap-4">
              
          
              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Diagnóstico</strong>
                <p className="text-gray-600 mt-2">Hipertensión Moderada</p>
              </div>

          
              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Tratamiento</strong>
                <div className="space-y-2 mt-2">
                  <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]">
                    <option value="">Seleccionar Medicina</option>
                    <option value="1">Lorsantán 50mg</option>
                    <option value="2">Ibuprofeno 200mg</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Ingresar Cantidad"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                  />
                </div>
              </div>

            
              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Observaciones</strong>
                <p className="text-gray-600 mt-2">
                  Se le Recetó al paciente Lorsantán de 50mg por un mes, toma una cápsula al día después de almuerzo.
                </p>
              </div>
            </div>

         
            <div className="flex justify-center">
              <button className="px-6 py-2 bg-[#9588d0] text-white rounded-lg hover:bg-purple-700">
                Terminar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
