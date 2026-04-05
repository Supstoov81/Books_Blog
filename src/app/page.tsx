// Trigger redeploy: fix chunk loading issue
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Pour Node 15, côté serveur fetch peut nécessiter node-fetch
// Si tu appelles /api/books côté client, pas besoin, sinon pour serveur:
// import fetch from 'node-fetch';

interface Quote {
  id: number;
  text: string;
  context: string;
  themes: string;
  category: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  description: string;
  analysis: string;
  amazonLink: string;
  quotes: Quote[];
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedBookId, setExpandedBookId] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'books' | 'about' | 'contact'>('books');
  const [showTips, setShowTips] = useState<number | null>(null);

  // Hardcoded tips
  const bookTips: Record<string, string[]> = {
    'Atomic Habits': [
      'Start with the 2-minute rule...',
      'Use habit stacking...',
      'Make good habits obvious...',
      'Make bad habits invisible...',
      'Use implementation intentions...',
      'Track your habits...',
      'Never miss twice...',
      'Focus on identity change...',
      'Use temptation bundling...',
      'Make habits satisfying...'
    ],
    'Power': [
      'Master your emotions...',
      'Control information...',
      'Build a network of allies...',
      'Study your opponents...',
      'Use timing to your advantage...',
      'Create dependency...',
      'Use flattery strategically...',
      'Avoid unnecessary conflicts...',
      'Maintain mystery...',
      'Always have a backup plan...'
    ],
    "Can't Hurt Me": [
      'Use the 40% rule...',
      'Embrace discomfort...',
      'Practice the accountability mirror...',
      'Develop a calloused mind...',
      'Stop making excuses...',
      'Push through when you want to quit...',
      'Create a new identity...',
      'Use pain as fuel...',
      'Practice self-discipline daily...',
      'Focus on what you can control...'
    ],
    'How to Win Friends and Influence People': [
      'Show genuine interest in others — ask about their lives and listen attentively.',
      'Smile sincerely; a warm smile signals openness and goodwill.',
      "Remember people's names — it's the sweetest sound to them.",
      'Be a great listener; encourage others to talk about themselves.',
      'Talk in terms of the other person\'s interests, not your own.',
      'Make the other person feel important — and do it sincerely.',
      'Avoid criticism and condemnation; replace them with understanding.',
      'Give honest and sincere appreciation, not flattery.',
      'When you\'re wrong, admit it quickly and emphatically.',
      'Let the other person feel the idea is theirs — it boosts buy-in and goodwill.'
    ]
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        if (!response.ok) throw new Error('Failed to fetch books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  const toggleQuotes = (bookId: number) => {
    setExpandedBookId(expandedBookId === bookId ? null : bookId);
  };

  const toggleTips = (bookId: number) => {
    setShowTips(showTips === bookId ? null : bookId);
  };

  const groupQuotesByCategory = (quotes: Quote[]) => {
    return quotes.reduce<Record<string, Quote[]>>((acc, quote) => {
      acc[quote.category] = acc[quote.category] || [];
      acc[quote.category].push(quote);
      return acc;
    }, {});
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Books Quotes</h1>
            <nav className="flex space-x-6">
              {['books','about','contact'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section as 'books'|'about'|'contact')}
                  className={`text-lg font-semibold ${
                    activeSection === section ? 'text-blue-700' : 'text-gray-700'
                  } hover:underline`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'books' && (
          <div className="space-y-8">
            {books.map(book => (
              <div key={book.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start space-x-6">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    width={120}
                    height={160}
                    className="rounded-lg shadow-md"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h2>
                    <p className="text-lg text-gray-600 mb-2">by {book.author}</p>
                    <div className="flex items-center mb-4">
                      {[...Array(book.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">{book.description}</p>
                    <div className="flex space-x-4">
                      <a
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Buy on Amazon
                      </a>
                      <button
                        onClick={() => toggleQuotes(book.id)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        {expandedBookId === book.id ? 'Hide Quotes' : 'Show Quotes'}
                      </button>
                      <button
                        onClick={() => toggleTips(book.id)}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        {showTips === book.id ? 'Hide Tips' : 'Show Tips'}
                      </button>
                    </div>
                  </div>
                </div>

                {showTips === book.id && bookTips[book.title] && (
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">
                      10 Practical Tips from &ldquo;{book.title}&rdquo;
                    </h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {bookTips[book.title].map((tip, i) => (
                        <li key={i} className="text-gray-700 leading-relaxed">{tip}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {expandedBookId === book.id && (
                  <div className="mt-6">
                    {Object.entries(groupQuotesByCategory(book.quotes)).map(([category, quotes]) => (
                      <div key={category} className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {quotes.map(q => (
                            <div key={q.id} className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-gray-800 italic">&ldquo;{q.text}&rdquo;</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeSection === 'about' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Books Quotes</h2>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to Books Quotes, your destination for powerful insights...
            </p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              Email us at: <a href="mailto:contact@books-quotes.com" className="text-blue-600 hover:underline">contact@books-quotes.com</a>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}