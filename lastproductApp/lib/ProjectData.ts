// src/lib/ProjectData.ts
import { ProjectContent } from './definitions';

export const projectsData: ProjectContent[] = [
  {
    id: '1',
    image: '/images/sango1.jpg',
    title: '人吉市森林吸収 多面的機能を有する持続可能な森林経営',
    price: 10000,
    area: {
      prefecture: '熊本県',
      city: '人吉市'
    },
    salesVolume: '350 t-CO2',
    seller: '人吉市',
    implementer: '熊本県人吉市'
  },
  {
    id: '2',
    image: '/images/sango1.jpg',
    title: '北海道4町連携による間伐促進型森林吸収プロジェクト',
    price: 10000,
    area: {
      prefecture: '北海道',
      city: '足寄郡足寄町、上川郡下川町'
    },
    salesVolume: '4,957 t-CO2',
    seller: '北海道森林バイオマス吸収量活用協議会',
    implementer: '北海道森林バイオマス吸収量活用協議会'
  },
  {
    id: '3',
    image: '/images/sango1.jpg',
    title: '鳥取県 日南町森林組合による間伐促進型森林吸収プロジェクト',
    price: 10000,
    area: {
      prefecture: '鳥取県',
      city: '日南町'
    },
    salesVolume: '3,930 t-CO2',
    seller: '日南町森林組合',
    implementer: '日南町森林組合'
  }
];

// データ取得用のユーティリティ関数
export function getAllProjects(): ProjectContent[] {
  return projectsData;
}

export function getProjectById(id: string): ProjectContent | undefined {
  return projectsData.find(project => project.id === id);
}