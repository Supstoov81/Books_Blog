// Trigger redeploy: fix chunk loading issue
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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

  // Tips for each book (hardcoded since we don't have a Tip model)
  const bookTips = {
    1: [ // Atomic Habits
      'Start with the 2-minute rule: Make new habits so small they take less than 2 minutes to complete',
      'Use habit stacking: Link new habits to existing ones (e.g., "After I brush my teeth, I will read for 10 minutes")',
      'Make good habits obvious: Place visual cues in your environment (put gym clothes next to your bed)',
      'Make bad habits invisible: Remove triggers from your environment (hide your phone in another room)',
      'Use implementation intentions: Plan exactly when and where you will perform your habit',
      'Track your habits: Use a habit tracker to visualize your progress and maintain motivation',
      'Never miss twice: If you miss a habit, get back on track immediately the next day',
      'Focus on identity change: Ask yourself "What would a [healthy person/reader/athlete] do?"',
      'Use temptation bundling: Pair something you want to do with something you need to do',
      'Make habits satisfying: Add immediate rewards to reinforce good behavior'
    ],
    2: [ // Power
      'Master your emotions: Never show anger or frustration in professional settings',
      'Control information: Be strategic about what you reveal and what you keep private',
      'Build a network of allies: Cultivate relationships with people who can help you advance',
      'Study your opponents: Understand their weaknesses and motivations',
      'Use timing to your advantage: Wait for the right moment to make your move',
      'Create dependency: Make others need you for something important',
      'Use flattery strategically: Compliment people genuinely but with purpose',
      'Avoid unnecessary conflicts: Pick your battles wisely',
      'Maintain mystery: Don\'t reveal everything about yourself at once',
      'Always have a backup plan: Never put all your eggs in one basket'
    ],
    3: [ // The Subtle Art of Not Giving a F*ck
      'Choose your problems wisely: Not all problems are worth solving',
      'Accept that life is unfair: Stop expecting everything to be perfect',
      'Take responsibility for everything: Even if it\'s not your fault, you\'re responsible for how you respond',
      'Embrace uncertainty: Stop trying to control everything',
      'Focus on what you can control: Let go of what you can\'t change',
      'Be honest with yourself: Stop lying to yourself about your situation',
      'Embrace failure: See it as a learning opportunity, not a reflection of your worth',
      'Stop comparing yourself to others: Focus on your own journey',
      'Accept your limitations: You\'re not perfect and that\'s okay',
      'Find meaning in suffering: Use difficult times as opportunities for growth'
    ],
    4: [ // Can't Hurt Me
      'Use the 40% rule: When you think you\'re done, you\'re only at 40% of your capability',
      'Embrace discomfort: Seek out difficult situations to build mental toughness',
      'Practice the accountability mirror: Look yourself in the eye and tell yourself the truth',
      'Develop a calloused mind: Build mental resilience through consistent challenge',
      'Stop making excuses: Take full responsibility for your life and actions',
      'Push through when you want to quit: Don\'t stop when you\'re tired, stop when you\'re done',
      'Create a new identity: Decide who you want to be and act accordingly',
      'Use pain as fuel: Channel your suffering into motivation for growth',
      'Practice self-discipline daily: Build the habit of doing what you don\'t want to do',
      'Focus on what you can control: Stop worrying about things outside your influence'
    ]
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else {
          console.error('Failed to fetch books');
        }
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
    const grouped: { [key: string]: Quote[] } = {};
    quotes.forEach(quote => {
      if (!grouped[quote.category]) {
        grouped[quote.category] = [];
      }
      grouped[quote.category].push(quote);
    });
    return grouped;
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
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Books Quotes</h1>
            </div>
            <nav className="flex space-x-6">
              <button 
                onClick={() => setActiveSection('books')}
                className={`text-lg font-semibold ${activeSection === 'books' ? 'text-blue-700' : 'text-gray-700'} hover:underline`}
              >
                Books
              </button>
              <button 
                onClick={() => setActiveSection('about')}
                className={`text-lg font-semibold ${activeSection === 'about' ? 'text-blue-700' : 'text-gray-700'} hover:underline`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`text-lg font-semibold ${activeSection === 'contact' ? 'text-blue-700' : 'text-gray-700'} hover:underline`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'books' && (
          <div className="space-y-8">
            {books.map((book) => (
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

                {/* Tips Section */}
                {showTips === book.id && bookTips[book.id as keyof typeof bookTips] && (
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">10 Practical Tips from &quot;{book.title}&quot;</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      {bookTips[book.id as keyof typeof bookTips].map((tip, index) => (
                        <li key={index} className="text-gray-700 leading-relaxed">
                          {tip}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Quotes Section */}
                {expandedBookId === book.id && (
                  <div className="mt-6">
                    {Object.entries(groupQuotesByCategory(book.quotes)).map(([category, quotes]) => (
                      <div key={category} className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {quotes.map((quote) => (
                            <div key={quote.id} className="bg-gray-50 p-4 rounded-lg">
                              <p className="text-gray-800 italic">&quot;{quote.text}&quot;</p>
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
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Welcome to Books Quotes, your destination for powerful insights from the world's most influential books. 
                We curate the best quotes and practical tips from books that can transform your life.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to help you apply the wisdom from these books to your daily life through actionable tips 
                and memorable quotes that inspire change and growth.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're looking for motivation, practical advice, or deep insights, you'll find it here in the 
                carefully selected content from books that have changed millions of lives.
              </p>
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Have questions, suggestions, or want to share your favorite book quotes? We&#39;d love to hear from you!
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Email us at: <a href="mailto:contact@books-quotes.com" className="text-blue-600 hover:underline">contact@books-quotes.com</a>
              </p>
              <p className="text-lg text-gray-700">
                Follow us on social media for daily inspiration and book recommendations.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
