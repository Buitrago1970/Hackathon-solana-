'use client';

import { Landing } from '../landing/landing';
import { CampaignCard } from '../campaign-card/campaign-card';

export default function DashboardFeature() {
  return (
    <div>
      <Landing></Landing>
      <CampaignCard title={'test'} location={'test'} detail={'text test text testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext testtext test'} id={0} goal={0} currentCount={0}/>
    </div>
  );
}
