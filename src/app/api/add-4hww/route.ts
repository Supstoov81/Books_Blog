import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const book = await prisma.book.create({
    data: {
      title: 'The 4-Hour Workweek',
      author: 'Timothy Ferriss',
      coverImage: '/images/The-4-hours-workweek.jpg',
      rating: 5,
      description: 'The #1 New York Times bestseller that taught a generation how to escape the 9-5, live anywhere, and join the "New Rich." Timothy Ferriss shares his proven system for working smarter, automating income, and designing a life of freedom on your own terms.',
      amazonLink: 'https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357?tag=booksquotes-20',
      analysis: `The 4-Hour Workweek by Timothy Ferriss is one of the most influential — and most misunderstood — business books of the 21st century. Published in 2007, it did not teach people to work four hours a week as a literal target. It taught them to question every assumption they had about work, time, money, and retirement — and then to redesign their life around the answers.

Ferriss's central argument is that the conventional life script — work hard for 40 years, defer all enjoyment, retire at 65 — is a fantasy that leaves people neither fulfilled nor financially secure. He proposes an alternative: the "New Rich," people who use time and mobility rather than net worth as the measure of wealth, and who create automated income streams that fund a life lived on their own schedule.

The book is structured around the DEAL framework:

**Definition**: Redefine success on your own terms. Most people pursue someone else's version of success. Ferriss asks readers to calculate their "target monthly income" — the actual cost of their dream lifestyle — and discover it is usually far lower than imagined.

**Elimination**: Apply the 80/20 principle and Parkinson's Law to radically cut what you do. 80% of results come from 20% of efforts. Work expands to fill the time available — so compress it. Eliminate email addiction, unnecessary meetings, and low-value tasks without apology.

**Automation**: Create a "muse" — a product or business that generates income without your constant involvement. Ferriss walks through outsourcing, product creation, fulfilment automation, and how to test ideas cheaply before building anything.

**Liberation**: Negotiate remote work, take mini-retirements, and use geographic arbitrage — earn in strong currencies, live in places where the cost of living is low. Travel slowly, immerse in cultures, and live the retirement you were planning to defer.

Critics have fairly noted that some of Ferriss's examples are optimistic and that the lifestyle he describes requires significant upfront work and risk tolerance. But the book's enduring value lies not in its specific tactics — some of which are dated — but in its permission structure: you are allowed to design your own life, your career does not have to look like your parents', and the default path is a choice, not a necessity.

The 4-Hour Workweek gave millions of readers the vocabulary and the courage to ask a question they had never been taught to ask: what would I do if I weren't afraid?`,
      quotes: {
        create: [
          {
            text: 'Someday is a disease that will take your dreams to the grave with you. If it is important to you and you want to do it eventually, just do it and correct course along the way.',
            context: 'On the danger of deferral',
            themes: 'action, procrastination, dreams',
            category: 'Lifestyle Design',
          },
          {
            text: 'The question you should be asking is not "What do I want?" but "What would excite me?" Excitement is the more practical synonym for passion.',
            context: 'On finding meaningful work',
            themes: 'passion, excitement, purpose',
            category: 'Lifestyle Design',
          },
          {
            text: 'Being busy is a form of laziness — lazy thinking and indiscriminate action. Being overwhelmed is often as unproductive as doing nothing.',
            context: 'On busyness vs effectiveness',
            themes: 'productivity, focus, effectiveness',
            category: 'Elimination & Focus',
          },
          {
            text: 'If you are insecure, guess what? The rest of the world is too. Do not overestimate the competition and underestimate yourself.',
            context: 'On fear and self-doubt',
            themes: 'confidence, fear, competition',
            category: 'Elimination & Focus',
          },
          {
            text: 'The fishing is best where the fewest go, and the collective insecurity of the world makes it easy for people to hit home runs while everyone else is aiming for base hits.',
            context: 'On taking bold, uncommon action',
            themes: 'boldness, risk, opportunity',
            category: 'Automation & Income',
          },
          {
            text: 'Money is multiplied in practical value depending on the number of W\'s you control in your life: what you do, when you do it, where you do it, and with whom you do it.',
            context: 'On the four freedoms of the New Rich',
            themes: 'freedom, money, autonomy',
            category: 'Automation & Income',
          },
          {
            text: 'A person\'s success in life can usually be measured by the number of uncomfortable conversations they are willing to have.',
            context: 'On courage and communication',
            themes: 'courage, communication, success',
            category: 'Liberation',
          },
          {
            text: 'The goal is not to simply eliminate the bad, but to pursue and experience the best in the world. It is not enough to remove the negative — you must actively fill your time with what matters most.',
            context: 'On replacing bad habits with meaningful experiences',
            themes: 'purpose, experiences, fulfilment',
            category: 'Liberation',
          },
        ],
      },
    },
  });

  return NextResponse.json({ success: true, id: book.id, title: book.title });
}
