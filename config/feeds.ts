export type FeedCategory = 'all' | 'domestic' | 'international' | 'tech' | 'other';

export interface FeedConfig {
  id: string;
  name: string;
  url: string;
  category: FeedCategory;
}

export const feeds: FeedConfig[] = [
  {
    id: 'zenn-trend',
    name: 'Zenn',
    url: 'https://zenn.dev/feed',
    category: 'tech',
  },
  {
    id: 'qiita-trend',
    name: 'Qiita',
    url: 'https://qiita.com/popular-items/feed',
    category: 'tech',
  },
  {
    id: 'github-blog',
    name: 'GitHub Blog',
    url: 'https://github.blog/feed/',
    category: 'international',
  },
  {
    id: 'techcrunch-jp',
    name: 'TechCrunch JP',
    url: 'https://jp.techcrunch.com/feed/',
    category: 'domestic',
  },
  {
    id: 'wired-jp',
    name: 'WIRED.jp',
    url: 'https://wired.jp/rssfeeder/',
    category: 'domestic',
  },
  {
    id: 'publickey',
    name: 'Publickey',
    url: 'https://www.publickey1.jp/atom.xml',
    category: 'tech',
  },
  {
    id: 'hatena-tech',
    name: 'Hatena Tech',
    url: 'https://b.hatena.ne.jp/hotentry/it.rss',
    category: 'other',
  }
];

export const categories: { id: FeedCategory; label: string }[] = [
  { id: 'all', label: 'すべて' },
  { id: 'domestic', label: '国内' },
  { id: 'international', label: '海外' },
  { id: 'tech', label: '技術' },
  { id: 'other', label: 'その他' },
];
