'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Quote {
  id: number;
  text: string;
  context: string;
  themes: string;
  category: string;
}

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  description: string;
  amazonLink: string | null;
  quotes: Quote[];
  tips: string[];
}

export default function BookCard({ id, title, author, coverImage, rating, description, amazonLink, quotes, tips }: BookCardProps) {
  const [showQuotes, setShowQuotes] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const grouped = quotes.reduce<Record<string, Quote[]>>((acc, q) => {
    acc[q.category] = acc[q.category] || [];
    acc[q.category].push(q);
    return acc;
  }, {});

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        {/* Cover */}
        <div className="relative w-full md:w-44 flex-shrink-0 bg-slate-100 flex items-center justify-center min-h-[220px]">
          <Image
            src={coverImage}
            alt={`${title} book cover`}
            width={160}
            height={220}
            className="object-contain w-full h-full p-2"
          />
          <div className="absolute bottom-2 left-2 bg-yellow-400 rounded-full px-2 py-0.5 text-xs font-bold text-slate-900">
            {'★'.repeat(rating)} {rating}/5
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <Link href={`/books/${id}`}>
              <h2 className="text-2xl font-bold text-slate-900 hover:text-blue-700 transition-colors mb-1 leading-tight">
                {title}
              </h2>
            </Link>
            <p className="text-slate-500 text-sm font-medium mb-3">by {author}</p>
            <p className="text-slate-700 leading-relaxed mb-3 line-clamp-3">{description}</p>
            <Link href={`/books/${id}`} className="text-blue-600 text-sm font-semibold hover:underline">
              Read full analysis & all quotes →
            </Link>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-5">
            {amazonLink && (
              <a
                href={amazonLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-yellow-400 text-slate-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors text-sm"
              >
                Buy on Amazon
              </a>
            )}
            <button
              onClick={() => { setShowQuotes(v => !v); setShowTips(false); }}
              aria-expanded={showQuotes}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${showQuotes ? 'bg-emerald-700 text-white' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
            >
              {showQuotes ? 'Hide Quotes' : `Show Quotes (${quotes.length})`}
            </button>
            {tips.length > 0 && (
              <button
                onClick={() => { setShowTips(v => !v); setShowQuotes(false); }}
                aria-expanded={showTips}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${showTips ? 'bg-violet-700 text-white' : 'bg-violet-600 text-white hover:bg-violet-700'}`}
              >
                {showTips ? 'Hide Tips' : `Show 10 Tips`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tips panel */}
      {showTips && tips.length > 0 && (
        <div className="border-t border-violet-100 bg-violet-50 px-6 py-5">
          <h3 className="text-lg font-bold text-violet-900 mb-4">
            10 Actionable Tips from &ldquo;{title}&rdquo;
          </h3>
          <ol className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-violet-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <p className="text-slate-700 leading-relaxed text-sm">{tip}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Quotes panel */}
      {showQuotes && (
        <div className="border-t border-emerald-100 bg-slate-50 px-6 py-5">
          <h3 className="text-lg font-bold text-slate-800 mb-4">
            Key Quotes from &ldquo;{title}&rdquo;
          </h3>
          {Object.entries(grouped).map(([category, catQuotes]) => (
            <div key={category} className="mb-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-700 mb-3">{category}</h4>
              <div className="grid gap-3 md:grid-cols-2">
                {catQuotes.map(q => (
                  <blockquote key={q.id} className="bg-white border-l-4 border-emerald-400 pl-4 pr-3 py-3 rounded-r-lg shadow-sm">
                    <p className="text-slate-800 italic text-sm leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                    {q.context && <footer className="text-xs text-slate-400 mt-2">{q.context}</footer>}
                  </blockquote>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
