import { useNavigate, useParams } from "react-router-dom";
import useCita from "../hooks/useCita";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { addHours, format } from "date-fns";

export default function CitaEspecialista() {
  const { id } = useParams<{ id: string }>();
  const { cita } = useCita(+id!);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    defaultValues: {
      diagnosis: "",
      observations: "",
      reference: undefined,
      treatment: "",
    },
  });

  useEffect(() => {
    if (!cita) return;

    console.log({ cita });
    reset({
      diagnosis: cita.diagnosis || "",
      observations: cita.observations || "",
      reference: cita.reference?.doctor
        ? {
            id_doctor: cita.reference.doctor.id_doctor,
            comments: cita.reference.comments,
          }
        : undefined,
      treatment: cita.treatment || "",
    });
  }, [cita, reset]);

  // Función para manejar el envío del formulario
  const onSubmit: SubmitHandler<AppointmentFormData> = async (data) => {
    try {
      const reference = data.reference
        ? {
            id_from_doctor: undefined, // Añadimos el id del doctor que está creando la referencia
            id_doctor: Number(data.reference.id_doctor),
            comments: data.reference.comments,
          }
        : undefined;

      const response = await fetch(`http://localhost:3000/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          reference,
          finished: true,
        }),
      });

      if (response.ok) {
        console.log("Cita actualizada correctamente");
        navigate("/Especialista/dashboard");
      } else {
        console.error("Error al actualizar la cita");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  if (!cita) return null;

  const { patient } = cita;
  return (
    <div className="bg-[#f0f0f5] min-h-screen p-0">
      <div
        className="bg-white p-6 rounded-lg shadow-lg mb-6 mt-0"
        style={{ marginTop: "-2rem" }}
      >
        <h2 className="text-2xl font-bold text-[#9588d0]">
          Referencia - {patient.first_name} {patient.first_last_name}
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
              <span className="text-gray-600">
                {patient.first_name} {patient.second_name}{" "}
                {patient.first_last_name} {patient.second_last_name}
              </span>
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
                {format(addHours(new Date(patient.birthdate), 6), "dd/MM/yyyy")}
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

        <div className="col-span-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-3xl shadow-lg space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Diagnóstico</strong>
                <textarea
                  {...register("diagnosis")}
                  placeholder="Escribe el diagnóstico aquí"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0] resize-none"
                  rows={4}
                />
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Tratamiento</strong>
                <textarea
                  {...register("treatment")}
                  placeholder="Escriba el tratamiento aquí"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0] resize-none"
                  rows={4}
                />
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">Observaciones</strong>
                <textarea
                  {...register("observations")}
                  placeholder="Escriba las observaciones aquí"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0] resize-none"
                  rows={4}
                />
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-md text-lg">
                <strong className="text-[#9588d0]">
                  Notas del médico general
                </strong>
                <textarea
                  placeholder="Escriba las observaciones aquí"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0] resize-none"
                  rows={4}
                  disabled
                  value={cita.reference?.comments}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-[#9588d0] text-white rounded-lg hover:bg-purple-700 mt-4"
              >
                {isSubmitting ? "Guardando..." : "Terminar Consulta"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

interface AppointmentFormData {
  diagnosis?: string;
  treatment?: string;
  observations?: string;
  reference?: {
    id_doctor: number;
    comments: string;
  };
}
