import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const book = await prisma.book.create({
    data: {
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      coverImage: '/images/rich-dad-poor-dad.jpg',
      rating: 5,
      description: 'The #1 personal finance book of all time. Robert Kiyosaki shares the lessons he learned from his two "dads" — his biological father (Poor Dad) and the father of his best friend (Rich Dad) — to reveal why the rich get richer and how anyone can build lasting wealth by thinking differently about money.',
      amazonLink: 'https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194?tag=booksquotes-20',
      analysis: `Rich Dad Poor Dad by Robert Kiyosaki is the best-selling personal finance book in history, and its longevity is no accident. Published in 1997, it introduced millions of readers to a framework for thinking about money that was radically different from anything taught in schools or passed down through conventional middle-class culture.

The book is structured around a contrast between two father figures. The "Poor Dad" — Kiyosaki's biological father — was highly educated, worked hard, climbed the career ladder, and yet remained financially insecure his entire life. The "Rich Dad" — the father of Kiyosaki's childhood friend — had little formal education but built substantial wealth through business ownership and investment. The core question the book poses: why do so many educated, hard-working people remain financially vulnerable, while others with fewer credentials accumulate great wealth?

Kiyosaki's answer is that the financial system rewards owners and investors, not workers. Employees trade time for money and pay the highest tax rates. Business owners and investors earn in ways that can be structured to minimise tax and that continue even when they are not working. The difference is not income — it is the type of income and what is done with it.

The most memorable and practically useful concept in the book is the distinction between assets and liabilities. Kiyosaki defines these behaviourally rather than technically: an asset puts money into your pocket each month; a liability takes money out. By this definition, a personal home is typically a liability, not an asset, because it generates expenses rather than income. The rich spend their careers acquiring assets; the middle class spend their careers acquiring liabilities they mistake for assets.

Rich Dad Poor Dad is also a critique of financial passivity — the habit of delegating all money decisions to employers, banks, and governments. Kiyosaki argues for active financial literacy: understanding tax law, reading financial statements, and deliberately building an "asset column" of income-generating holdings alongside any day job.

The book has attracted criticism for being light on specific tactical advice, and some of its real estate examples are optimistic. But its enduring value lies in the mindset shift it catalyses: from thinking about money as something you earn to something you deploy, and from seeing yourself as an employee to seeing yourself as the architect of your own financial life.`,
      quotes: {
        create: [
          {
            text: 'The poor and the middle class work for money. The rich have money work for them.',
            context: 'The central distinction between financial mindsets',
            themes: 'wealth, mindset, passive income',
            category: 'Wealth Mindset',
          },
          {
            text: 'It is not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.',
            context: 'On building lasting wealth',
            themes: 'savings, investment, legacy',
            category: 'Wealth Mindset',
          },
          {
            text: 'An asset puts money in my pocket. A liability takes money out of my pocket. Rich people acquire assets. The poor and middle class acquire liabilities, but they think they are assets.',
            context: 'The most important financial distinction in the book',
            themes: 'assets, liabilities, financial literacy',
            category: 'Assets vs Liabilities',
          },
          {
            text: 'Your house is not an asset. It is a liability. If you stop working, does it keep paying you? No. It keeps taking from you.',
            context: 'On the misconception of homeownership as wealth',
            themes: 'real estate, assets, liabilities',
            category: 'Assets vs Liabilities',
          },
          {
            text: 'Most people fail to realise that in life, it is not how much money you make — it is how much money you keep.',
            context: 'On spending habits and retention of wealth',
            themes: 'spending, saving, discipline',
            category: 'Financial Habits',
          },
          {
            text: 'The rich buy luxuries last. The poor and middle class buy luxuries first. That is why they stay poor.',
            context: 'On the order of financial priorities',
            themes: 'discipline, spending, wealth',
            category: 'Financial Habits',
          },
          {
            text: 'Job security meant everything to my educated dad. Learning meant everything to my rich dad. My educated dad thought love of money was the root of all evil. My rich dad thought the lack of money was the root of all evil.',
            context: 'Contrasting the two fathers\' philosophies',
            themes: 'security, learning, money beliefs',
            category: 'Education & Mindset',
          },
          {
            text: 'Workers work hard enough to not be fired, and owners pay just enough so that workers will not quit. If you study how money works and make it work for you, you break free of this cycle.',
            context: 'On the employee-employer dynamic',
            themes: 'employment, freedom, investment',
            category: 'Education & Mindset',
          },
        ],
      },
    },
  });

  return NextResponse.json({ success: true, id: book.id, title: book.title });
}
