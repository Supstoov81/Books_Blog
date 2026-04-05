import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const books = await prisma.book.findMany({ select: { id: true, updatedAt: true } });

  const bookUrls = books.map((book) => ({
    url: `https://books-quotes.com/books/${book.id}`,
    lastModified: book.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://books-quotes.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...bookUrls,
  ];
}
