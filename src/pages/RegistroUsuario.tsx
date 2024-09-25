import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useSpecialities from "../hooks/useSpecialities";

const RegistroUsuario = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const specialities = useSpecialities();
  const navigate = useNavigate();

  console.log(specialities);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      names: formData.get("names") as string,
      last_names: formData.get("last_names") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      id_specialty: Number(formData.get("id_speciality") as string),
    };

    try {
      const response = await fetch("http://localhost:3000/auth/doctors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate("/"); // Redirigir a la página principal después del éxito
      } else {
        console.error("Error en la creación del doctor");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9588d0] p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/img/logo.png"
            alt="Vital Care Logo"
            className="w-36 h-36 mb-4"
          />
          <h1 className="text-2xl font-bold text-[#9588d0] mb-2">BIENVENIDO</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">
              Tipo de Usuario
            </label>
            <select
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              name="id_speciality"
              required
            >
              <option value="">Seleccionar</option>
              {specialities.map((s) => (
                <option key={s.id_speciality} value={s.id_speciality}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">
              Nombres
            </label>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              name="names"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">
              Apellidos
            </label>
            <input
              type="text"
              placeholder="Apellidos"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              name="last_names"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              name="email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                name="password"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full bg-[#9588d0] text-white py-2 rounded-full font-bold hover:bg-purple-800 transition"
              disabled={isSubmitting} // Deshabilitar el botón mientras se envía la petición
            >
              {isSubmitting ? "Registrando..." : "Registrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
