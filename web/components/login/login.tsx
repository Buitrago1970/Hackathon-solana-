'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const singIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold mb-2">Hola</h1>
        <p className="text-lg mb-8">Vamos a fortalecer el campo</p>
        <form onSubmit={singIn}>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="name"
                  className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Eulises Montoya"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <i className="fas fa-check-circle text-green-500"></i>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Contraseña</label>
              <input
                type="password"
                name="password"
                className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                INICIA SESIÓN
              </button>
            </div>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                ¿No tienes cuenta? Regístrate
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
