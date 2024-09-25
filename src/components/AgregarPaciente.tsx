import { FC, useState } from "react";

interface AgregarPacienteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgregarPacienteModal: FC<AgregarPacienteModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [nombre, setNombre] = useState<string>("");
  const [segundoNombre, setSegundoNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [segundoApellido, setSegundoApellido] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [fechaNacimiento, setFechaNacimiento] = useState<string>("");
  const [correo, setCorreo] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [tipoSangre, setTipoSangre] = useState<string>("");
  const [direccion, setDireccion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newPatient = {
      first_name: nombre,
      second_name: segundoNombre,
      first_last_name: apellido,
      second_last_name: segundoApellido,
      sex: sexo,
      birthdate: new Date(fechaNacimiento),
      email: correo,
      cellphone: celular,
      blood_type: tipoSangre,
      address: direccion,
    };

    try {
      const response = await fetch("http://localhost:3000/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPatient),
      });

      if (response.ok) {
        console.log("Paciente agregado exitosamente");
        onClose(); // Cierra el modal al finalizar
      } else {
        console.error("Error al agregar el paciente");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Agregar Paciente
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[#9588d0] font-bold">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">
                Segundo Nombre
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={segundoNombre}
                onChange={(e) => setSegundoNombre(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Apellido</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">
                Segundo Apellido
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={segundoApellido}
                onChange={(e) => setSegundoApellido(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Sexo</label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
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
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-[#9588d0] font-bold">Correo</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-[#9588d0] font-bold">Cel</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#9588d0] font-bold">
                Dirección
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-[#9588d0] font-bold">
                Tipo De Sangre
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                value={tipoSangre}
                onChange={(e) => setTipoSangre(e.target.value)}
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
              {isSubmitting ? "Agregando..." : "Agregar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarPacienteModal;
