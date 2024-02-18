import React from 'react';

export function Landing() {
  return (
    <div className="mt-16 m-8 flex w-full">
      <div className="w-[48%] mt-20">
        <div className="flex font-extrabold">
          <h1 className="text-[130px] text-green-600">ECO</h1>
          <h1 className="text-[130px] text-gray-800">ECHO</h1>
          <h1></h1>
        </div>
        <p className="mb-5">
          ¡Siembra el Futuro! Únete a nuestra revolución verde.
        </p>
        <div className="mb-10 mt-5 w-1/2">
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
      <div className="w-[48%] flex">
        <div className="flex flex-col justify-end ">
          <div className="flex justify-center flex-col items-center mb-3">
            <div className="mb-2">
              <img src="/img/fa_handshake-o.svg" alt="" />
            </div>
            <h1>reducción de CO2</h1>
          </div>
          <div>
            <img src="/img/Rectangle 57.png" alt="alttt" />
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex justify-center flex-col items-center mb-3">
            <div className="mb-2">
              <img src="/img/jam_search.svg" alt="" />
            </div>
            <h1>lucha contra el cambio climatic</h1>
          </div>
          <div>
            <img src="/img/Rectangle 58.png" alt="alttt" />
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex justify-center flex-col items-center mb-3">
            <div className="mb-2">
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
