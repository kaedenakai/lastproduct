// src/app/sponsors/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SponsorCard from '@/components/card/SponsorCard';
import { getAllSponsors } from '@/lib/SponsorData';

export default function SponsorsPage() {
  const sponsors = getAllSponsors();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900">協賛企業一覧</h1>
            <p className="mt-2 text-gray-600">
              私たちの活動を支援してくださる企業パートナー
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <SponsorCard key={sponsor.id} content={sponsor} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}