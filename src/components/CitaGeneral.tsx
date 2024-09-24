import React from 'react';

export default function CitaGeneral() {
  return (
    <div className="bg-[#f0f0f5] min-h-screen p-0">
      
     
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0" style={{ marginTop: '-2rem' }}>
        <h2 className="text-2xl font-bold text-[#9588d0]">Cita - Liliana Aguilar</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
       
        <div className="space-y-4 col-span-1 flex justify-center">
          <div className="space-y-4 max-w-xl w-full">
            <div className="flex justify-center mb-4">
              <img
                src="/img/Medico.png" 
                alt="Icono Médico"
                className="w-28 h-28"
              />
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Nombre:</strong> <span className="text-gray-600">Andrea Liliana Aguilar Cruz</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Sexo:</strong> <span className="text-gray-600">Femenino</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Nacimiento:</strong> <span className="text-gray-600">04/04/2002</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Correo:</strong> <span className="text-gray-600">lilianaaguilar@gmail.com</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Cel:</strong> <span className="text-gray-600">70889636</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Tipo de Sangre:</strong> <span className="text-gray-600">ROH Negativo</span>
            </div>
          </div>
        </div>

      
        <div className="col-span-1">
          <div className="bg-white p-6 rounded-3xl shadow-lg space-y-4">
            <div className="grid grid-cols-2 gap-4">
             
              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Diagnóstico</strong>
                <input
                  type="text"
                  placeholder="Escribe el diagnóstico aquí"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                />
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
                <textarea
                  placeholder="Escriba las observaciones aquí"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                  rows={4}
                />
              </div>

          
              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Agregar Referencia</strong>
                <div className="space-y-2 mt-2">
                  <input
                    type="text"
                    placeholder="Ingresar Motivo"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                  />
                  <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]">
                    <option value="">Seleccionar Especialista</option>
                    <option value="1">Cardiología</option>
                    <option value="2">Neurología</option>
                  </select>
                </div>
              </div>
            </div>

           
            <div className="flex justify-center">
              <button className="px-4 py-2 bg-[#9588d0] text-white rounded-lg hover:bg-purple-700 mt-4">
                Terminar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
