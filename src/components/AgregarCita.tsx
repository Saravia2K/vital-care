import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import usePatients from "../hooks/usePacientes";
import useDoctores from "../hooks/useDoctores";
import useCitas from "../hooks/useCitas";

interface AgregarCitaProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppointmentFormData {
  fecha: string;
  hora: string;
  paciente: string;
  doctor: string;
  estado: string;
}

const AgregarCita: FC<AgregarCitaProps> = ({ isOpen, onClose }) => {
  const { patients } = usePatients();
  const { doctores } = useDoctores();
  const { reloadCitas } = useCitas();

  // Obtener la fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    defaultValues: {
      fecha: "",
      hora: "",
      paciente: "",
      doctor: "",
      estado: "Pendiente",
    },
  });

  // Función para manejar el envío del formulario
  const onSubmit: SubmitHandler<AppointmentFormData> = async (data) => {
    const newAppointment = {
      date: new Date(`${data.fecha}T${data.hora}`),
      id_patient: +data.paciente,
      id_doctor: +data.doctor,
    };

    try {
      const response = await fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointment),
      });

      if (response.ok) {
        console.log("Cita agregada exitosamente");
        reset(); // Resetear el formulario después de guardar
        onClose(); // Cerrar el modal
        reloadCitas();
      } else {
        console.error("Error al agregar la cita");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
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

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[#9588d0] font-bold">Fecha</label>
              <input
                type="date"
                {...register("fecha", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
                min={today} // Establecer el mínimo a la fecha actual
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Hora</label>
              <input
                type="time"
                {...register("hora", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Paciente</label>
              <select
                {...register("paciente", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              >
                <option value="">Seleccionar Paciente</option>
                {patients.map((p, index) => (
                  <option key={index} value={p.id_patient}>
                    {p.first_name} {p.first_last_name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Doctor</label>
              <select
                {...register("doctor", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              >
                <option value="">Seleccionar Doctor</option>
                {doctores.map((d, index) => (
                  <option key={index} value={d.id_doctor}>
                    {d.names} {d.last_names} - {d.specialty.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-[#9588d0] text-white rounded-lg hover:bg-purple-700"
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarCita;
