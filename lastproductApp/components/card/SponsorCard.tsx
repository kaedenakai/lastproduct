// src/components/card/SponsorCard.tsx
'use client'; 
import Image from 'next/image';
import type { SponsorContent } from '@/lib/definitions';

interface SponsorCardProps {
  content: SponsorContent;
  onClick?: (id: string) => void;
}

const SponsorCard = ({ content, onClick }: SponsorCardProps) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      onClick={() => onClick?.(content.id)}
    >
      <div className="relative h-48">
        <Image
          src={content.image}
          alt={content.companyName}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {content.companyName}
        </h3>
        <div className="mb-4">
          <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
            {content.industry}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          {content.description}
        </p>
        <div className="text-sm text-gray-500">
          協賛開始: {content.joinedDate}
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;