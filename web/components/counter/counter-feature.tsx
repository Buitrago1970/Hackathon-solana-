'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletButton } from '../solana/solana-provider';

import { CounterList } from './counter-ui';

export default function CounterFeature() {
  const { publicKey } = useWallet();

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <div className="w-full">
            <h1 className="text-5xl font-bold">PLANTA EL CAMBIO</h1>
            <p className="py-6">1250 Agricultures disponibles</p>
            <div className="form-control mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder=""
                  className="w-full pr-16 input input-lg input-bordered"
                />
                <button className=" absolute top-0 right-0 rounded-l-none btn btn-lg bg-slate-300">
                  search
                </button>
              </div>
            </div>
            {publicKey ? (
              <CounterList />
            ) : (
              <div className="py-10">
                <WalletButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
