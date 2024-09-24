import React from 'react';

export default function HistorialMedico() {
  return (
    <div className="bg-[#f0f0f5] min-h-screen p-0">
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0 mb-14" style={{ marginTop: '-2rem' }}>
        <h2 className="text-2xl font-bold text-[#9588d0]">Historial Medico - Liliana Aguilar</h2>
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

        <div className="col-span-1 grid grid-cols-2 gap-4 justify-items-center">
          {[1, 2, 3, 4, 5, 6,7,8].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4"
              style={{ width: '320px', height: '100px' }}  
            >
              <img
                src="/img/citas.png" 
                alt="Icono Cardiograma"
                className="h-12 w-12"
              />
              <div>
                <p className="font-bold text-[#9588d0]">Dr. {index % 2 === 0 ? 'Guevara' : 'Ruiz'}</p>
                <p className="text-sm text-gray-600">23/07/24, 10:30 AM</p>
                <p className={index % 2 === 0 ? 'text-[#f18b8d] font-bold' : 'text-green-500 font-bold'}>
                  {index % 2 === 0 ? 'Pendiente' : 'Realizada'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
