// src/app/projects/page.tsx
import CardList from '@/components/card/CardList';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAllProjects } from '@/lib/ProjectData';

export default function ProjectsPage() {
  const projectData = getAllProjects();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900">
              すべてのプロジェクト
            </h1>
            <p className="mt-2 text-gray-600">
              現在進行中のすべての森林保全プロジェクトをご覧いただけます
            </p>
          </div>

          <CardList contents={projectData} />
        </div>
      </main>
      <Footer />
    </div>
  );
}