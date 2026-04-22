import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const book = await prisma.book.create({
    data: {
      title: 'The Book of Pook',
      author: 'The Pook',
      coverImage: '/images/the-book-of-pook.jpg',
      rating: 4,
      description: 'A foundational text in the self-improvement space for men, The Book of Pook cuts through the noise of dating advice to deliver a philosophy of masculine development. The core argument: become an exceptional man first, and attraction follows naturally.',
      amazonLink: 'https://www.amazon.com/Book-Pook-Vol-1/dp/B09XXXXXXX?tag=booksquotes-20',
      analysis: `The Book of Pook is a self-published collection of essays, forum posts, and reflections written under the pseudonym "The Pook," originally shared online in the early 2000s before being compiled into book form. Despite its unconventional origins, it has become one of the most-referenced texts in masculine self-development circles, valued not for pickup techniques but for its philosophical depth on what it means to be a man.

The central thesis is deceptively simple: men who focus primarily on attracting women — who make female approval the organising principle of their lives — repel the very thing they seek. Pook calls this the "sickness" — a distorted orientation in which a man's sense of self-worth becomes contingent on external validation, particularly from women. The cure is not a better strategy for approaching women; it is a wholesale reorientation of the self toward purpose, competence, and integrity.

Pook draws heavily on historical literature, philosophy, and observation to build his argument. He invokes the idea that great men throughout history — artists, warriors, builders, thinkers — were not primarily motivated by romantic success. Their magnetism was a side effect of their total commitment to something larger than themselves. The lesson Pook draws is structural: the man with a burning purpose is fundamentally different in his posture, his presence, and his emotional availability from the man who is perpetually seeking approval.

The book also addresses what Pook calls the "nice guy" phenomenon — the man who suppresses his own opinions, preferences, and displeasure in order to avoid conflict and remain likeable. Pook argues this is both strategically counterproductive and, more importantly, a betrayal of the self. Authentic masculinity, in his framing, requires the courage to have convictions, to lead, to disagree, and to accept rejection without collapse.

The Book of Pook is best read not as a dating manual but as a challenge to examine whether your life is oriented around your own values or around the opinions of others. Its lasting influence lies in this philosophical provocation, which remains as relevant as when it was written.`,
      quotes: {
        create: [
          {
            text: 'The man who chases women will never catch them. The man who chases his purpose will find them chasing him.',
            context: 'On the paradox of pursuing approval',
            themes: 'purpose, attraction, mindset',
            category: 'Purpose & Identity',
          },
          {
            text: 'You cannot buy confidence. You cannot fake it for long. You can only build it — one act of courage, one completed goal, one kept promise to yourself at a time.',
            context: 'On authentic confidence',
            themes: 'confidence, self-development, discipline',
            category: 'Purpose & Identity',
          },
          {
            text: 'The nice guy is not nice. He is afraid. His pleasantness is a shield against rejection, a trade offer: "I will not threaten you if you do not reject me." Women sense the transaction and recoil from it.',
            context: 'On the "nice guy" dynamic',
            themes: 'authenticity, approval, fear',
            category: 'Authenticity',
          },
          {
            text: 'Become the man you would respect if you met him. Everything else will follow from that single commitment.',
            context: 'The central principle of the book',
            themes: 'self-respect, identity, growth',
            category: 'Authenticity',
          },
          {
            text: 'A man without a mission is a man waiting for someone else to give his life meaning. No woman, no friendship, no approval can fill that void — only work done in service of something you believe in.',
            context: 'On masculine purpose',
            themes: 'purpose, meaning, self-reliance',
            category: 'Masculine Development',
          },
          {
            text: 'Rejection is not a verdict on your worth. It is information about compatibility. The man who cannot be rejected cannot grow — he has made the avoidance of pain his highest value.',
            context: 'On handling rejection',
            themes: 'rejection, growth, resilience',
            category: 'Masculine Development',
          },
          {
            text: 'Your emotional state should be weather that you create, not weather that happens to you because of how she looked at you this morning.',
            context: 'On emotional self-regulation',
            themes: 'emotions, self-control, independence',
            category: 'Emotional Mastery',
          },
          {
            text: 'The man who needs nothing from the interaction is the freest man in the room. Freedom is attractive. Neediness is suffocating.',
            context: 'On abundance versus scarcity thinking',
            themes: 'abundance, freedom, neediness',
            category: 'Emotional Mastery',
          },
        ],
      },
    },
  });

  return NextResponse.json({ success: true, id: book.id, title: book.title });
}
