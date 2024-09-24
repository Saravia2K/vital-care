import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 

export default function LayoutEspecialista() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      
      <div className="bg-[#9588d0] p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <img src="/img/logo.png" alt="Logo" className="h-28 w-28 mr-2" />
          <h1 className="text-xl font-bold">Dr. Especialista</h1>
        </div>
        <nav className="space-x-6 text-xl">
          <Link to="/Especialista/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/Especialista/Medicina" className="hover:underline">Medicina</Link>
        </nav>
      </div>
      
      
      <div className="p-8">
        <Outlet /> 
      </div>
    </div>
  );
}
