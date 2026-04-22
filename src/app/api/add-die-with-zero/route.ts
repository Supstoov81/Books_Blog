import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const book = await prisma.book.create({
    data: {
      title: 'Die with Zero',
      author: 'Bill Perkins',
      coverImage: '/images/die-with-zero.jpg',
      rating: 5,
      description: 'A provocative and liberating guide to getting the most out of your money — and your life. Bill Perkins challenges the conventional wisdom of saving everything for retirement and makes a compelling case for spending intentionally on experiences while you still can.',
      amazonLink: 'https://www.amazon.com/Die-Zero-Getting-Your-Money/dp/0358099765?tag=booksquotes-20',
      analysis: `Die with Zero by Bill Perkins is one of the most contrarian personal finance books ever written. While virtually every financial advisor tells you to save more, spend less, and accumulate as much as possible before retirement, Perkins argues that this conventional wisdom produces a tragic outcome: people dying with millions of dollars they never used, experiences they never had, and a life half-lived in the name of a future that never arrived as imagined.

The book's central insight is that money is not valuable in itself — it is only valuable for what it can be converted into. And the most valuable conversion, Perkins argues, is experiences, which generate what he calls "memory dividends." Unlike physical purchases, which depreciate, experiences appreciate in psychological value over time. A great trip at 40 is still paying returns at 80 in the form of vivid memories, family stories, and a sense of having truly lived.

Perkins introduces the concept of "time buckets" — chunking your life into 5-year windows and identifying which experiences belong in each one. This framework exposes the deep irrationality of deferral: many experiences — climbing mountains, dancing at music festivals, backpacking through remote regions — require physical vitality that peaks in midlife and declines sharply afterward. Saving these for "retirement" is often saving them for a version of yourself who can no longer fully enjoy them.

The book also tackles inheritance and giving. Perkins argues that if you plan to give money to children or causes, doing so when recipients are young and can convert it into transformative experiences creates far more value than leaving an estate to people already in their 50s and 60s.

Die with Zero does not advocate recklessness — Perkins is clear about the need for a financial survival threshold and a cushion for health costs. But beyond that threshold, he makes a rigorous case that optimising for accumulation rather than fulfilment is a miscalibration of what money is actually for. The goal is not a large number in an account at death — it is a full, rich, memory-laden life that used every resource available.`,
      quotes: {
        create: [
          {
            text: 'Your goal should be to die with zero — to use all your resources to live the fullest life you can, rather than to leave a pile of unspent money as evidence that you were too cautious or too busy to live.',
            context: 'The core thesis of the book',
            themes: 'money, life, fulfilment',
            category: 'Core Philosophy',
          },
          {
            text: 'Money is just a tool for converting into experiences. The account balance is not the goal — the experiences that balance could have funded are the goal.',
            context: 'On the purpose of money',
            themes: 'money, experiences, purpose',
            category: 'Core Philosophy',
          },
          {
            text: 'Experiences pay memory dividends for the rest of your life. A great trip at 35 is still generating returns at 75. The same money sitting in a savings account generates nothing until spent.',
            context: 'On memory dividends',
            themes: 'experiences, memories, investment',
            category: 'Experience & Memory',
          },
          {
            text: 'You cannot reclaim time. You can always earn more money. The asymmetry of this should terrify anyone who consistently trades time for deferred money.',
            context: 'On the irreversibility of time',
            themes: 'time, money, regret',
            category: 'Experience & Memory',
          },
          {
            text: 'Most retirees underspend dramatically — not because they are wise, but because they are afraid. Fear of an uncertain future causes them to hoard resources they will never use against problems that will never come.',
            context: 'On the psychology of hoarding',
            themes: 'retirement, fear, spending',
            category: 'Wealth & Timing',
          },
          {
            text: 'The question is not whether you can afford it. The question is whether you will be able to enjoy it as fully in ten years. For most peak experiences, the answer is no.',
            context: 'On time-sensitive experiences',
            themes: 'health, timing, experiences',
            category: 'Wealth & Timing',
          },
          {
            text: 'If you are going to give money to your children, give it when they are young enough to transform it into adventures, opportunities, and memories — not when they are already established and need it least.',
            context: 'On the timing of giving',
            themes: 'inheritance, family, generosity',
            category: 'Giving & Legacy',
          },
          {
            text: 'Dying with a large estate is not success. It is evidence of a miscalibration between what you valued in theory and how you actually lived.',
            context: 'On redefining financial success',
            themes: 'legacy, success, values',
            category: 'Giving & Legacy',
          },
        ],
      },
    },
  });

  return NextResponse.json({ success: true, id: book.id, title: book.title });
}
