// src/components/layout/Header.tsx
'use client';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Forest Products</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">ホーム</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">私たちについて</a>
            <a href="/projects" className="text-gray-700 hover:text-gray-900">プロジェクト</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">お問い合わせ</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;