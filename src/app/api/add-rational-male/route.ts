import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const exists = await prisma.book.findFirst({ where: { title: 'The Rational Male' } });
    if (exists) return NextResponse.json({ message: 'Already exists', id: exists.id });

    const book = await prisma.book.create({
      data: {
        title: 'The Rational Male',
        author: 'Rollo Tomassi',
        coverImage: '/images/the-rational-male.jpg',
        rating: 5,
        description: 'A foundational guide to understanding intersexual dynamics, male psychology, and building a life of purpose, strength, and authentic confidence.',
        analysis: 'The Rational Male by Rollo Tomassi is one of the most influential and controversial works in the modern masculine self-improvement space. Drawing on evolutionary psychology, behavioural science, and social observation, Tomassi dismantles many of the assumptions men are taught about attraction, relationships, and identity.\n\nAt its core, the book argues that men and women are biologically and psychologically distinct, and that ignoring these differences leads to frustration and failure in both personal and professional spheres. Tomassi introduces the concept of the sexual market place — a framework for understanding how attraction, value, and selection work across genders — and argues that a man who understands these dynamics is better equipped to build fulfilling, authentic relationships.\n\nA central theme is the importance of male frame: the idea that a man must develop a strong, self-defined identity rooted in his own values, mission, and standards — not in the approval of others. Men who abandon their frame in pursuit of validation, Tomassi argues, undermine their own long-term success and satisfaction.\n\nThe book also addresses the concept of the "Blue Pill / Red Pill" metaphor — the difference between comfortable social conditioning and a clearer, sometimes uncomfortable understanding of how incentives and biology shape human behaviour. Tomassi emphasises that this clarity should not lead to cynicism, but to intentional, values-driven action.\n\nWhether readers agree with every thesis or not, The Rational Male delivers a rigorous, thought-provoking challenge to conventional wisdom about masculinity, purpose, and the nature of attraction — making it essential reading for any man committed to honest self-examination.',
        amazonLink: 'https://www.amazon.com/dp/1548580120/?tag=moncodeaff',
        quotes: {
          create: [
            {
              text: 'The man who understands his own nature, and the nature of others, is the freest man alive.',
              context: 'On self-knowledge and freedom',
              themes: 'self-knowledge, freedom, masculinity',
              category: 'Self-Mastery',
            },
            {
              text: 'A man with options has power. A man without options has none.',
              context: 'On abundance mentality and leverage',
              themes: 'options, power, abundance',
              category: 'Power & Options',
            },
            {
              text: 'Your mission, your purpose, and your passion should be the most important things in your life. Let a woman inspire you, not define you.',
              context: 'On male purpose and identity',
              themes: 'purpose, mission, identity',
              category: 'Purpose & Mission',
            },
            {
              text: 'Never make a woman your mental point of origin.',
              context: 'On maintaining internal frame and self-priority',
              themes: 'frame, self-priority, independence',
              category: 'Frame & Identity',
            },
            {
              text: 'Vulnerability is not a strength to be displayed; it is a liability to be managed.',
              context: 'On emotional strategy and social dynamics',
              themes: 'vulnerability, strategy, social dynamics',
              category: 'Social Dynamics',
            },
            {
              text: 'Men are the true romantics, and it is their idealism that makes them susceptible to manipulation.',
              context: 'On the male romantic nature and its risks',
              themes: 'romance, idealism, awareness',
              category: 'Awareness',
            },
            {
              text: 'You cannot negotiate genuine attraction. It is either present or it is not — and it is never the result of convincing.',
              context: 'On the nature of attraction',
              themes: 'attraction, authenticity, confidence',
              category: 'Attraction',
            },
            {
              text: 'Opportunity is missed by most men because it is dressed in overalls and looks like work.',
              context: 'On discipline and long-term investment in the self',
              themes: 'opportunity, discipline, self-investment',
              category: 'Self-Mastery',
            },
            {
              text: 'Your value is determined by what you do, not what you feel.',
              context: 'On action versus emotion in building real worth',
              themes: 'value, action, discipline',
              category: 'Purpose & Mission',
            },
            {
              text: 'The red pill is not a destination. It is a lens — a way of seeing that demands constant honesty.',
              context: 'On the ongoing process of self-awareness',
              themes: 'awareness, honesty, growth',
              category: 'Awareness',
            },
          ],
        },
      },
    });

    return NextResponse.json({ success: true, message: 'The Rational Male added', id: book.id });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
