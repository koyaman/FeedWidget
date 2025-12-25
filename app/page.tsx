'use client';

import { useEffect, useState, useMemo } from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { categories, FeedCategory } from '@/config/feeds';
import type { FeedItem } from '@/app/api/feeds/route';
import { ExternalLink, RefreshCw, AlertCircle, Terminal } from 'lucide-react';

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
      setError('SYSTEM ERROR: Feed retrieval failed.');
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
    <main className="min-h-screen bg-cyber-black text-cyber-text p-2 font-mono text-xs">
      {/* Header / Tabs */}
      <div className="sticky top-0 bg-cyber-black/95 backdrop-blur-sm z-10 pb-2 border-b border-cyber-slate mb-2">
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2 text-cyber-primary drop-shadow-neon-text">
            <Terminal size={14} />
            <h1 className="font-bold tracking-widest">FEED_WIDGET_V0.01</h1>
          </div>
          <button 
            onClick={fetchFeeds} 
            disabled={loading}
            className="text-cyber-dim hover:text-cyber-primary transition-colors p-1 hover:animate-pulse"
            title="RELOAD SYSTEM"
          >
            <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
        
        <div className="flex gap-1 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-2 py-0.5 border transition-all duration-300 whitespace-nowrap uppercase tracking-wider
                ${activeCategory === cat.id 
                  ? 'border-cyber-primary bg-cyber-primary/10 text-cyber-primary shadow-neon-blue' 
                  : 'border-cyber-slate text-cyber-dim hover:border-cyber-dim hover:text-cyber-text'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-[1px]">
        {error && (
          <div className="p-2 border border-cyber-secondary/50 text-cyber-secondary flex items-center gap-2 bg-cyber-secondary/5">
            <AlertCircle size={14} />
            {error}
          </div>
        )}

        {loading && items.length === 0 ? (
          // Loading Skeletons
          Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 py-1 px-1 animate-pulse opacity-50">
              <div className="w-16 h-3 bg-cyber-slate"></div>
              <div className="flex-1 h-3 bg-cyber-slate"></div>
              <div className="w-8 h-3 bg-cyber-slate"></div>
            </div>
          ))
        ) : (
          filteredItems.map((item, index) => (
            <a
              key={`${item.sourceId}-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 py-1 px-1 hover:bg-cyber-slate/50 hover:pl-2 transition-all duration-200 border-l-2 border-transparent hover:border-cyber-primary truncate"
            >
              {/* Category/Source Badge */}
              <span className={`
                shrink-0 w-[80px] text-[10px] text-right truncate opacity-70 group-hover:opacity-100 transition-opacity
                ${getCategoryColor(item.category)}
              `}>
                [{item.source}]
              </span>

              {/* Title */}
              <span className="flex-1 truncate text-cyber-text group-hover:text-cyber-primary transition-colors">
                {item.title}
              </span>

              {/* Date */}
              <span className="shrink-0 text-[10px] text-cyber-dim font-light">
                {format(new Date(item.date), 'MM-dd HH:mm', { locale: ja })}
              </span>
            </a>
          ))
        )}

        {!loading && filteredItems.length === 0 && !error && (
          <div className="text-center py-10 text-cyber-dim">
            NO_DATA_FOUND
          </div>
        )}
      </div>
      
      {/* Footer Status */}
      {lastUpdated && !loading && (
        <div className="text-[10px] text-cyber-dim/50 text-right mt-4 border-t border-cyber-slate pt-1">
          SYSTEM_SYNC: {format(lastUpdated, 'HH:mm:ss')}
        </div>
      )}
    </main>
  );
}

function getCategoryColor(category: string): string {
  switch (category) {
    case 'frontend-domestic':
    case 'web-domestic': 
      return 'text-cyber-primary'; // Cyan
    case 'frontend-international':
    case 'web-general': 
      return 'text-cyber-secondary'; // Magenta
    case 'accessibility': 
      return 'text-cyber-accent'; // Lime
    case 'tech': 
      return 'text-cyber-warning'; // Yellow
    default: 
      return 'text-cyber-dim';
  }
}