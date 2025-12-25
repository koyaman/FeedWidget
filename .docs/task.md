# タスク管理

## フェーズ 1: 初期設定と構成
- [ ] プロジェクトの初期化 (`git init`) - 完了
- [ ] `package.json` の作成と依存関係の定義
- [ ] 必要なパッケージのインストール
- [ ] Tailwind CSS の設定 (`tailwind.config.ts`, `postcss.config.js`)
- [ ] TypeScript 設定 (`tsconfig.json`)

## フェーズ 2: バックエンド (API) 実装
- [ ] フィード設定ファイルの実装 (`config/feeds.ts`)
- [ ] RSS取得APIの実装 (`app/api/feeds/route.ts`)
    - [ ] `rss-parser` によるフィード取得
    - [ ] エラーハンドリングと並列処理
    - [ ] キャッシュヘッダーの設定

## フェーズ 3: フロントエンド実装
- [ ] グローバルスタイルとレイアウト (`app/globals.css`, `app/layout.tsx`)
- [ ] メインページ実装 (`app/page.tsx`)
    - [ ] カテゴリタブのUI実装
    - [ ] 記事リストの表示
    - [ ] クライアントサイドでのフィルタリング機能
    - [ ] レスポンシブデザイン調整 (Notion埋め込み用)

## フェーズ 4: 動作確認とドキュメント
- [ ] ビルド確認 (`npm run build`)
- [ ] 最終動作確認
