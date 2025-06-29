const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Clear existing data
  await prisma.book.deleteMany({});
  await prisma.quote.deleteMany({});
  await prisma.tip.deleteMany({});

  // Create books with their quotes and tips
  const books = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      coverImage: 'https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A practical guide to creating good habits and breaking bad ones. An essential book about behavior change.',
      amazonLink: 'https://www.amazon.com/dp/0735211299/?tag=moncodeaff-20',
      tips: [
        'Start with the 2-minute rule: Make new habits so small they take less than 2 minutes to complete',
        'Use habit stacking: Link new habits to existing ones (e.g., "After I brush my teeth, I will read for 10 minutes")',
        'Make good habits obvious: Place visual cues in your environment (put gym clothes next to your bed)',
        'Make bad habits invisible: Remove triggers from your environment (hide your phone in another room)',
        'Use implementation intentions: Plan exactly when and where you will perform your habit',
        'Track your habits: Use a habit tracker to visualize your progress and maintain motivation',
        'Never miss twice: If you miss a habit, get back on track immediately the next day',
        'Focus on identity change: Ask yourself "What would a [healthy person/reader/athlete] do?"',
        'Use temptation bundling: Pair something you want to do with something you need to do',
        'Make habits satisfying: Add immediate rewards to reinforce good behavior'
      ],
      quotes: {
        'Core Principles': [
          'You do not rise to the level of your goals, you fall to the level of your systems.',
          'Small habits make a big difference.',
          'Change is not an event, it\'s a process.',
          'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.',
          'Every action you take is a vote for the type of person you wish to become.',
          'The best way to change your habits is to focus not on what you want to achieve, but on who you want to become.',
          'Habits are the compound interest of self-improvement.',
          'The quality of your life is a measure of the quality of your habits.',
          'You do not rise to the level of your goals, you fall to the level of your systems.',
          'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.'
        ],
        'Identity and Habits': [
          'Habits are the compound interest of self-improvement.',
          'Every action you take is a vote for the type of person you wish to become.',
          'The best way to change your habits is to focus not on what you want to achieve, but on who you want to become.',
          'Your identity emerges out of your habits.',
          'The more you repeat a behavior, the more you reinforce the identity associated with that behavior.',
          'True behavior change is identity change.',
          'The goal is not to read a book, the goal is to become a reader.',
          'The goal is not to run a marathon, the goal is to become a runner.',
          'The goal is not to play an instrument, the goal is to become a musician.',
          'The goal is not to learn a language, the goal is to become bilingual.'
        ],
        'Practical Application': [
          'Habits are the compound interest of self-improvement.',
          'You do not rise to the level of your goals, you fall to the level of your systems.',
          'The quality of your life is a measure of the quality of your habits.',
          'Habits are like the atoms of your life. Each one is a fundamental unit that contributes to your overall improvement.',
          'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.',
          'Every action you take is a vote for the type of person you wish to become.',
          'The best way to change your habits is to focus not on what you want to achieve, but on who you want to become.',
          'Habits are the compound interest of self-improvement.',
          'The quality of your life is a measure of the quality of your habits.',
          'You do not rise to the level of your goals, you fall to the level of your systems.'
        ]
      }
    },
    {
      title: 'Power',
      author: 'Robert Greene',
      coverImage: 'https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A book about the strategies and principles of power and influence.',
      amazonLink: 'https://www.amazon.com/dp/1861972784/?tag=moncodeaff',
      tips: [
        'Master your emotions: Never show anger or frustration in professional settings',
        'Control information: Be strategic about what you reveal and what you keep private',
        'Build a network of allies: Cultivate relationships with people who can help you advance',
        'Study your opponents: Understand their weaknesses and motivations',
        'Use timing to your advantage: Wait for the right moment to make your move',
        'Create dependency: Make others need you for something important',
        'Use flattery strategically: Compliment people genuinely but with purpose',
        'Avoid unnecessary conflicts: Pick your battles wisely',
        'Maintain mystery: Don\'t reveal everything about yourself at once',
        'Always have a backup plan: Never put all your eggs in one basket'
      ],
      quotes: {
        'Core Principles': [
          'Power is the ability to influence others and get what you want.',
          'The best way to win is to never play the other person\'s game.',
          'Power is a matter of perception.',
          'The most important skill in gaining power is the ability to master your emotions.',
          'Power is not what you have, but what others think you have.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.',
          'The essence of power is the ability to keep the initiative, to get others to react to your moves, to keep your opponent responding to you.',
          'Power is based on a simple rule: you must always be aware of what you are revealing or concealing.',
          'The most important aspect of power is how you make others feel.'
        ],
        'Strategic Thinking': [
          'Never show your anger, it is a weapon you must keep secret.',
          'Power is like a chess game: each piece has its role and value.',
          'The best way to win is to make the other person lose without realizing it.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.',
          'The essence of power is the ability to keep the initiative, to get others to react to your moves.',
          'Power is based on a simple rule: you must always be aware of what you are revealing or concealing.',
          'The most important aspect of power is how you make others feel.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.'
        ],
        'Practical Tactics': [
          'Power is a matter of timing and patience.',
          'Never fight against an enemy stronger than you.',
          'Power is a matter of information control.',
          'The best way to win is to make the other person think they have won.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.',
          'Power is a social game. To learn and master it, you must develop the ability to study and understand people.',
          'The essence of power is the ability to keep the initiative, to get others to react to your moves.',
          'Power is based on a simple rule: you must always be aware of what you are revealing or concealing.',
          'The most important aspect of power is how you make others feel.',
          'The key to power is the ability to judge who is best able to further your interests in all situations.'
        ]
      }
    },
    {
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      coverImage: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A counterintuitive approach to living a good life. A book that challenges conventional wisdom about happiness and success.',
      amazonLink: 'https://www.amazon.com/dp/0062457713/?tag=moncodeaff',
      tips: [
        'Choose your problems wisely: Not all problems are worth solving',
        'Accept that life is unfair: Stop expecting everything to be perfect',
        'Take responsibility for everything: Even if it\'s not your fault, you\'re responsible for how you respond',
        'Embrace uncertainty: Stop trying to control everything',
        'Focus on what you can control: Let go of what you can\'t change',
        'Be honest with yourself: Stop lying to yourself about your situation',
        'Embrace failure: See it as a learning opportunity, not a reflection of your worth',
        'Stop comparing yourself to others: Focus on your own journey',
        'Accept your limitations: You\'re not perfect and that\'s okay',
        'Find meaning in suffering: Use difficult times as opportunities for growth'
      ],
      quotes: {
        'Core Values': [
          'Life is essentially an endless series of problems. The solution to one problem is merely the creation of another.',
          'Happiness comes from solving problems.',
          'Unhealthy values create unhealthy problems.',
          'The key to a good life is not giving a f*ck about more; it\'s giving a f*ck about less, giving a f*ck about only what is true and immediate and important.',
          'The desire for more positive experience is itself a negative experience.',
          'The acceptance of negative experience is itself a positive experience.',
          'The more you try to be certain about something, the more uncertain and insecure you will feel.',
          'The more you try to be perfect, the more you will feel imperfect.',
          'The more you try to be happy, the more you will feel unhappy.',
          'The more you try to be right, the more you will feel wrong.'
        ],
        'Personal Responsibility': [
          'You are responsible for everything in your life, even if it\'s not your fault.',
          'Freedom comes from accepting responsibility.',
          'The power to choose is the power to change.',
          'The more you accept responsibility for your life, the more power you have to change it.',
          'The more you blame others for your problems, the more you give away your power to change.',
          'The more you take responsibility for your problems, the more you gain the power to solve them.',
          'The more you accept that life is not fair, the more you can focus on what you can control.',
          'The more you accept that you are not special, the more you can focus on what makes you unique.',
          'The more you accept that you are not entitled to anything, the more you can focus on what you can earn.',
          'The more you accept that you are not perfect, the more you can focus on what you can improve.'
        ],
        'Authentic Living': [
          'Truth is more important than comfort.',
          'Being authentic means accepting reality, even when it\'s painful.',
          'Happiness requires honesty with yourself.',
          'Personal growth comes from accepting our limitations.',
          'The more you try to be certain about something, the more uncertain and insecure you will feel.',
          'The more you try to be perfect, the more you will feel imperfect.',
          'The more you try to be happy, the more you will feel unhappy.',
          'The more you try to be right, the more you will feel wrong.',
          'The more you try to be certain about something, the more uncertain and insecure you will feel.',
          'The more you try to be perfect, the more you will feel imperfect.'
        ]
      }
    },
    {
      title: "Can't Hurt Me",
      author: 'David Goggins',
      coverImage: '/cant-hurt-me.jpg',
      rating: 5,
      description: "David Goggins, former Navy SEAL, shares his extraordinary journey and methods for pushing mental and physical limits.",
      amazonLink: 'https://www.amazon.com/dp/1544512287/?tag=moncodeaff',
      tips: [
        'Use the 40% rule: When you think you\'re done, you\'re only at 40% of your capability',
        'Embrace discomfort: Seek out difficult situations to build mental toughness',
        'Practice the accountability mirror: Look yourself in the eye and tell yourself the truth',
        'Develop a calloused mind: Build mental resilience through consistent challenge',
        'Stop making excuses: Take full responsibility for your life and actions',
        'Push through when you want to quit: Don\'t stop when you\'re tired, stop when you\'re done',
        'Create a new identity: Decide who you want to be and act accordingly',
        'Use pain as fuel: Channel your suffering into motivation for growth',
        'Practice self-discipline daily: Build the habit of doing what you don\'t want to do',
        'Focus on what you can control: Stop worrying about things outside your influence'
      ],
      quotes: {
        'Mental Toughness': [
          "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
          "The mind is the most powerful weapon we have.",
          "You have to build calluses on your brain just like how you build calluses on your hands.",
          "Most people who are criticizing and judging haven't even tried what you failed at.",
          "Suffering is a test. That's all it is. Suffering is the true test of life.",
          "If you can get through doing things that you hate to do, on the other side is greatness.",
          "The only way you gain mental toughness is to do things you're not happy doing.",
          "You are stopping you, you are giving up instead of getting hard.",
          "You have to develop a calloused mind.",
          "The most important conversations you'll ever have are the ones you'll have with yourself."
        ],
        'Overcoming Limits': [
          "When you think you're done, you're only at 40% of your body's capability.",
          "Don't stop when you're tired. Stop when you're done.",
          "Be more than motivated, be more than driven, become literally obsessed to the point where people think you're f*cking nuts.",
          "Greatness pulls mediocrity into the mud. Get out there and get after it.",
          "We all have the ability to come from nothing to something.",
          "You have to be willing to go to war with yourself and create a whole new identity.",
          "The only thing more contagious than a good attitude is a bad one.",
          "You are in control of your own mind.",
          "If you want to get better, do the things that no-one else wants to do.",
          "Don't let your mind hold you back."
        ],
        'Accountability & Discipline': [
          "Tell yourself the truth! That you've wasted enough time, and that you have other dreams that will take courage to realize.",
          "You must own everything in your world. There is no one else to blame.",
          "The most important conversations you'll ever have are the ones you'll have with yourself.",
          "You have to build calluses on your brain just like how you build calluses on your hands.",
          "The only way you gain mental toughness is to do things you're not happy doing.",
          "You are stopping you, you are giving up instead of getting hard.",
          "You have to develop a calloused mind.",
          "The most important conversations you'll ever have are the ones you'll have with yourself.",
          "You must own everything in your world. There is no one else to blame.",
          "Tell yourself the truth! That you've wasted enough time, and that you have other dreams that will take courage to realize."
        ]
      }
    }
  ];

  for (const bookData of books) {
    console.log(`Creating book: ${bookData.title}`);
    
    const book = await prisma.book.create({
      data: {
        title: bookData.title,
        author: bookData.author,
        coverImage: bookData.coverImage,
        rating: bookData.rating,
        description: bookData.description,
        amazonLink: bookData.amazonLink,
      },
    });

    // Create tips for the book
    for (const tipText of bookData.tips) {
      await prisma.tip.create({
        data: {
          content: tipText,
          bookId: book.id,
        },
      });
    }

    // Create quotes for the book
    for (const [category, quotes] of Object.entries(bookData.quotes)) {
      for (const quoteText of quotes) {
        await prisma.quote.create({
          data: {
            content: quoteText,
            category: category,
            bookId: book.id,
          },
        });
      }
    }
  }

  console.log('Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 