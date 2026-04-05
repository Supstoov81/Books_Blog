import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    await prisma.quote.deleteMany({});
    await prisma.book.deleteMany({});

    const books = [
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        coverImage: 'https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg',
        rating: 5,
        description: 'A practical guide to creating good habits and breaking bad ones. An essential book about behavior change.',
        analysis: 'Atomic Habits by James Clear is a comprehensive guide to understanding and implementing habit formation.',
        amazonLink: 'https://www.amazon.com/dp/0735211299/?tag=moncodeaff-20',
        quotes: {
          create: [
            { text: 'You do not rise to the level of your goals. You fall to the level of your systems.', context: 'On the importance of systems over goals', themes: 'systems, goals, habits', category: 'Habit Formation' },
            { text: 'Every action you take is a vote for the type of person you wish to become.', context: 'On identity-based habits', themes: 'identity, habits, self-improvement', category: 'Identity' },
            { text: 'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.', context: 'On identity change', themes: 'identity, change, habits', category: 'Identity' },
            { text: 'Make it obvious, make it attractive, make it easy, make it satisfying.', context: 'The four laws of behavior change', themes: 'behavior, change, habits', category: 'Habit Formation' },
            { text: 'The purpose of setting goals is to win the game. The purpose of building systems is to continue playing the game.', context: 'On systems and goals', themes: 'systems, goals, consistency', category: 'Habit Formation' },
            { text: 'Small changes often appear to make no difference until you cross a critical threshold.', context: 'On the compound effect of habits', themes: 'compound effect, patience, habits', category: 'Growth' },
            { text: 'A habit must be established before it can be improved.', context: 'On the process of habit formation', themes: 'habits, improvement, process', category: 'Habit Formation' },
            { text: 'The more pride you have in a particular aspect of your identity, the more motivated you will be to maintain the habits associated with it.', context: 'On pride and identity', themes: 'pride, identity, motivation', category: 'Identity' },
            { text: 'Habits are the compound interest of self-improvement.', context: 'On the power of habits', themes: 'habits, self-improvement, compound interest', category: 'Growth' },
            { text: 'You get what you repeat.', context: 'On consistency', themes: 'consistency, repetition, habits', category: 'Habit Formation' },
          ]
        }
      },
      {
        title: 'Power',
        author: 'Robert Greene',
        coverImage: '/power.jpg',
        rating: 5,
        description: 'A guide to understanding and wielding power in the modern world.',
        analysis: 'The 48 Laws of Power by Robert Greene is a fascinating exploration of power dynamics throughout history.',
        amazonLink: 'https://www.amazon.com/dp/0140280197/?tag=moncodeaff-20',
        quotes: {
          create: [
            { text: 'Never outshine the master.', context: 'Law 1 on managing up', themes: 'power, hierarchy, strategy', category: 'Power Dynamics' },
            { text: 'Conceal your intentions.', context: 'Law 3 on strategy', themes: 'strategy, deception, power', category: 'Strategy' },
            { text: 'Always say less than necessary.', context: 'Law 4 on words and power', themes: 'communication, power, silence', category: 'Communication' },
            { text: 'So much depends on reputation — guard it with your life.', context: 'Law 5 on reputation', themes: 'reputation, power, influence', category: 'Reputation' },
            { text: 'Court attention at all costs.', context: 'Law 6 on visibility', themes: 'attention, visibility, power', category: 'Influence' },
            { text: 'Get others to do the work for you, but always take the credit.', context: 'Law 7 on leverage', themes: 'leverage, credit, power', category: 'Strategy' },
            { text: 'Make other people come to you — use bait if necessary.', context: 'Law 8 on control', themes: 'control, attraction, power', category: 'Power Dynamics' },
            { text: 'Win through your actions, never through argument.', context: 'Law 9 on demonstration', themes: 'action, argument, power', category: 'Strategy' },
            { text: 'Infection: avoid the unhappy and unlucky.', context: 'Law 10 on associations', themes: 'associations, energy, power', category: 'Relationships' },
            { text: 'Keep others in suspended terror: cultivate an air of unpredictability.', context: 'Law 17 on unpredictability', themes: 'unpredictability, fear, power', category: 'Power Dynamics' },
          ]
        }
      },
      {
        title: "Can't Hurt Me",
        author: 'David Goggins',
        coverImage: '/cant-hurt-me.jpg',
        rating: 5,
        description: 'A powerful story of self-discipline, mental toughness, and overcoming adversity.',
        analysis: "Can't Hurt Me by David Goggins is a powerful memoir and self-help book that chronicles Goggins's transformation from a troubled young man to one of the world's top endurance athletes.",
        amazonLink: 'https://www.amazon.com/dp/1544512287/?tag=moncodeaff-20',
        quotes: {
          create: [
            { text: 'We all have the ability to come from nothing to something.', context: 'On potential and transformation', themes: 'potential, transformation, growth', category: 'Mental Toughness' },
            { text: 'The only way you gain mental toughness is to do things you\'re not happy doing.', context: 'On building resilience', themes: 'mental toughness, discomfort, growth', category: 'Mental Toughness' },
            { text: 'You are stopping you, you are giving up instead of getting hard.', context: 'Self-sabotage and quitting', themes: 'self-sabotage, quitting, mental strength', category: 'Mental Toughness' },
            { text: 'The most important conversations you\'ll ever have are the ones you\'ll have with yourself.', context: 'Self-dialogue and internal communication', themes: 'self-talk, internal dialogue, importance', category: 'Accountability & Discipline' },
          ]
        }
      },
      {
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        coverImage: '/images/How-to-win-friends.png',
        rating: 5,
        description: 'A timeless guide to building relationships, influencing people, and achieving personal and professional success.',
        analysis: 'How to Win Friends and Influence People by Dale Carnegie is a classic self-help book that has helped millions of readers improve their social skills and relationships.',
        amazonLink: 'https://www.amazon.com/dp/0671027034/?tag=moncodeaff',
        quotes: {
          create: [
            { text: 'You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.', context: 'On the power of genuine interest in others', themes: 'friendship, interest, relationships', category: 'Building Relationships' },
            { text: 'Remember that a person\u2019s name is to that person the sweetest sound in any language.', context: 'On the importance of remembering names', themes: 'names, respect, communication', category: 'Communication Skills' },
            { text: 'The only way to get the best of an argument is to avoid it.', context: 'On handling disagreements', themes: 'argument, conflict, resolution', category: 'Conflict Management' },
            { text: 'Talk to someone about themselves and they\u2019ll listen for hours.', context: 'On engaging others in conversation', themes: 'conversation, listening, engagement', category: 'Communication Skills' },
            { text: 'If you want to gather honey, don\u2019t kick over the beehive.', context: 'On criticism and encouragement', themes: 'criticism, encouragement, motivation', category: 'Positive Influence' },
            { text: 'Give honest and sincere appreciation.', context: 'On the value of appreciation', themes: 'appreciation, sincerity, motivation', category: 'Positive Influence' },
            { text: 'Become genuinely interested in other people.', context: 'On building rapport', themes: 'interest, rapport, relationships', category: 'Building Relationships' },
            { text: 'If you are wrong, admit it quickly and emphatically.', context: 'On admitting mistakes', themes: 'mistakes, humility, growth', category: 'Personal Growth' },
            { text: 'Try honestly to see things from the other person\u2019s point of view.', context: 'On empathy and understanding', themes: 'empathy, understanding, perspective', category: 'Empathy' },
            { text: 'Ask questions instead of giving direct orders.', context: 'On leadership and influence', themes: 'leadership, influence, communication', category: 'Leadership' },
          ]
        }
      },
      {
        title: 'The Daily Stoic',
        author: 'Ryan Holiday',
        coverImage: '/images/the-daily-stoic.jpg',
        rating: 5,
        description: '366 meditations on wisdom, perseverance, and the art of living, drawing from the greatest Stoic philosophers.',
        analysis: 'The Daily Stoic by Ryan Holiday and Stephen Hanselman is a collection of 366 daily meditations drawn from the writings of Stoic philosophers such as Marcus Aurelius, Epictetus, and Seneca.',
        amazonLink: 'https://www.amazon.com/dp/0735211736/?tag=moncodeaff',
        quotes: {
          create: [
            { text: 'The obstacle is the way.', context: 'On turning adversity into advantage', themes: 'obstacles, resilience, growth', category: 'Resilience' },
            { text: 'You have power over your mind, not outside events. Realize this, and you will find strength.', context: 'Marcus Aurelius on the locus of control', themes: 'control, mindset, inner strength', category: 'Control & Perception' },
            { text: 'Waste no more time arguing about what a good man should be. Be one.', context: 'Marcus Aurelius on action over debate', themes: 'action, virtue, integrity', category: 'Virtue & Action' },
            { text: 'He who fears death will never do anything worthy of a man who is alive.', context: 'Seneca on fear and courage', themes: 'fear, courage, life', category: 'Courage' },
            { text: 'Make the best use of what is in your power, and take the rest as it happens.', context: 'Epictetus on focus and acceptance', themes: 'focus, acceptance, wisdom', category: 'Control & Perception' },
            { text: 'Seek not the good in external things; seek it in yourself.', context: 'Epictetus on inner virtue', themes: 'virtue, self-reliance, inner peace', category: 'Virtue & Action' },
            { text: 'No man is free who is not master of himself.', context: 'Epictetus on self-discipline', themes: 'freedom, self-discipline, mastery', category: 'Discipline' },
            { text: 'It is not death that a man should fear, but he should fear never beginning to live.', context: 'Marcus Aurelius on living fully', themes: 'life, purpose, fear', category: 'Courage' },
            { text: 'Difficulties strengthen the mind, as labor does the body.', context: 'Seneca on adversity as training', themes: 'adversity, strength, growth', category: 'Resilience' },
            { text: 'First say to yourself what you would be; and then do what you have to do.', context: 'Epictetus on identity and action', themes: 'identity, purpose, action', category: 'Discipline' },
          ]
        }
      },
    ];

    for (const book of books) {
      await prisma.book.create({ data: book });
    }

    return NextResponse.json({ success: true, message: `${books.length} books seeded successfully` });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
