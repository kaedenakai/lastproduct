// src/components/card/CardList.tsx
'use client';

import { ProjectContent } from '@/lib/definitions';
import ContentCard from './ContentCard';
import { useRouter } from 'next/navigation';

interface CardListProps {
  contents: ProjectContent[];
}

const CardList = ({ contents }: CardListProps) => {
  const router = useRouter();

  const handleCardClick = (id: string) => {
    router.push(`/content1/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contents.map((content) => (
        <ContentCard
          key={content.id}
          content={content}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default CardList;