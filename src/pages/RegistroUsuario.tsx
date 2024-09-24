import React, { useState } from "react";

const RegistroUsuario = () => {
 
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
        <form>
       
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">
              Tipo de Usuario
            </label>
            <select
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
            >
              <option value="">Seleccionar</option>
              <option value="admin">Secretaria</option>
              <option value="doctor">Doctor General</option>
              <option value="paciente">Especialista</option>
            </select>
          </div>

         
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
            />
          </div>

        
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700">Password</label>
            <div className="relative">
              <input
              
                placeholder="Password"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9588d0]"
              />
             
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="w-full bg-[#9588d0] text-white py-2 rounded-full font-bold hover:bg-purple-800 transition"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuario;
