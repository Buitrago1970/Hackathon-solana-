import React, { useCallback, useState } from 'react';
import { AppModal } from '../ui/ui-layout';
import {
  useCounterProgram,
  useCounterProgramAccount,
} from '../counter/counter-data-access';
import { PublicKey } from '@solana/web3.js';

export interface Campaigns {
  title: string;
  location: string;
  detail: string;
  id: number;
  goal: number;
  currentCount: number;
  id_user: any;
}

export function CampaignCard(itemCampaign: Campaigns) {
  const { accounts, getProgramAccount } = useCounterProgram();
  let publicKey: PublicKey;
  accounts.data?.map((account) => {
    publicKey = account.publicKey;
  });
  const { increment } = useCounterProgramAccount({ counter: publicKey });
  // const progress: number = (itemCampaign.goal * itemCampaign.currentCount) / 100
  const progress: number =
    (itemCampaign.currentCount / itemCampaign.goal) * 100;
  const [show, setShow] = useState(false);
  const [itemSelected, setItemSelected] = React.useState<Campaigns | null>(
    null
  );

  const handleOkContract = useCallback(
    async (item: Campaigns) => {
      await increment.mutateAsync();
      if (increment.data) {
        console.log(increment.data);
      }
    },
    [increment]
  );

  return (
    <>
      <div
        onClick={() => {
          setShow(true);
          setItemSelected(itemCampaign);
        }}
        className="w-[300px] m-4 min-h-[250px] p-7 shadow-md shadow-gray-400 rounded-xl flex flex-col justify-between cursor-pointer hover:scale-110 transition-all relative"
      >
        <img src="/img/retono.svg" className="absolute" />
        <div>
          <h3 className="text-xl text-gray-600 font-bold">
            {itemCampaign.title}
          </h3>
          <h4 className="text-gray-400 font-semibold">
            {itemCampaign.location}
          </h4>
        </div>
        <div className="text-center text-xs text-gray-500 font-semibold">
          <p>{itemCampaign.detail.slice(0, 125)}...</p>
        </div>
        <div>
          <div className="flex items-end justify-between text-xs">
            <span>0</span>
            <span className="text-green-500 text-lg">
              {itemCampaign.currentCount}
            </span>
            <span>{itemCampaign.goal}</span>
          </div>
          <div className="w-full h-7 border-2 border-gray-100 rounded-full">
            <div
              className={`relative w-full h-full rounded-l-full overflow-hidden`}
            >
              <div
                className={`h-full bg-green-500 rounded-full`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <AppModal
        title={''}
        hide={() => setShow(false)}
        show={show}
        submit={() => itemSelected && handleOkContract(itemSelected)}
        submitLabel={'Continuar'}
        // increment={increment}
      >
        <div className="">
          <img src="/img/Media.jpg" alt="" />
          <h1 className="text-lg font-bold mt-4">{itemSelected?.title}</h1>
          <h2 className="text-md font-semibold mb-6">{itemSelected?.detail}</h2>
          <div className="flex justify-center w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15908.774499225672!2d-74.12343777467142!3d4.559173403974683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1708271593202!5m2!1ses-419!2sco"
              width="400"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </AppModal>
    </>
  );
}
