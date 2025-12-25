import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import { feeds, FeedCategory } from '@/config/feeds';

// RSSパーサーのインスタンス化
const parser = new Parser({
  timeout: 5000, // 5秒タイムアウト
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; FeedWidget/1.0; +https://example.com)',
  },
});

export interface FeedItem {
  title: string;
  link: string;
  date: string;
  source: string;
  sourceId: string;
  category: FeedCategory;
}

export const dynamic = 'force-dynamic'; // キャッシュはヘッダーで制御するため、Next.jsの静的生成は無効化

export async function GET() {
  try {
    const feedPromises = feeds.map(async (feedConfig) => {
      try {
        const feed = await parser.parseURL(feedConfig.url);
        
        // 記事データを整形
        const items: FeedItem[] = (feed.items || []).map((item) => {
            // 日付のパース試行
            const pubDate = item.isoDate || item.pubDate || new Date().toISOString();
            
            return {
            title: item.title || 'No Title',
            link: item.link || '',
            date: pubDate,
            source: feedConfig.name,
            sourceId: feedConfig.id,
            category: feedConfig.category,
            };
        });
        
        return items;
      } catch (error) {
        console.error(`Error fetching feed ${feedConfig.name}:`, error);
        // エラー時は空配列を返すことで、他のフィードの取得を妨げない
        return [];
      }
    });

    // 並列実行
    const results = await Promise.all(feedPromises);
    
    // 配列をフラット化して結合
    const allItems = results.flat();

    // 日付で降順ソート (新しい順)
    allItems.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // レスポンス生成
    return NextResponse.json(
      { items: allItems },
      {
        status: 200,
        headers: {
          // Vercel Edge Cache設定: 共有キャッシュ1時間、再検証まで古いキャッシュを表示可能
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
        },
      }
    );

  } catch (error) {
    console.error('Critical error in feed aggregation:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
