// src/app/content1/[id]/page.tsx
import { getProjectById } from '@/lib/ProjectData';  // データ取得関数をインポート
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const project = getProjectById(params.id);  // lib/dataから直接データを取得

  if (!project) {
    return <div>プロジェクトが見つかりません</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* プロジェクト詳細ヘッダー */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h1 className="text-3xl font-bold text-white">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* プロジェクト詳細情報 */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">プロジェクト概要</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <dl className="space-y-2">
                      <div className="flex items-center">
                        <dt className="w-32 text-gray-600">価格</dt>
                        <dd className="font-semibold">{project.price.toLocaleString()} 円/t-CO2</dd>
                      </div>
                      <div className="flex items-center">
                        <dt className="w-32 text-gray-600">地域</dt>
                        <dd>{project.area.prefecture} {project.area.city}</dd>
                      </div>
                      <div className="flex items-center">
                        <dt className="w-32 text-gray-600">販売量</dt>
                        <dd>{project.salesVolume}</dd>
                      </div>
                      <div className="flex items-center">
                        <dt className="w-32 text-gray-600">販売者</dt>
                        <dd>{project.seller}</dd>
                      </div>
                      <div className="flex items-center">
                        <dt className="w-32 text-gray-600">実施者</dt>
                        <dd>{project.implementer}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                {/* プロジェクトの詳細説明や追加情報 */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">プロジェクトの特徴</h2>
                  <p className="text-gray-600">
                    このプロジェクトは、地域の森林保全と持続可能な森林経営を目指し、
                    地域コミュニティと協力して進められています。
                    森林の多面的機能を活かしながら、CO2削減に貢献します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}