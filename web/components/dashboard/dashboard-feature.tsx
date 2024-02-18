'use client';

import { AppHero } from '../ui/ui-layout';
import { Landing } from '../landing/landing';

export default function DashboardFeature() {
  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to your new Solana dApp." />
      <Landing></Landing>
    </div>
  );
}
