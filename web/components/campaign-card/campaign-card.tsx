import React from 'react';

export interface Campaigns {
    title: string,
    location: string,
    detail: string,
    id: number,
    goal: number,
    currentCount: number,
}



export function CampaignCard(itemCampaign: Campaigns) {

    // const progress: number = (itemCampaign.goal * itemCampaign.currentCount) / 100
    const progress: number = ((itemCampaign.goal * itemCampaign.currentCount) / 100)
    return (
        <div className="w-[300px] m-4 min-h-[250px] p-7 shadow-md shadow-gray-400 rounded-xl flex flex-col justify-between cursor-pointer hover:scale-110 transition-all relative">
            <img src="/img/retono.svg" className='absolute'/>
            <div>
                <h3 className='text-xl text-gray-600 font-bold'>{itemCampaign.title}</h3>
                <h4 className='text-gray-400 font-semibold'>{itemCampaign.location}</h4>
            </div>
            <div className='text-center text-xs text-gray-500 font-semibold'>
                <p>{itemCampaign.detail.slice(0,125)}...</p>
            </div>
            <div>
                <div className='flex items-end justify-between text-xs'>
                    <span>0</span>
                    <span className='text-green-500 text-lg'>{itemCampaign.currentCount}</span>
                    <span>{itemCampaign.goal}</span>
                </div>
                <div className='w-full h-7 border-2 border-gray-100 rounded-full'>
                    <div className={`relative w-full h-full rounded-l-full overflow-hidden`}>
                        <div className={`h-full bg-green-500 rounded-full`} style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
