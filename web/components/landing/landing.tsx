import React from 'react';

export function Landing() {
  return (
    <div className="m-8 flex w-full">
      <div className="w-1/2 mt-32">
        <div className="flex font-semibold">
          <h1 className="text-9xl text-green-600">Eco</h1>
          <h1 className="text-9xl text-gray-800">Echo</h1>
          <h1></h1>
        </div>
        <p className="mb-5">
          ¡Siembra el Futuro! Únete a nuestra revolución verde.
        </p>
        <div className="my-10">
          <p>
            Transforma tu pasión por la naturaleza en acción con ReforestApp.
            Planta árboles, forja un futuro más verde y únete a una comunidad
            comprometida con el planeta.
          </p>
        </div>
        <div>
          <button className="text-white bg-green-500 h-11 w-52 rounded-full shadow-md shadow-green-600">
            Dona Tu arbol
          </button>
        </div>
      </div>
      <div className="w-1/2 flex">
        <div className="flex flex-col justify-end">
          <div className="flex justify-center flex-col items-center">
            <div>
              <img src="/img/fa_handshake-o.svg" alt="" />
            </div>
            <h1>Únete a la Misión Verde</h1>
          </div>
          <div>
            <img src="/img/Rectangle 57.png" alt="alttt" />
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex justify-center flex-col items-center">
            <div>
              <img src="/img/jam_search.svg" alt="" />
            </div>
            <h1>Únete a la Misión Verde</h1>
          </div>
          <div>
            <img src="/img/Rectangle 58.png" alt="alttt" />
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex justify-center flex-col items-center">
            <div>
              <img src="/img/Subtract.svg" alt="" />
            </div>
            <h1>Únete a la Misión Verde</h1>
          </div>
          <div>
            <img src="/img/Rectangle 59.png" alt="alttt" />
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
