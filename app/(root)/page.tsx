import Image from 'next/image';

import SiteHeader from '@/components/layout/SiteHeader';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <SiteHeader />
    </main>
  );
}
