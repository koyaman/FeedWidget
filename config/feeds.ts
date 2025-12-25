export type FeedCategory = 
  'all' |
  'frontend-domestic' | 
  'frontend-international' | 
  'web-domestic' | 
  'web-general' | 
  'accessibility';

export interface FeedConfig {
  id: string;
  name: string;
  url: string;
  category: FeedCategory;
}

export const feeds: FeedConfig[] = [
  // --- アクセシビリティ ---
  {
    id: 'mitsue-a11y',
    name: 'ミツエーリンクス アクセシビリティBlog',
    url: 'http://www.mitsue.co.jp/knowledge/blog/a11y/atom.xml',
    category: 'accessibility',
  },
  {
    id: 'accessible-usable',
    name: 'Accessible & Usable',
    url: 'https://accessible-usable.net/feed',
    category: 'accessibility',
  },
  {
    id: 'waic-news',
    name: 'WAIC ニュース',
    url: 'https://waic.jp/feed/?post_type=news',
    category: 'accessibility',
  },

  // --- Web（国内） ---
  {
    id: 'evoworx',
    name: 'BLOG – evoworx',
    url: 'https://www.evoworx.co.jp/blog/feed/',
    category: 'web-domestic',
  },
  {
    id: 'lig',
    name: '株式会社LIG',
    url: 'https://liginc.co.jp/web-development/feed',
    category: 'web-domestic',
  },
  {
    id: 'hatena-design',
    name: 'Hatena Design Group',
    url: 'http://design.hatenastaff.com/feed',
    category: 'web-domestic',
  },

  // --- web (主に海外・デザイン) ---
  {
    id: 'mdn',
    name: 'MDN Blog',
    url: 'https://developer.mozilla.org/en-US/blog/rss.xml',
    category: 'web-general',
  },
  {
    id: 'webdesigntuts',
    name: 'Webdesigntuts+',
    url: 'http://feeds.feedburner.com/webdesigntutsplus',
    category: 'web-general',
  },
  {
    id: 'webresourcesdepot',
    name: 'WebResourcesDepot',
    url: 'http://feeds.feedburner.com/webresourcesdepot',
    category: 'web-general',
  },
  {
    id: 'web-design-ledger',
    name: 'Web Design Ledger',
    url: 'http://webdesignledger.com/feed',
    category: 'web-general',
  },
  {
    id: 'web-designer-aid',
    name: 'Web Designer Aid',
    url: 'http://feeds.feedburner.com/WebDesignerAid',
    category: 'web-general',
  },
  {
    id: 'designwoop',
    name: 'DesignWoop',
    url: 'http://designwoop.com/feed/',
    category: 'web-general',
  },
  {
    id: 'speckyboy',
    name: 'Speckyboy Design Magazine',
    url: 'http://feeds.feedburner.com/speckboy-design-magazine',
    category: 'web-general',
  },
  {
    id: 'heydesigner',
    name: 'HeyDesigner',
    url: 'http://feeds.feedburner.com/hey_designer',
    category: 'web-general',
  },
  {
    id: 'designmodo',
    name: 'Designmodo',
    url: 'http://feeds.feedburner.com/designmodo',
    category: 'web-general',
  },
  {
    id: 'web-tools-weekly-archive',
    name: 'Web Tools Weekly Archive',
    url: 'https://us5.campaign-archive.com/feed?u=ea228d7061e8bbfa8639666ad&id=104d6bcc2d',
    category: 'web-general',
  },
  {
    id: 'design-shack',
    name: 'Design Shack',
    url: 'http://designshack.net/category/articles/feed',
    category: 'web-general',
  },
  {
    id: 'noupe',
    name: 'noupe',
    url: 'http://feeds.feedburner.com/Noupe',
    category: 'web-general',
  },
  {
    id: 'line25',
    name: 'Line25',
    url: 'http://feeds2.feedburner.com/Line25',
    category: 'web-general',
  },
  {
    id: 'web-designer-wall',
    name: 'Web Designer Wall',
    url: 'http://feeds2.feedburner.com/WebDesignerWall',
    category: 'web-general',
  },
  {
    id: 'six-revisions',
    name: 'Six Revisions',
    url: 'http://feeds.feedburner.com/SixRevisions',
    category: 'web-general',
  },
  {
    id: 'creative-bloq',
    name: 'Creative Bloq',
    url: 'http://feeds.feedburner.com/CreativeBloq',
    category: 'web-general',
  },
  {
    id: 'slodive',
    name: 'SloDive',
    url: 'http://feeds.feedburner.com/Slodive',
    category: 'web-general',
  },
  {
    id: 'webdesigner-depot',
    name: 'Webdesigner Depot',
    url: 'http://feeds2.feedburner.com/webdesignerdepot',
    category: 'web-general',
  },
  {
    id: 'smashing-magazine',
    name: 'Smashing Magazine',
    url: 'http://rss1.smashingmagazine.com/feed/',
    category: 'web-general',
  },
  {
    id: '1stwebdesigner',
    name: '1stwebdesigner',
    url: 'http://www.1stwebdesigner.com/feed/',
    category: 'web-general',
  },
  {
    id: 'sidebar-io',
    name: 'Sidebar.io',
    url: 'https://sidebar.io/feed.xml',
    category: 'web-general',
  },

  // --- フロントエンド（国内） ---
  {
    id: 'ics-media',
    name: 'ICS MEDIA',
    url: 'https://ics.media/feed/atom',
    category: 'frontend-domestic',
  },
  {
    id: 'qiita-popular',
    name: 'Qiita - 人気の記事',
    url: 'http://qiita.com/popular-items/feed',
    category: 'frontend-domestic',
  },
  {
    id: 'microcms',
    name: 'microCMSブログ',
    url: 'https://microcms.io/blog/feed.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'realtime-jser',
    name: 'Realtime JSer.info',
    url: 'http://realtime.jser.info/feed.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'developers-io',
    name: 'DevelopersIO',
    url: 'http://dev.classmethod.jp/feed/',
    category: 'frontend-domestic',
  },
  {
    id: 'gaji-labo',
    name: 'Gaji-Laboブログ',
    url: 'https://blog.gaji.jp/feed/',
    category: 'frontend-domestic',
  },
  {
    id: 'zenn-trends',
    name: 'Zennのトレンド',
    url: 'https://zenn.dev/feed',
    category: 'frontend-domestic',
  },
  {
    id: 'codegrid',
    name: 'CodeGrid',
    url: 'https://www.codegrid.net/feed.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'postd',
    name: 'POSTD',
    url: 'http://postd.cc/feed/',
    category: 'frontend-domestic',
  },
  {
    id: 'jser-info',
    name: 'JSer.info',
    url: 'http://jser.info/rss',
    category: 'frontend-domestic',
  },
  {
    id: 'frontend-weekly-tokyo',
    name: 'Frontend Weekly Tokyo',
    url: 'https://frontendweekly.tokyo/feed.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'devio-js',
    name: 'DevelopersIO (JS)',
    url: 'http://dev.classmethod.jp/category/javascript/feed/',
    category: 'frontend-domestic',
  },
  {
    id: 'zenn-ts',
    name: 'Zenn (TypeScript)',
    url: 'https://zenn.dev/topics/typescript/feed',
    category: 'frontend-domestic',
  },
  {
    id: 'jxck',
    name: 'blog.jxck.io',
    url: 'https://blog.jxck.io/feeds/atom.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'menthas-js',
    name: 'Menthas #javascript',
    url: 'http://menthas.com/javascript/rss',
    category: 'frontend-domestic',
  },
  {
    id: 'techfeed-frontend',
    name: 'TechFeed (Frontend)',
    url: 'https://techfeed.io/feeds/categories/Web%20%2F%20Frontend?userId=5df1f8963b6d35f677a8fa36',
    category: 'frontend-domestic',
  },
  {
    id: 'techfeed-original',
    name: 'TechFeed Original',
    url: 'https://techfeed.io/feeds/original-contents',
    category: 'frontend-domestic',
  },
  {
    id: 'mitsue-frontend',
    name: 'ミツエーリンクス フロントエンド',
    url: 'http://www.mitsue.co.jp/knowledge/blog/frontend/atom.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'kanosou',
    name: '鹿野 壮',
    url: 'https://zenn.dev/tonkotsuboy_com/feed',
    category: 'frontend-domestic',
  },
  {
    id: 'fastcoding',
    name: 'FASTCODING BLOG',
    url: 'https://fastcoding.jp/blog/feed/',
    category: 'frontend-domestic',
  },
  {
    id: 'yuheiy',
    name: 'Yuhei Yasuda',
    url: 'https://yuheiy.com/posts-feed.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'dothtml5',
    name: 'dotHTML5',
    url: 'https://dothtml5.com/atom.xml',
    category: 'frontend-domestic',
  },
  {
    id: 'zenn-web',
    name: 'Zenn (Web)',
    url: 'https://zenn.dev/topics/web/feed',
    category: 'frontend-domestic',
  },

  // --- フロントエンド（海外） ---
  {
    id: 'frontend-weekly-medium',
    name: 'Frontend Weekly - Medium',
    url: 'https://medium.com/feed/front-end-hacking',
    category: 'frontend-international',
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    url: 'http://feeds.feedburner.com/SidebarFeed',
    category: 'frontend-international',
  },
  {
    id: 'web-tools-weekly',
    name: 'Web Tools Weekly',
    url: 'http://feeds.feedburner.com/WebToolsWeekly',
    category: 'frontend-international',
  },
  {
    id: 'codrops',
    name: 'Codrops',
    url: 'https://tympanus.net/codrops/feed/',
    category: 'frontend-international',
  },
  {
    id: 'smashing-mag-articles',
    name: 'Smashing Magazine Articles',
    url: 'http://www.smashingmagazine.com/feed/',
    category: 'frontend-international',
  },
  {
    id: 'front-end-front',
    name: 'Front-End Front',
    url: 'http://frontendfront.com/feed/stories',
    category: 'frontend-international',
  },
  // {
  //   id: 'echo-js',
  //   name: 'Echo JS',
  //   url: 'http://www.echojs.com/rss',
  //   category: 'frontend-international',
  // },
  {
    id: 'designer-news',
    name: 'Designer News',
    url: 'https://news.layervault.com/?format=rss',
    category: 'frontend-international',
  },
  {
    id: 'frontend-focus',
    name: 'Frontend Focus',
    url: 'http://html5weekly.com/rss',
    category: 'frontend-international',
  },
  {
    id: 'a-list-apart',
    name: 'A List Apart',
    url: 'http://www.alistapart.com/rss.xml',
    category: 'frontend-international',
  },
  {
    id: 'css-weekly',
    name: 'CSS Weekly',
    url: 'http://feeds.feedburner.com/CSS-Weekly',
    category: 'frontend-international',
  },
];

export const categories: { id: FeedCategory; label: string }[] = [
  { id: 'all', label: 'すべて' },
  { id: 'frontend-domestic', label: 'FE(国内)' },
  { id: 'frontend-international', label: 'FE(海外)' },
  { id: 'web-domestic', label: 'Web(国内)' },
  { id: 'web-general', label: 'Web(総合)' },
  { id: 'accessibility', label: 'a11y' },
];