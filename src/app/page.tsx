import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import BookCard from '@/components/BookCard';
import { bookTips } from '@/lib/tips';

export const revalidate = 3600;

export default async function Home() {
  const books = await prisma.book.findMany({
    include: { quotes: true },
    orderBy: { id: 'asc' },
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Personal Development Books — Quotes & Analysis',
    description: 'Curated quotes, in-depth analysis and 10 actionable tips for the best personal development books.',
    url: 'https://books-quotes.com',
    itemListElement: books.map((book, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://books-quotes.com/books/${book.id}`,
      name: book.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-extrabold text-slate-900 tracking-tight">
                Books<span className="text-blue-600">Quotes</span>
              </Link>
              <nav className="flex items-center gap-6">
                <a href="#books" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Books</a>
                <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Personal Development · Quotes · Summaries · Tips
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              The Best Self-Improvement Books —<br className="hidden md:block" />
              <span className="text-yellow-400">Quotes, Tips & Analysis</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
              We distil the most impactful ideas from the world&apos;s best personal development books
              into curated quotes, in-depth analyses, and 10 actionable tips per book.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[`${books.length} Books`, `${books.reduce((s, b) => s + b.quotes.length, 0)}+ Quotes`, '50 Actionable Tips'].map(stat => (
                <span key={stat} className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold text-white">
                  {stat}
                </span>
              ))}
            </div>
            <a
              href="#books"
              className="inline-block bg-yellow-400 text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-lg shadow-lg"
            >
              Explore the Books ↓
            </a>
          </div>
        </section>

        {/* Books */}
        <main id="books" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Featured Books</h2>
            <p className="text-sm text-slate-500">{books.length} books · updated regularly</p>
          </div>

          <div className="space-y-6">
            {books.map(book => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                coverImage={book.coverImage}
                rating={book.rating}
                description={book.description}
                amazonLink={book.amazonLink}
                quotes={book.quotes}
                tips={bookTips[book.title] ?? []}
              />
            ))}
          </div>
        </main>

        {/* About */}
        <section id="about" className="bg-white border-t border-slate-200 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Books Quotes</h2>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              <strong>Books Quotes</strong> is a curated space for anyone who believes that the right words, at the right moment, can change everything.
            </p>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              Each book featured here has been hand-picked for its proven impact — whether it rewires how you build habits, sharpens your ability to influence others, deepens your resilience, or helps you develop a Stoic mindset for everyday challenges.
            </p>
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              For every book you&apos;ll find: <strong>themed quotes</strong> pulled from the most impactful passages, an <strong>in-depth analysis</strong> that goes beyond the surface, and <strong>10 practical tips</strong> you can start applying today — no fluff, no padding.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The goal is simple: turn reading into transformation. Whether you&apos;re discovering a book for the first time or returning to one that changed your life, Books Quotes gives you the tools to extract maximum value from the world&apos;s best ideas.
            </p>
            <p className="text-xs text-slate-400 mt-8 leading-relaxed">
              <em>Affiliate disclosure: Some links on this site are Amazon affiliate links. As an Amazon Associate, we earn a small commission from qualifying purchases at no extra cost to you. This helps us keep the site free and updated.</em>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center text-sm">
          <p className="mb-2">
            <Link href="/" className="text-white font-bold">BooksQuotes</Link>
            {' '}· Personal development book quotes, summaries & tips
          </p>
          <p>© {new Date().getFullYear()} Books Quotes · <a href="https://books-quotes.com/sitemap.xml" className="hover:text-white">Sitemap</a></p>
        </footer>
      </div>
    </>
  );
}
