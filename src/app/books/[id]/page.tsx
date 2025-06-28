import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const book = await prisma.book.findUnique({
    where: { id: Number(id) },
    include: { quotes: true },
  });

  if (!book) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <h2 className="text-lg text-gray-600 mb-4">par {book.author}</h2>
      <Image src={book.coverImage} alt={book.title} width={160} height={240} className="rounded mb-4" />
      <p className="mb-6">{book.description}</p>
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Analyse approfondie</h3>
        <article className="prose prose-lg" dangerouslySetInnerHTML={{ __html: book.analysis.replace(/\n/g, '<br/>') }} />
      </section>
      <section>
        <h3 className="text-2xl font-semibold mb-2">Citations</h3>
        <ul className="space-y-4">
          {book.quotes.map(quote => (
            <li key={quote.id} className="border-l-4 border-blue-500 pl-4">
              <blockquote className="italic text-lg">&ldquo;{quote.text}&rdquo;</blockquote>
              <div className="text-sm text-gray-600">
                <div><strong>Contexte :</strong> {quote.context}</div>
                <div><strong>Thèmes :</strong> {quote.themes}</div>
                <div><strong>Catégorie :</strong> {quote.category}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
} 