// components/card/ContentCard.tsx
'use client';

import Image from 'next/image';
import type { ProjectContent } from '../../lib/definitions';

interface ContentCardProps {
  content: ProjectContent;
  onClick: (id: string) => void;
}

const ContentCard = ({ content, onClick }: ContentCardProps) => {
  return (
    <div 
      className="relative rounded-lg overflow-hidden border border-teal-500 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(content.id)}
    >
      {/* 画像セクション */}
      <div className="relative h-48 w-full">
        <Image
          src={content.image}
          alt={content.title}
          fill
          className="object-cover"
        />
        {/* 価格表示 */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded">
          {content.price.toLocaleString()} 円/t-CO2
        </div>
      </div>

      {/* コンテンツ情報 */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4">{content.title}</h3>
        
        {/* 情報テーブル */}
        <div className="space-y-2 text-sm">
          <div className="flex">
            <span className="w-20 text-gray-600">地域</span>
            <span>{content.area.prefecture} {content.area.city}</span>
          </div>
          <div className="flex">
            <span className="w-20 text-gray-600">販売量</span>
            <span>{content.salesVolume}</span>
          </div>
          <div className="flex">
            <span className="w-20 text-gray-600">販売者</span>
            <span>{content.seller}</span>
          </div>
          <div className="flex">
            <span className="w-20 text-gray-600">実施者</span>
            <span>{content.implementer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;