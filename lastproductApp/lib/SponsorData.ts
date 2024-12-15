// src/lib/SponsorData.ts
import { SponsorContent } from './definitions';

export const sponsorsData: SponsorContent[] = [
  {
    id: '1',
    image: '/images/logo.jpg',
    companyName: '株式会社グリーンテクノロジー',
    industry: '環境技術',
    description: '最新技術で環境保全に取り組む企業です',
    joinedDate: '2023年4月'
  },
  {
    id: '2',
    image: '/images/logo.jpg',
    companyName: '山田林業株式会社',
    industry: '林業',
    description: '持続可能な森林経営を実践する林業のプロフェッショナル',
    joinedDate: '2023年6月'
  },
  {
    id: '3',
    image: '/images/logo.jpg',
    companyName: 'エコフューチャー株式会社',
    industry: '再生可能エネルギー',
    description: '次世代の環境エネルギーを追求します',
    joinedDate: '2023年9月'
  },
  {
    id: '4',
    image: '/images/company4.jpg',
    companyName: '自然共生株式会社',
    industry: '環境コンサルティング',
    description: '環境と経済の調和をサポートします',
    joinedDate: '2024年1月'
  }
];

export function getAllSponsors(): SponsorContent[] {
  return sponsorsData;
}

export function getSponsorById(id: string): SponsorContent | undefined {
  return sponsorsData.find(sponsor => sponsor.id === id);
}