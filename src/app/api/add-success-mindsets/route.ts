import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const book = await prisma.book.create({
    data: {
      title: 'Success Mindsets',
      author: 'Ryan Gottfredson',
      coverImage: '/images/success-mindsets.jpg',
      rating: 5,
      description: 'A USA Today bestseller that reveals how your mindsets — not your skills, knowledge, or experience — are the primary drivers of your success. Ryan Gottfredson identifies four critical mindset dimensions and provides a science-backed roadmap for upgrading each one.',
      amazonLink: 'https://www.amazon.com/Success-Mindsets-Unlocking-Greater-Leadership/dp/1400216303?tag=booksquotes-20',
      analysis: `Success Mindsets by Ryan Gottfredson is built on a deceptively simple but transformative premise: your mindsets — the mental lenses through which you interpret the world — determine your behaviour far more powerfully than your intelligence, experience, or skillset. And unlike IQ or personality, mindsets are fully changeable with the right approach.

Gottfredson, an organisational psychologist and leadership consultant, synthesises decades of research across psychology, neuroscience, and organisational behaviour to identify four critical mindset dimensions that govern performance in life, work, and leadership:

**1. Open vs. Closed Mindset** — Do you seek out perspectives that challenge yours, or do you defend your existing beliefs? Open-minded people learn faster, make better decisions, and are far more effective in complex environments.

**2. Growth vs. Fixed Mindset** — (Building on Carol Dweck's seminal research) Do you believe your abilities are developable through effort, or fixed at birth? Growth-mindset people embrace challenge, persist through failure, and consistently outperform fixed-mindset peers over time.

**3. Promotion vs. Prevention Mindset** — Are you focused on achieving gains and possibilities (promotion), or avoiding losses and threats (prevention)? Promotion-focused people are more creative, entrepreneurial, and motivated. Prevention-focused people are more careful but often paralysed by risk.

**4. Outward vs. Inward Mindset** — Do you see others as full human beings with their own needs and goals (outward), or primarily as instruments for your own purposes (inward)? Outward-mindset leaders build trust, collaboration, and loyalty; inward-mindset leaders breed resentment and dysfunction.

What makes Gottfredson's contribution original is his insistence that all four dimensions interact — and that a deficiency in one undermines the others. A leader with a growth mindset but an inward orientation will develop themselves at the expense of those around them. An open-minded person with a prevention focus will hear new ideas but never act on them.

The book is equally valuable as a self-development guide and a leadership manual. Gottfredson provides assessments, frameworks, and practical exercises for each dimension, making mindset change concrete rather than aspirational. Success Mindsets ultimately argues that the gap between where you are and where you want to be is almost never a skill gap — it is a mindset gap.`,
      quotes: {
        create: [
          {
            text: 'Our mindsets are the lenses through which we see the world. They determine what we notice, how we interpret it, and ultimately how we respond. Change your mindsets and you change everything downstream.',
            context: 'On why mindsets matter more than skills',
            themes: 'mindset, perception, behaviour',
            category: 'The Power of Mindsets',
          },
          {
            text: 'Most people believe they have good values. Far fewer have the mindsets that allow those values to actually show up in their behaviour. The gap is always a mindset problem.',
            context: 'On the gap between values and behaviour',
            themes: 'values, mindset, integrity',
            category: 'The Power of Mindsets',
          },
          {
            text: 'Open-minded people do not just tolerate different perspectives — they actively seek them. They know that the view they currently hold is incomplete, and they treat contradiction as information rather than threat.',
            context: 'On the open mindset',
            themes: 'open-mindedness, learning, growth',
            category: 'Open vs Closed Mindset',
          },
          {
            text: 'A closed mindset is invisible to the person who has it. You cannot see the cage you are standing in. That is why honest feedback and deliberate disconfirmation are not optional — they are survival tools for the mind.',
            context: 'On the blindness of closed mindsets',
            themes: 'self-awareness, feedback, blind spots',
            category: 'Open vs Closed Mindset',
          },
          {
            text: 'Promotion-focused people ask: what can I achieve here? Prevention-focused people ask: what could go wrong here? Both questions are useful, but the first one leads to progress and the second one leads to paralysis.',
            context: 'On promotion versus prevention focus',
            themes: 'goals, risk, motivation',
            category: 'Promotion vs Prevention',
          },
          {
            text: 'An outward mindset is not about being selfless. It is about being accurate. Other people have goals, challenges, and needs that are just as real as yours. Ignoring that is not just unkind — it is strategically foolish.',
            context: 'On the outward mindset in leadership',
            themes: 'leadership, empathy, collaboration',
            category: 'Outward vs Inward Mindset',
          },
          {
            text: 'The leader\'s mindset becomes the team\'s ceiling. People with inward-mindset leaders learn to protect themselves, not to perform. People with outward-mindset leaders learn to contribute, not to compete.',
            context: 'On how leadership mindsets shape team culture',
            themes: 'leadership, culture, teams',
            category: 'Outward vs Inward Mindset',
          },
          {
            text: 'You will not feel your mindset changing. You will see it — in the questions you ask, the feedback you seek, the risks you take, the way you treat the people around you. Behaviour is the only honest mirror.',
            context: 'On measuring mindset change',
            themes: 'growth, behaviour, self-awareness',
            category: 'Growth Mindset',
          },
        ],
      },
    },
  });

  return NextResponse.json({ success: true, id: book.id, title: book.title });
}
