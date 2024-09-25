import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import usePatients from "../hooks/usePacientes";
import { Patient } from "../types";

interface AgregarPacienteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues?: Patient; // Valores iniciales opcionales
}

const AgregarPacienteModal: FC<AgregarPacienteModalProps> = ({
  isOpen,
  onClose,
  initialValues,
}) => {
  const { reloadPatients } = usePatients();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<Patient>({
    defaultValues: initialValues
      ? {
          ...initialValues,
          // Convert birthdate to YYYY-MM-DD format if it's a Date object
          birthdate: new Date(initialValues.birthdate)
            .toISOString()
            .split("T")[0],
        }
      : {
          first_name: "",
          second_name: "",
          first_last_name: "",
          second_last_name: "",
          sex: "",
          birthdate: "",
          email: "",
          cellphone: "",
          blood_type: "",
          address: "",
        },
  });

  // Actualizar los valores predeterminados si los iniciales cambian
  useEffect(() => {
    if (initialValues) {
      reset({
        ...initialValues,
        birthdate: new Date(initialValues.birthdate)
          .toISOString()
          .split("T")[0],
      });
    }
  }, [initialValues, reset]);

  // Función para manejar el envío del formulario
  const onSubmit: SubmitHandler<Patient> = async (data) => {
    const newPatient = {
      ...data,
      birthdate: new Date(data.birthdate), // Convertir fecha a Date
    };

    const url = initialValues
      ? `http://localhost:3000/patients/${initialValues.id_patient}`
      : "http://localhost:3000/patients";

    const method = initialValues ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPatient),
      });

      if (response.ok) {
        console.log(
          initialValues
            ? "Paciente actualizado exitosamente"
            : "Paciente agregado exitosamente"
        );
        reloadPatients();
        onClose(); // Cierra el modal al finalizar
      } else {
        console.error(
          initialValues
            ? "Error al actualizar el paciente"
            : "Error al agregar el paciente"
        );
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
          {initialValues ? "Actualizar Paciente" : "Agregar Paciente"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[#9588d0] font-bold">Nombre</label>
              <input
                {...register("first_name", { required: true })}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">
                Segundo Nombre
              </label>
              <input
                {...register("second_name")}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Apellido</label>
              <input
                {...register("first_last_name", { required: true })}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">
                Segundo Apellido
              </label>
              <input
                {...register("second_last_name")}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Sexo</label>
              <select
                {...register("sex", { required: true })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              >
                <option value="">Seleccionar</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">
                Fecha de Nacimiento
              </label>
              <input
                {...register("birthdate", { required: true })}
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Correo</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Cel</label>
              <input
                {...register("cellphone", { required: true })}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#9588d0] font-bold">
                Dirección
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#9588d0] font-bold">
                Tipo De Sangre
              </label>
              <input
                {...register("blood_type", { required: true })}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-[#9588d0] text-white rounded-lg hover:bg-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Procesando..."
                : initialValues
                ? "Actualizar"
                : "Agregar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarPacienteModal;
