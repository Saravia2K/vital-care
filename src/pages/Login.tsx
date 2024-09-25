import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.type === "nurse") {
          navigate("/Secretaria/dashboard");
        } else if (data.type === "general") {
          navigate("/General/dashboard");
        } else if (data.type === "doctor") {
          sessionStorage.setItem("doctorId", data.doctorId);
          navigate("/Especialista/dashboard");
        }
      } else {
        console.error("Error en el inicio de sesión");
        // Aquí puedes agregar una alerta o mensaje de error
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = () => {
    navigate("/RegistroUsuario");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9588d0] p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <img
            src="img/logo.png"
            alt="Vital Care Logo"
            className="w-36 h-36 mb-4"
          />
          <h1 className="text-2xl font-bold text-[#9588d0] mb-2">BIENVENIDO</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full bg-[#9588d0] text-white py-2 rounded-full font-bold hover:bg-purple-800 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Iniciando..." : "Iniciar Sesión"}
            </button>
            <button
              type="button"
              onClick={handleRegister}
              className="w-full mt-4 bg-white border border-[#9588d0] text-[#9588d0] py-2 rounded-full font-bold hover:bg-purple-100 transition"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
