'use client';

import React from 'react';

export default function Formulario() {
  return (
    <div className="bg-green-50 p-10">
      <div className="font-bold text-5xl mb-10 text-green-800">
        <h1>PLANTA EL CAMBIO</h1>
      </div>
      <div className="flex justify-between items-start gap-10">
        <div className="space-y-4 w-1/2">
          <input
            placeholder="Nombre de tu árbol"
            type="text"
            className="w-full bg-white rounded-xl h-12 px-6 shadow-sm border border-green-300 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          />
          <input
            placeholder="Hash de tu árbol"
            type="text"
            className="w-full bg-white rounded-xl h-12 px-6 shadow-sm border border-green-300 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
          />
          <textarea
            placeholder="Escribe tu mensaje personalizado"
            className="w-full bg-white rounded-xl h-24 px-6 py-3 shadow-sm border border-green-300 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
          />
          <button className="w-full bg-green-600 text-white rounded-xl h-12 px-6 shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
            PLANTAR
          </button>
        </div>
        <div className="w-1/2 bg-white p-6 shadow-xl rounded-2xl flex items-center justify-between">
          <div>
            <p className="font-semibold text-lg">AGROBOT</p>
            <p className="text-gray-600">📞 +7 (999) 999-99-99</p>
            <p className="text-gray-600">
              📍 2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
          <div className="w-48 h-48">
            <img
              src="/img/plaque.jpg"
              alt="Placa"
              className="shadow-lg rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
