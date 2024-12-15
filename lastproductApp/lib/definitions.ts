// src/lib/definitions.ts
// 型定義をlibディレクトリに配置するのが推奨されています
export interface ProjectContent {
    id: string;
    image: string;
    title: string;
    price: number;
    area: {
      prefecture: string;
      city: string;
    };
    salesVolume: string;
    seller: string;
    implementer: string;
  }


export interface SponsorContent {
    id: string;
    image: string;
    companyName: string;
    industry: string;
    description: string;
    joinedDate: string;
  }