'use client';

import { Landing } from '../landing/landing';
import { CampaignCard } from '../campaign-card/campaign-card';
import { onSnapshot, collection } from 'firebase/firestore';
import db, { auth } from '../../firebase.js';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [campaigns, setCampaigns] = useState<any[]>([]);

  useEffect(() => {
    onSnapshot(collection(db, 'campaigns'), (snapshot) => {
      setCampaigns(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="h-screen">
      <div className="flex flex-row flex-wrap justify-around mt-2">
        {campaigns.map((campaign: any) => {
          return (
            <CampaignCard
              key={campaign.id}
              title={campaign.title}
              location={campaign.location}
              detail={campaign.detail}
              id={0}
              goal={campaign.goal}
              currentCount={campaign.current_count}
              id_user={campaign.id_user}
            />
          );
        })}
      </div>
    </div>
  );
}
