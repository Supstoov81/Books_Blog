import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const book = await prisma.book.create({
    data: {
      title: 'How Bad Do You Want It?',
      author: 'Matt Fitzgerald',
      coverImage: '/images/how-bad-do-you-want-it.jpg',
      rating: 5,
      description: 'A groundbreaking exploration of the psychology of athletic performance. Matt Fitzgerald reveals how the mind — not the body — is the true limiter of endurance, drawing on cutting-edge sports science and riveting stories of elite athletes who mastered their perception of effort to achieve the extraordinary.',
      amazonLink: 'https://www.amazon.com/How-Bad-Do-You-Want/dp/1937715418?tag=booksquotes-20',
      analysis: `How Bad Do You Want It? by Matt Fitzgerald is built on a single, paradigm-shifting insight: in endurance sports, the brain gives up before the body does. Fitzgerald introduces the psychobiological model of performance, developed by sport scientist Samuele Marcora, which holds that the true governor of performance is perceived effort — how hard an activity feels — rather than any absolute physiological limit.

Through twelve vivid case studies of elite athletes — from Ironman champions to Olympic runners to Tour de France cyclists — Fitzgerald shows how the world's best performers share one distinguishing ability: they can tolerate and even embrace extreme levels of perceived effort that would cause ordinary athletes to slow down or stop. The book's central argument is that this capacity is trainable, just like cardiovascular fitness.

Each chapter dissects a defining race or moment of athletic crisis, revealing the specific psychological skill the athlete deployed: coping focus, self-regulation under emotion, competitive instinct, or the ability to reframe suffering as a signal of progress rather than danger. Fitzgerald draws on neuroscience, psychology, and physiology to explain why these strategies work at the biological level — the brain continuously monitors the body's state and constructs the sensation of effort as a protective signal, not an accurate readout of remaining capacity.

The practical implication is profound: mental fitness is not a vague concept but a specific, measurable, and improvable skill set. Athletes who train their minds — through deliberate exposure to discomfort, emotional regulation practice, and psyching-up techniques — gain a genuine competitive advantage that no training plan captures. For any endurance athlete or anyone pursuing a hard goal, this book reframes the question from "How fit am I?" to "How much am I willing to feel?"`,
      quotes: {
        create: [
          {
            text: 'The brain is always trying to protect the body from harm. It interprets signals of fatigue and sends the conscious mind feelings of discomfort to get you to slow down or stop. But those signals are conservative — you almost always have more left than your brain is willing to admit.',
            context: 'On the psychobiological model of fatigue',
            themes: 'mind, fatigue, performance',
            category: 'Psychology of Effort',
          },
          {
            text: 'Champions are not born with a higher pain tolerance. They are trained to perceive effort differently — to feel the same sensations as ordinary athletes but to attach a different meaning to them.',
            context: 'On the trainability of mental toughness',
            themes: 'elite performance, perception, training',
            category: 'Psychology of Effort',
          },
          {
            text: 'The question is not how much it hurts. The question is what you do with the hurt. Every great performance is a story of suffering managed, not suffering avoided.',
            context: 'On coping versus dissociation strategies',
            themes: 'suffering, resilience, racing',
            category: 'Mental Toughness',
          },
          {
            text: 'Motivation is not a feeling you wait for. It is a muscle you build through repeated acts of doing things you do not feel like doing.',
            context: 'On building mental fitness through deliberate discomfort',
            themes: 'motivation, discipline, habits',
            category: 'Mental Toughness',
          },
          {
            text: 'The athletes who perform best under pressure are not those who feel no anxiety — they are those who have learned to perform despite it, and who eventually learn to use it.',
            context: 'On emotional regulation in competition',
            themes: 'pressure, anxiety, competition',
            category: 'Competition & Pressure',
          },
          {
            text: 'There is a moment in every hard effort when quitting seems completely reasonable. The athlete who wins is simply the one who has practised, more than anyone else, saying no to that moment.',
            context: 'On the decisive moment in endurance',
            themes: 'grit, quitting, training',
            category: 'Competition & Pressure',
          },
          {
            text: 'The brain does not distinguish between physical pain and emotional suffering as cleanly as we imagine. Loneliness, doubt, and fear cost you pace just as surely as tired legs do.',
            context: 'On the connection between psychology and physiology',
            themes: 'neuroscience, emotion, performance',
            category: 'Mind-Body Connection',
          },
          {
            text: 'Self-belief is not a prerequisite for a great performance — it is often the result of one. Act first; confidence follows the evidence of your own capability.',
            context: 'On confidence and action',
            themes: 'confidence, belief, action',
            category: 'Mind-Body Connection',
          },
        ],
      },
    },
  });

  return NextResponse.json({ success: true, id: book.id, title: book.title });
}
