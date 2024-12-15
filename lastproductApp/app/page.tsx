// src/app/page.tsx
import Link from 'next/link';

import CardList from '@/components/card/CardList';
import SponsorCard from '@/components/card/SponsorCard';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { ProjectContent, SponsorContent } from '@/lib/definitions';
import { getAllProjects } from '@/lib/ProjectData';
import { getAllSponsors } from '@/lib/SponsorData';

export default function Page() {
  const projectData = getAllProjects();
  const sponsorData = getAllSponsors();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* メインビュー */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-[url('/images/sango1.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">
              森を守り、<br />未来を育てる。
            </h2>
            <p className="text-xl mb-8">
              持続可能な森林経営を通じて、<br />
              地域と環境の調和ある発展を目指します。
            </p>
            <Link href="/content1">
              <button className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-600 transition-colors">
                プロジェクトを見る
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* プロジェクトエリア */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              新規・更新プロジェクト
            </h2>
            <Link href="/projects">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                すべてのプロジェクトを表示
              </button>
            </Link>
          </div>

          <CardList contents={projectData.slice(0, 3)} />
        </div>
      </section>

      {/* スポンサーエリア - 新規追加 */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                協賛企業
              </h2>
              <p className="mt-2 text-gray-600">
                森林保全活動を支援してくださる企業パートナー
              </p>
            </div>
            <Link href="/sponsors">
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                すべての協賛企業を見る
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorData.slice(0, 3).map((sponsor) => (
              <SponsorCard key={sponsor.id} content={sponsor} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}