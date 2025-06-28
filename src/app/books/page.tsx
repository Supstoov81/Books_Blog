import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function BooksList() {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Livres</h1>
      <ul className="space-y-6">
        {books.map(book => (
          <li key={book.id} className="border rounded-lg p-4 bg-white shadow">
            <Link href={`/books/${book.id}`}>
              <div className="flex items-center space-x-4">
                <img src={book.coverImage} alt={book.title} className="w-20 h-28 object-cover rounded" />
                <div>
                  <h2 className="text-xl font-semibold">{book.title}</h2>
                  <p className="text-gray-600">par {book.author}</p>
                  <p className="text-gray-700 mt-2">{book.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
} 