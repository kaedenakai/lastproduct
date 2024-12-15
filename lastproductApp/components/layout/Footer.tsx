// src/components/layout/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Forest Products</h3>
              <p className="text-gray-300">
                持続可能な森林経営と地域活性化を目指して
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <p className="text-gray-300">
                〒000-0000<br />
                東京都千代田区XXX<br />
                TEL: 03-XXXX-XXXX
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white">プライバシーポリシー</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; 2024 Forest Products. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;