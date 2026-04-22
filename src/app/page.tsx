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

  const totalQuotes = books.reduce((s, b) => s + b.quotes.length, 0);
  const totalTips = books.length * 10;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Personal Development Books — Quotes, Tips & Analysis',
    description: 'Curated quotes, in-depth analysis and 10 actionable tips for the best personal development books.',
    url: 'https://books-quotes.com',
    itemListElement: books.map((book, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://books-quotes.com/books/${book.id}`,
      name: book.title,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best personal development book to start with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atomic Habits by James Clear is widely considered the best starting point for personal development. It provides a practical, science-backed framework for building good habits and breaking bad ones, with immediate actionable steps.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the key lessons from Rich Dad Poor Dad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rich Dad Poor Dad teaches that financial freedom comes from acquiring income-generating assets rather than working for a salary. The core lessons are: pay yourself first, understand the difference between assets and liabilities, and make your money work for you through investing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the main message of Atomic Habits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The main message of Atomic Habits is that small, incremental improvements compound over time into remarkable results. James Clear argues that outcomes are a lagging measure of habits, and that identity-based habits — focusing on who you want to become rather than what you want to achieve — are the most powerful.',
        },
      },
      {
        '@type': 'Question',
        name: 'What books are available on Books Quotes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Books Quotes features ${books.length} carefully selected personal development books including: ${books.map(b => b.title).join(', ')}. Each book comes with curated quotes, a full analysis, and 10 actionable tips.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
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
              {[`${books.length} Books`, `${totalQuotes}+ Quotes`, `${totalTips} Actionable Tips`].map(stat => (
                <span key={stat} className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-sm font-semibold text-white">
                  {stat}
                </span>
              ))}
            </div>
            <a
              href="#books"
              className="inline-block bg-yellow-400 text-slate-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-lg shadow-lg"
            >
              Explore the Library ↓
            </a>
          </div>
        </section>

        {/* Books */}
        <main id="books" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Essential Reading — Personal Development Library</h2>
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

        {/* FAQ */}
        <section id="faq" className="bg-white border-t border-slate-200 py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is the best personal development book to start with?',
                  a: 'Atomic Habits by James Clear is widely considered the best starting point. It provides a practical, science-backed framework for building good habits with immediate actionable steps.',
                },
                {
                  q: 'What are the key lessons from Rich Dad Poor Dad?',
                  a: 'Rich Dad Poor Dad teaches that financial freedom comes from acquiring income-generating assets. The core lessons: pay yourself first, understand the difference between assets and liabilities, and make your money work for you.',
                },
                {
                  q: 'What is the main message of Atomic Habits?',
                  a: 'Small, incremental improvements compound over time into remarkable results. Identity-based habits — focusing on who you want to become rather than what you want to achieve — are the most powerful driver of lasting change.',
                },
                {
                  q: 'What books are available on Books Quotes?',
                  a: `Books Quotes features ${books.length} carefully selected personal development books: ${books.map(b => b.title).join(', ')}. Each comes with curated quotes, a full analysis, and 10 actionable tips.`,
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Brand */}
              <div>
                <Link href="/" className="text-xl font-extrabold tracking-tight">
                  Books<span className="text-yellow-400">Quotes</span>
                </Link>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  Curated quotes, in-depth analysis and actionable tips from the world&apos;s best personal development books.
                </p>
              </div>
              {/* Links */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Explore</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li><a href="#books" className="hover:text-yellow-400 transition-colors">All Books</a></li>
                  <li><a href="https://books-quotes.com/sitemap.xml" className="hover:text-yellow-400 transition-colors">Sitemap</a></li>
                </ul>
              </div>
              {/* Legal */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-4">Legal</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Some links are Amazon affiliate links. As an Amazon Associate, we earn a small commission from qualifying purchases at no extra cost to you.
                </p>
              </div>
            </div>
            <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <p>© {new Date().getFullYear()} BooksQuotes · All rights reserved.</p>
              <p>Personal development · Quotes · Analysis · Tips</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
