# lastproduct
最終プロダクト制作用

作成ルール

＜完成まで＞
・最初にソース管理＞・・・＞Pullで最新のリモートリポジトリに更新する
　※同じタイミングで同一ファイルを編集はしない！
・それぞれローカル（Gitに接続されてるVSコード上）で作業する
・いい感じに全体が動いたら毎回コミットする
　ソース管理＞変更の＋を押下＞メッセージ欄に「UPDATE名前1.2（適当なバージョン）」を記入してコミット押下＞変更の同期(プッシュ)


＜最後＞
・Git上のコードファイルをhtdocsにコピー？不要かも
・FilerZilaでどっちかのさくらサーバ上にあげる
※DBの場合はほかにもやることありそう


## ディレクトリ構造

```plaintext
src/
├── app/                      # Next.js App Router
│   ├── page.tsx             # メインページ
│   ├── content1/            # プロジェクト詳細
│   │   └── [id]/           
│   │       └── page.tsx    # 動的ルーティングによる詳細ページ
│   └── sponsors/           # 協賛企業
│       └── page.tsx        # 協賛企業一覧ページ
│
├── components/              # 共通コンポーネント
│   ├── layout/             # レイアウト関連
│   │   ├── Header.tsx     # ヘッダーコンポーネント
│   │   └── Footer.tsx     # フッターコンポーネント
│   └── card/               # カードコンポーネント
│       ├── CardList.tsx   # プロジェクトカードリスト
│       ├── ContentCard.tsx # プロジェクト個別カード
│       └── SponsorCard.tsx # 協賛企業カード
│
└── lib/                    # 共通ライブラリ
   ├── definitions.ts      # TypeScript型定義
   ├── projectData.ts      # プロジェクトデータ
   └── sponsorData.ts      # 協賛企業データ
```

## 主要コンポーネントの説明
### ページコンポーネント
app/page.tsx

### メインページコンポーネント
メインビジュアル、プロジェクト一覧、協賛企業一覧を表示
各セクションから詳細ページへの遷移が可能

app/content1/[id]/page.tsx

### プロジェクト詳細ページ
動的ルーティングによりプロジェクトIDに基づいて内容を表示
プロジェクトの詳細情報を提供

app/sponsors/page.tsx

### 協賛企業一覧ページ
すべての協賛企業情報を表示

### 共通コンポーネント
レイアウト関連

Header.tsx: サイト共通のヘッダーナビゲーション
Footer.tsx: サイト共通のフッター情報

### カードコンポーネント

CardList.tsx: プロジェクトカードのリスト表示を管理
ContentCard.tsx: 個別のプロジェクト情報をカード形式で表示
SponsorCard.tsx: 協賛企業情報をカード形式で表示

### データ管理
lib/definitions.ts

lib/projectData.ts & lib/sponsorData.ts

### プロジェクトデータと協賛企業データの管理
データ取得用のユーティリティ関数を提供

getAllProjects(): 全プロジェクト取得
getProjectById(id): 個別プロジェクト取得
getAllSponsors(): 全協賛企業取得
getSponsorById(id): 個別協賛企業取得



### 技術スタック

Next.js (App Router)
TypeScript
Tailwind CSS

### 主要機能

プロジェクト一覧表示
プロジェクト詳細表示
協賛企業一覧表示
レスポンシブデザイン対応
動的ルーティング

### 開発環境のセットアップ
bashCopy# プロジェクトのクローン
git clone [repository-url]

### 依存パッケージのインストール
npm install

### 開発サーバーの起動
npm run dev

## 注意事項
画像ファイルはpublic/images/ディレクトリに配置してください
コンポーネントの追加時は適切なディレクトリ構造に従ってください
型定義の追加・変更時はdefinitions.tsを更新してください
開発環境へのnode.jsのインストールが必要