import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const book = await prisma.book.findUnique({ where: { id: Number(id) } });
  if (!book) return {};

  const title = `${book.title} – Quotes, Analysis & Tips`;
  const description = `Discover the best quotes from "${book.title}" by ${book.author}. In-depth analysis, key lessons, and 10 practical tips to apply today.`;

  return {
    title,
    description,
    alternates: { canonical: `https://books-quotes.com/books/${id}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://books-quotes.com/books/${id}`,
      siteName: 'Books Quotes',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const books = await prisma.book.findMany({ select: { id: true } });
  return books.map((b) => ({ id: String(b.id) }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const book = await prisma.book.findUnique({
    where: { id: Number(id) },
    include: { quotes: true },
  });

  if (!book) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": book.title,
    "author": { "@type": "Person", "name": book.author },
    "description": book.description,
    "url": `https://books-quotes.com/books/${id}`,
    "image": book.coverImage.startsWith('http') ? book.coverImage : `https://books-quotes.com${book.coverImage}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": book.rating,
      "bestRating": 5,
      "ratingCount": 1
    },
    ...(book.amazonLink && {
      "offers": {
        "@type": "Offer",
        "url": book.amazonLink,
        "seller": { "@type": "Organization", "name": "Amazon" }
      }
    })
  };

  const groupedQuotes = book.quotes.reduce<Record<string, typeof book.quotes>>((acc, q) => {
    acc[q.category] = acc[q.category] || [];
    acc[q.category].push(q);
    return acc;
  }, {});

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <span>{book.title}</span>
        </nav>

        <div className="flex items-start gap-6 mb-8">
          <Image
            src={book.coverImage}
            alt={`${book.title} cover`}
            width={160}
            height={240}
            className="rounded shadow-md flex-shrink-0"
          />
          <div>
            <h1 className="text-3xl font-bold mb-1">{book.title}</h1>
            <p className="text-lg text-gray-600 mb-2">by {book.author}</p>
            <div className="flex mb-4">
              {[...Array(book.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">{book.description}</p>
            {book.amazonLink && (
              <a
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
              >
                Buy on Amazon →
              </a>
            )}
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">In-Depth Analysis</h2>
          <article className="prose prose-lg text-gray-700 leading-relaxed">
            {book.analysis.split('\n').map((p, i) => p.trim() && (
              <p key={i} className="mb-3">{p}</p>
            ))}
          </article>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Key Quotes by Category</h2>
          {Object.entries(groupedQuotes).map(([category, quotes]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">{category}</h3>
              <ul className="space-y-4">
                {quotes.map((quote) => (
                  <li key={quote.id} className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-3 rounded-r">
                    <blockquote className="italic text-gray-800 text-lg mb-1">
                      &ldquo;{quote.text}&rdquo;
                    </blockquote>
                    <p className="text-sm text-gray-500">{quote.context}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
