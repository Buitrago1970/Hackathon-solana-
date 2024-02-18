import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold mb-2">Hola</h1>
        <p className="text-lg mb-8">Vamos a fortalecer el campo</p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Eulises Montoya"
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
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot Password?
              </a>
            </div>
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
      </div>
    </div>
  );
}
