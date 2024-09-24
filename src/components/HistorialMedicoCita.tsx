import React from 'react';
import jsPDF from 'jspdf';

export default function HistorialMedicoCita() {

  const generarPDF = () => {
    const doc = new jsPDF();

   
    doc.setFontSize(22);
    doc.setTextColor('#9588d0');
    doc.text('Historial Medico - Cita 23/07/2024', 15, 20);

    
    doc.setDrawColor(150, 150, 150); 
    doc.line(10, 25, 200, 25); 

    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Información del Paciente:', 15, 35);

    doc.setFontSize(12);
    doc.setFont('bold');
    doc.text('Nombre:', 15, 45);
    doc.setFont('normal');
    doc.text('Andrea Liliana Aguilar Cruz', 45, 45);

    doc.setFont('bold');
    doc.text('Sexo:', 15, 55);
    doc.setFont('normal');
    doc.text('Femenino', 45, 55);

    doc.setFont('bold');
    doc.text('Nacimiento:', 15, 65);
    doc.setFont('normal');
    doc.text('04/04/2002', 45, 65);

    doc.setFont('bold');
    doc.text('Correo:', 15, 75);
    doc.setFont('normal');
    doc.text('lilianaaguilar@gmail.com', 45, 75);

    doc.setFont('bold');
    doc.text('Cel:', 15, 85);
    doc.setFont('normal');
    doc.text('70889636', 45, 85);

    doc.setFont('bold');
    doc.text('Tipo de Sangre:', 15, 95);
    doc.setFont('normal');
    doc.text('ROH Negativo', 45, 95);

    
    doc.setDrawColor(150, 150, 150);  
    doc.line(10, 105, 200, 105); 

   
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont('bold');
    doc.text('Médico a cargo:', 15, 115);
    doc.setFont('normal');
    doc.setTextColor(241, 139, 141);
    doc.text('Dr. Ruiz', 60, 115);

    doc.setTextColor(0, 0, 0);  
    doc.setFontSize(12);
    doc.setFont('bold');
    doc.text('Diagnóstico:', 15, 130);
    doc.setFont('normal');
    doc.text('Hipertensión Moderada', 45, 130);

    doc.setFont('bold');
    doc.text('Tratamiento:', 15, 140);
    doc.setFont('normal');
    doc.text('20 Lorsantán de 50mg', 45, 140);

    doc.setFont('bold');
    doc.text('Observaciones:', 15, 150);
    doc.setFont('normal');
    doc.text('Se le Recetó al paciente Lorsantán de 50mg por un mes,', 15, 160);
    doc.text('tomar una cápsula al día después de almuerzo.', 15, 170);

    
    doc.setDrawColor(150, 150, 150);  
    doc.line(10, 180, 200, 180); 

    
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont('bold');
    doc.text('Referencia:', 15, 190);

    doc.setFont('normal');
    doc.setFontSize(12);
    doc.text('Dr. Guevara - Especialista del Corazón', 45, 190);

  
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Documento generado automáticamente - Vital Care Medical Clinic', 10, 280);

    
    doc.save('HistorialMedico_Cita_23072024.pdf');
  };

  return (
    <div className="bg-[#f0f0f5] min-h-screen p-0">
      
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0" style={{ marginTop: '-2rem' }}>
        <h2 className="text-2xl font-bold text-[#9588d0]">Historial Medico - Cita 23/07/2024</h2>
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

        
        <div className="col-span-1 grid grid-cols-1 gap-4">
          
         
          <div className="bg-[#f18b8d] p-4 rounded-3xl shadow-lg text-lg text-white">
            <strong>Médico a cargo:</strong> <span>Dr. Ruiz</span>
          </div>

          
          <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
            <strong className="text-[#9588d0]">Diagnóstico</strong>
            <p className="text-gray-600 mt-2">Hipertensión Moderada</p>
          </div>

          
          <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
            <strong className="text-[#9588d0]">Tratamiento</strong>
            <p className="text-gray-600 mt-2">20 Lorsantán de 50mg</p>
          </div>

          
          <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
            <strong className="text-[#9588d0]">Observaciones</strong>
            <p className="text-gray-600 mt-2">
              Se le Recetó al paciente Lorsantán de 50mg por un mes, tomar una cápsula al día después de almuerzo.
            </p>
          </div>

          
          <div className="bg-white p-4 rounded-3xl shadow-md text-lg flex items-center space-x-4">
            <img
              src="/img/Doc.png"
              alt="Dr. Guevara"
              className="h-24 w-24"
            />
            <div>
              <strong className="text-[#9588d0]">Referencia</strong>
              <p className="text-gray-600">Dr. Guevara</p>
              <p className="text-gray-600 text-sm">Especialista del Corazón</p>
            </div>
          </div>

        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <img
          src="/img/pdf.svg"
          alt="Descargar PDF"
          className="w-12 h-12 cursor-pointer"
          onClick={generarPDF}  
        />
      </div>
    </div>
  );
}
