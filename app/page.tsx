'use client';

import { useEffect, useState, useMemo } from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { categories, FeedCategory } from '@/config/feeds';
import type { FeedItem } from '@/app/api/feeds/route';
import { ExternalLink, RefreshCw, AlertCircle } from 'lucide-react';

export default function Home() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<FeedCategory>('all');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchFeeds = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/feeds');
      if (!res.ok) {
        throw new Error('Failed to fetch feeds');
      }
      const data = await res.json();
      setItems(data.items);
      setLastUpdated(new Date());
    } catch (err) {
      console.error(err);
      setError('フィードの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <main className="min-h-screen bg-notion-bg text-notion-text p-4">
      {/* Header / Tabs */}
      <div className="sticky top-0 bg-notion-bg/95 backdrop-blur-sm z-10 pb-4 border-b border-notion-border mb-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Latest News</h1>
          <button 
            onClick={fetchFeeds} 
            disabled={loading}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            title="更新"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-3 py-1 text-sm rounded-md whitespace-nowrap transition-colors
                ${activeCategory === cat.id 
                  ? 'bg-gray-800 text-white shadow-sm' 
                  : 'bg-notion-gray text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        {error && (
          <div className="p-4 rounded-md bg-red-50 text-red-600 flex items-center gap-2 text-sm">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {loading && items.length === 0 ? (
          // Loading Skeletons
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="animate-pulse p-3 rounded-md space-y-2">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-1/4"></div>
            </div>
          ))
        ) : (
          filteredItems.map((item, index) => (
            <a
              key={`${item.sourceId}-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 rounded-md hover:bg-notion-gray transition-colors group"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-sm font-medium leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h2>
                <ExternalLink size={12} className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
              </div>
              
              <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500">
                <span className={`
                  px-1.5 py-0.5 rounded text-[10px] font-medium
                  ${getCategoryColor(item.category)}
                `}>
                  {item.source}
                </span>
                <span>
                  {format(new Date(item.date), 'MM/dd HH:mm', { locale: ja })}
                </span>
              </div>
            </a>
          ))
        )}

        {!loading && filteredItems.length === 0 && !error && (
          <div className="text-center py-10 text-gray-400 text-sm">
            記事がありません
          </div>
        )}
      </div>
      
      {lastUpdated && !loading && (
        <div className="text-[10px] text-gray-300 text-center mt-8 pb-2">
          Last updated: {format(lastUpdated, 'HH:mm:ss')}
        </div>
      )}
    </main>
  );
}

function getCategoryColor(category: string): string {
  switch (category) {
    case 'tech': return 'bg-blue-50 text-blue-600';
    case 'domestic': return 'bg-red-50 text-red-600';
    case 'international': return 'bg-purple-50 text-purple-600';
    case 'other': return 'bg-orange-50 text-orange-600';
    default: return 'bg-gray-100 text-gray-600';
  }
}
