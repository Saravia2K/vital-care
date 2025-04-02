import jsPDF from "jspdf";
import useCita from "../hooks/useCita";
import { useParams } from "react-router-dom";
import { addDays, addHours, format } from "date-fns";
import { useCallback } from "react";

export default function HistorialMedicoCita() {
  const { id } = useParams<{ id: string }>();
  const { cita } = useCita(+id!);

  const generarPDF = useCallback(() => {
    if (!cita) return;

    const doc = new jsPDF();
    const { patient } = cita;
    const patientFullname = [
      patient.first_name,
      patient.second_name,
      patient.first_last_name,
      patient.second_last_name,
    ].join(" ");

    doc.setFontSize(22);
    doc.setTextColor("#9588d0");
    doc.text(
      `Historial Medico - Cita ${format(new Date(cita.date), "dd/MM/yyyy")}`,
      15,
      20
    );

    doc.setDrawColor(150, 150, 150);
    doc.line(10, 25, 200, 25);

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("Información del Paciente:", 15, 35);

    doc.setFontSize(12);
    doc.setFont("bold");
    doc.text("Nombre:", 15, 45);
    doc.setFont("normal");
    doc.text(patientFullname, 45, 45);

    doc.setFont("bold");
    doc.text("Sexo:", 15, 55);
    doc.setFont("normal");
    doc.text(cita.patient.sex == "F" ? "Femenino" : "Masculino", 45, 55);

    doc.setFont("bold");
    doc.text("Nacimiento:", 15, 65);
    doc.setFont("normal");
    doc.text(format(addHours(new Date(cita.date), 6), "dd/MM/yyyy"), 45, 65);

    doc.setFont("bold");
    doc.text("Correo:", 15, 75);
    doc.setFont("normal");
    doc.text(cita.patient.email, 45, 75);

    doc.setFont("bold");
    doc.text("Cel:", 15, 85);
    doc.setFont("normal");
    doc.text(cita.patient.cellphone, 45, 85);

    doc.setFont("bold");
    doc.text("Tipo de Sangre:", 15, 95);
    doc.setFont("normal");
    doc.text(cita.patient.blood_type, 45, 95);

    doc.setDrawColor(150, 150, 150);
    doc.line(10, 105, 200, 105);

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont("bold");
    doc.text("Médico a cargo:", 15, 115);
    doc.setFont("normal");
    doc.setTextColor(241, 139, 141);
    doc.text(
      `${cita.reference?.doctor.names} ${cita.reference?.doctor.last_names}`,
      60,
      115
    );

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont("bold");
    doc.text("Diagnóstico:", 15, 130);
    doc.setFont("normal");
    doc.text(cita.diagnosis || "", 45, 130);

    doc.setFont("bold");
    doc.text("Tratamiento:", 15, 140);
    doc.setFont("normal");
    doc.text(cita.treatment || "", 45, 140);

    doc.setFont("bold");
    doc.text("Observaciones:", 15, 150);
    doc.setFont("normal");
    doc.text(cita.observations || "", 15, 160);

    doc.setDrawColor(150, 150, 150);
    doc.line(10, 180, 200, 180);

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont("bold");
    doc.text("Referencia:", 15, 190);

    doc.setFont("normal");
    doc.setFontSize(12);
    doc.text(
      `${cita.reference?.doctor.names} ${cita.reference?.doctor.last_names} - ${cita.reference?.doctor.specialty.name}`,
      45,
      190
    );

    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(
      "Documento generado automáticamente - Vital Care Medical Clinic",
      10,
      280
    );

    doc.save(`HistorialMedico_Cita_${new Date(cita.date).getTime()}.pdf`);
  }, [cita]);

  if (!cita) return;

  console.log({ cita });

  const { patient } = cita;
  const patientFullname = [
    patient.first_name,
    patient.second_name,
    patient.first_last_name,
    patient.second_last_name,
  ].join(" ");
  return (
    <div className="bg-[#f0f0f5] min-h-screen p-0">
      <div
        className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0"
        style={{ marginTop: "-2rem" }}
      >
        <h2 className="text-2xl font-bold text-[#9588d0]">
          Historial Medico - Cita {format(new Date(cita.date), "dd/MM/yyyy")}
        </h2>
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
              <strong className="text-[#9588d0]">Nombre:</strong>{" "}
              <span className="text-gray-600">{patientFullname}</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Sexo:</strong>{" "}
              <span className="text-gray-600">
                {patient.sex == "F" ? "Femenino" : "Masculino"}
              </span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Nacimiento:</strong>{" "}
              <span className="text-gray-600">
                {format(addDays(new Date(patient.birthdate), 1), "dd/MM/yyyy")}
              </span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Correo:</strong>{" "}
              <span className="text-gray-600">{patient.email}</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Cel:</strong>{" "}
              <span className="text-gray-600">{patient.cellphone}</span>
            </div>
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
              <strong className="text-[#9588d0]">Tipo de Sangre:</strong>{" "}
              <span className="text-gray-600">{patient.blood_type}</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
            <strong className="text-[#9588d0]">Diagnóstico</strong>
            <p className="text-gray-600 mt-2">{cita.diagnosis}</p>
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
            <strong className="text-[#9588d0]">Tratamiento</strong>
            <p className="text-gray-600 mt-2">{cita.treatment}</p>
          </div>

          <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
            <strong className="text-[#9588d0]">Observaciones</strong>
            <p className="text-gray-600 mt-2">{cita.observations}</p>
          </div>

          {cita.reference && (
            <div className="bg-white p-4 rounded-3xl shadow-md text-lg flex items-center space-x-4">
              <img src="/img/Doc.png" alt="Dr. Guevara" className="h-24 w-24" />
              <div>
                <strong className="text-[#9588d0]">Referencia</strong>
                <p className="text-gray-600">
                  {cita.reference.doctor.names}{" "}
                  {cita.reference.doctor.last_names}
                </p>
                <p className="text-gray-600 text-sm">
                  {cita.reference.doctor.specialty.name}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {cita.reference && (
        <div className="fixed bottom-4 right-4">
          <img
            src="/img/pdf.svg"
            alt="Descargar PDF"
            className="w-12 h-12 cursor-pointer"
            onClick={generarPDF}
          />
        </div>
      )}
    </div>
  );
}
