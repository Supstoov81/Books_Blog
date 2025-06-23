// Trigger redeploy: minor change
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  description: string;
  amazonLink: string;
  quotes: {
    [key: string]: string[];
  };
}

export default function Home() {
  const [expandedBookId, setExpandedBookId] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<'books' | 'about' | 'contact'>('books');

  // Updated: Latest version with Google Analytics tracking
  const books: Book[] = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      coverImage: 'https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A practical guide to creating good habits and breaking bad ones. An essential book about behavior change.',
      amazonLink: 'https://www.amazon.fr/dp/1847941834/?tag=moncodeaff',
      quotes: {
        'Core Principles': [
          'You do not rise to the level of your goals, you fall to the level of your systems.',
          'Small habits make a big difference.',
          'Change is not an event, it\'s a process.',
          'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.',
          'Every action you take is a vote for the type of person you wish to become.',
          'The best way to change your habits is to focus not on what you want to achieve, but on who you want to become.',
          'Habits are the compound interest of self-improvement.',
          'The quality of your life is a measure of the quality of your habits.',
          'You do not rise to the level of your goals, you fall to the level of your systems.',
          'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.'
        ],
        'Identity and Habits': [
          'Habits are the compound interest of self-improvement.',
          'Every action you take is a vote for the type of person you wish to become.',
          'The best way to change your habits is to focus not on what you want to achieve, but on who you want to become.',
          'Your identity emerges out of your habits.',
          'The more you repeat a behavior, the more you reinforce the identity associated with that behavior.',
          'True behavior change is identity change.',
          'The goal is not to read a book, the goal is to become a reader.',
          'The goal is not to run a marathon, the goal is to become a runner.',
          'The goal is not to play an instrument, the goal is to become a musician.',
          'The goal is not to learn a language, the goal is to become bilingual.'
        ],
        'Practical Application': [
          'Habits are the compound interest of self-improvement.',
          'You do not rise to the level of your goals, you fall to the level of your systems.',
          'The quality of your life is a measure of the quality of your habits.',
          'Habits are like the atoms of your life. Each one is a fundamental unit that contributes to your overall improvement.',
          'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.',
          'Every action you take is a vote for the type of person you wish to become.',
          'The best way to change your habits is to focus not on what you want to achieve, but on who you want to become.',
          'Habits are the compound interest of self-improvement.',
          'The quality of your life is a measure of the quality of your habits.',
          'You do not rise to the level of your goals, you fall to the level of your systems.'
        ]
      }
    },
    {
      id: 2,
      title: 'Power',
      author: 'Robert Greene',
      coverImage: 'https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A book about the strategies and principles of power and influence.',
      amazonLink: 'https://www.amazon.fr/dp/0143111427/?tag=moncodeaff',
      quotes: {
        'Core Principles': [
          'Power is the ability to influence others and get what you want.',
          'The best way to win is to never play the other person\'s game.',
          'Power is a matter of perception.',
          'The most important skill in gaining power is the ability to master your emotions.',
          'Power is not what you have, but what others think you have.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.',
          'The essence of power is the ability to keep the initiative, to get others to react to your moves, to keep your opponent responding to you.',
          'Power is based on a simple rule: you must always be aware of what you are revealing or concealing.',
          'The most important aspect of power is how you make others feel.'
        ],
        'Strategic Thinking': [
          'Never show your anger, it is a weapon you must keep secret.',
          'Power is like a chess game: each piece has its role and value.',
          'The best way to win is to make the other person lose without realizing it.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.',
          'The essence of power is the ability to keep the initiative, to get others to react to your moves.',
          'Power is based on a simple rule: you must always be aware of what you are revealing or concealing.',
          'The most important aspect of power is how you make others feel.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.'
        ],
        'Practical Tactics': [
          'Power is a matter of timing and patience.',
          'Never fight against an enemy stronger than you.',
          'Power is a matter of information control.',
          'The best way to win is to make the other person think they have won.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.',
          'The essence of power is the ability to keep the initiative, to get others to react to your moves.',
          'Power is based on a simple rule: you must always be aware of what you are revealing or concealing.',
          'The most important aspect of power is how you make others feel.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.'
        ]
      }
    },
    {
      id: 3,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      coverImage: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A counterintuitive approach to living a good life. A book that challenges conventional wisdom about happiness and success.',
      amazonLink: 'https://www.amazon.fr/dp/0062457713/?tag=moncodeaff',
      quotes: {
        'Core Values': [
          'Life is essentially an endless series of problems. The solution to one problem is merely the creation of another.',
          'Happiness comes from solving problems.',
          'Unhealthy values create unhealthy problems.',
          'The key to a good life is not giving a f*ck about more; it\'s giving a f*ck about less, giving a f*ck about only what is true and immediate and important.',
          'The desire for more positive experience is itself a negative experience.',
          'The acceptance of negative experience is itself a positive experience.',
          'The more you try to be certain about something, the more uncertain and insecure you will feel.',
          'The more you try to be perfect, the more you will feel imperfect.',
          'The more you try to be happy, the more you will feel unhappy.',
          'The more you try to be right, the more you will feel wrong.'
        ],
        'Personal Responsibility': [
          'You are responsible for everything in your life, even if it\'s not your fault.',
          'Freedom comes from accepting responsibility.',
          'The power to choose is the power to change.',
          'The more you accept responsibility for your life, the more power you have to change it.',
          'The more you blame others for your problems, the more you give away your power to change.',
          'The more you take responsibility for your problems, the more you gain the power to solve them.',
          'The more you accept that life is not fair, the more you can focus on what you can control.',
          'The more you accept that you are not special, the more you can focus on what makes you unique.',
          'The more you accept that you are not entitled to anything, the more you can focus on what you can earn.',
          'The more you accept that you are not perfect, the more you can focus on what you can improve.'
        ],
        'Authentic Living': [
          'Truth is more important than comfort.',
          'Being authentic means accepting reality, even when it\'s painful.',
          'Happiness requires honesty with yourself.',
          'Personal growth comes from accepting our limitations.',
          'The more you try to be certain about something, the more uncertain and insecure you will feel.',
          'The more you try to be perfect, the more you will feel imperfect.',
          'The more you try to be happy, the more you will feel unhappy.',
          'The more you try to be right, the more you will feel wrong.',
          'The more you try to be certain about something, the more uncertain and insecure you will feel.',
          'The more you try to be perfect, the more you will feel imperfect.'
        ]
      }
    },
    {
      id: 4,
      title: 'Die with Zero',
      author: 'Bill Perkins',
      coverImage: 'https://m.media-amazon.com/images/I/81QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A revolutionary guide to optimizing your life by spending your money and time wisely. Learn how to maximize your life experiences and die with zero regrets.',
      amazonLink: 'https://www.amazon.fr/dp/0358099765/?tag=moncodeaff',
      quotes: {
        'Life Optimization': [
          'The goal is not to die with the most money, but to die with the most life experiences.',
          'You can\'t take it with you, so spend it while you can enjoy it.',
          'Life is not about accumulating wealth, it\'s about accumulating experiences.',
          'The best time to spend money is when you can still enjoy it.',
          'Don\'t wait until you\'re too old to enjoy your wealth.',
          'Money is a tool for living, not a goal in itself.',
          'The richest person is not the one who has the most, but the one who needs the least.',
          'Life experiences compound over time, just like money.',
          'The earlier you start spending on experiences, the more value you get.',
          'Your time and energy are your most valuable assets.'
        ],
        'Timing and Planning': [
          'The key is to spend your money at the right time in your life.',
          'Don\'t save so much that you can\'t enjoy life now.',
          'Balance saving for the future with living in the present.',
          'The best time to travel is when you\'re young and healthy.',
          'Don\'t postpone happiness until retirement.',
          'Life is unpredictable, so enjoy it while you can.',
          'The perfect time to start living is now.',
          'Don\'t let fear of the future prevent you from living today.',
          'Plan for the future, but don\'t forget to live in the present.',
          'The best investment you can make is in your own happiness.'
        ],
        'Mindset and Philosophy': [
          'Happiness comes from experiences, not possessions.',
          'The purpose of money is to buy freedom and experiences.',
          'Live life on your own terms, not society\'s expectations.',
          'Don\'t let money control your life choices.',
          'The goal is to die with zero regrets, not zero dollars.',
          'Life is too short to waste on things that don\'t matter.',
          'Focus on what brings you joy, not what brings you status.',
          'The best life is one well-lived, not one well-saved.',
          'Don\'t sacrifice your present happiness for future security.',
          'The richest life is one filled with meaningful experiences.'
        ]
      }
    }
  ];

  const toggleQuotes = (bookId: number) => {
    setExpandedBookId(expandedBookId === bookId ? null : bookId);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navigation Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveSection('books')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'books'
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Books
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'about'
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeSection === 'contact'
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeSection === 'books' && (
          <div className="space-y-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={book.coverImage}
                      alt={`${book.title} cover`}
                      width={192}
                      height={288}
                      className="w-48 h-72 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{book.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">by {book.author}</p>
                    <div className="flex items-center mb-4">
                      {[...Array(book.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4">{book.description}</p>
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Buy on Amazon
                    </a>
                    <button
                      onClick={() => toggleQuotes(book.id)}
                      className="ml-4 inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
                    >
                      {expandedBookId === book.id ? 'Hide Quotes' : 'Show Quotes'}
                    </button>
                    {expandedBookId === book.id && (
                      <div className="mt-6 space-y-6">
                        {Object.entries(book.quotes).map(([theme, quotes]) => (
                          <div key={theme} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold text-blue-600 mb-3">{theme}</h3>
                            <ul className="space-y-2">
                              {quotes.map((quote, index) => (
                                <li key={index} className="text-gray-700 italic">
                                  &ldquo;{quote}&rdquo;
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'about' && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Blog</h2>
            <p className="text-gray-700 mb-4">
              Welcome to our book blog! We are passionate about sharing our favorite books and the valuable insights they offer. Our goal is to help you discover new perspectives and ideas that can enrich your life.
            </p>
            <p className="text-gray-700">
              Each book we feature has been carefully selected for its ability to inspire, educate, and transform. We believe in the power of reading to change lives and hope our recommendations will help you on your journey of personal growth.
            </p>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              We&apos;d love to hear from you! Whether you have book recommendations, questions, or just want to share your thoughts, feel free to reach out.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> contact@bookblog.com
              </p>
              <p className="text-gray-700">
                <strong>Follow us on social media:</strong>
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
