const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seeding...');

  // Clear existing data
  await prisma.book.deleteMany({});
  await prisma.quote.deleteMany({});

  // Create books with their quotes
  const books = [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      coverImage: 'https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A practical guide to creating good habits and breaking bad ones. An essential book about behavior change.',
      analysis: 'Atomic Habits by James Clear is a comprehensive guide to understanding and implementing habit formation. The book introduces the concept that small changes can lead to remarkable results through the compound effect of habits. Clear explains that habits are the compound interest of self-improvement, where tiny changes in behavior can result in significant outcomes over time. The book provides practical strategies for building good habits and breaking bad ones, emphasizing the importance of systems over goals. Clear introduces the four laws of behavior change: make it obvious, make it attractive, make it easy, and make it satisfying. He also discusses the concept of identity-based habits, where the focus shifts from what you want to achieve to who you want to become. The book includes numerous real-world examples and actionable advice that readers can immediately apply to their lives. Clear emphasizes that habit formation is not about motivation or willpower, but about creating the right environment and systems that make good habits inevitable and bad habits impossible. The book has become a bestseller because it provides both the theoretical framework and practical tools for anyone looking to improve their habits and, consequently, their life.',
      amazonLink: 'https://www.amazon.com/dp/0735211299/?tag=moncodeaff-20',
      quotes: [
        {
          text: 'You do not rise to the level of your goals, you fall to the level of your systems.',
          context: 'Core principle about the importance of systems over goals',
          themes: 'systems, goals, improvement',
          category: 'Core Principles'
        },
        {
          text: 'Small habits make a big difference.',
          context: 'Emphasizing the power of incremental change',
          themes: 'habits, change, progress',
          category: 'Core Principles'
        },
        {
          text: 'Change is not an event, it\'s a process.',
          context: 'Understanding that transformation takes time',
          themes: 'change, process, patience',
          category: 'Core Principles'
        },
        {
          text: 'The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.',
          context: 'Identity-based habit formation',
          themes: 'identity, habits, transformation',
          category: 'Identity and Habits'
        },
        {
          text: 'Every action you take is a vote for the type of person you wish to become.',
          context: 'How daily actions shape identity',
          themes: 'identity, actions, consistency',
          category: 'Identity and Habits'
        },
        {
          text: 'Habits are the compound interest of self-improvement.',
          context: 'The exponential effect of consistent habits',
          themes: 'habits, compound effect, improvement',
          category: 'Practical Application'
        },
        {
          text: 'The quality of your life is a measure of the quality of your habits.',
          context: 'Direct correlation between habits and life quality',
          themes: 'habits, life quality, measurement',
          category: 'Practical Application'
        },
        {
          text: 'Your identity emerges out of your habits.',
          context: 'How habits shape who we become',
          themes: 'identity, habits, emergence',
          category: 'Identity and Habits'
        },
        {
          text: 'True behavior change is identity change.',
          context: 'The deeper level of transformation',
          themes: 'behavior, identity, change',
          category: 'Identity and Habits'
        },
        {
          text: 'The goal is not to read a book, the goal is to become a reader.',
          context: 'Identity-based approach to habits',
          themes: 'identity, goals, transformation',
          category: 'Identity and Habits'
        }
      ]
    },
    {
      title: 'Power',
      author: 'Robert Greene',
      coverImage: 'https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A book about the strategies and principles of power and influence.',
      analysis: 'Power by Robert Greene is a comprehensive study of the strategies and principles of power and influence throughout history. The book examines how power operates in various contexts, from politics and business to personal relationships. Greene draws from historical examples, including figures like Machiavelli, Sun Tzu, and various historical leaders, to illustrate the timeless principles of power. The book is structured around 48 laws of power, each accompanied by historical examples and practical applications. Greene emphasizes that power is not inherently evil, but a fundamental aspect of human interaction that can be used for both positive and negative purposes. He discusses the importance of understanding power dynamics, mastering emotions, controlling information, and building strategic relationships. The book provides insights into how to gain, maintain, and use power effectively while avoiding common pitfalls. Greene also addresses the ethical considerations of power and the responsibility that comes with it. The book serves as both a practical guide for those seeking to understand power dynamics and a historical analysis of how power has been wielded throughout human history. It challenges readers to think critically about power and its role in their personal and professional lives.',
      amazonLink: 'https://www.amazon.com/dp/1861972784/?tag=moncodeaff',
      quotes: [
        {
          text: 'Power is the ability to influence others and get what you want.',
          context: 'Basic definition of power',
          themes: 'power, influence, control',
          category: 'Core Principles'
        },
        {
          text: 'The best way to win is to never play the other person\'s game.',
          context: 'Strategic advantage through game theory',
          themes: 'strategy, advantage, control',
          category: 'Strategic Thinking'
        },
        {
          text: 'Power is a matter of perception.',
          context: 'The psychological aspect of power',
          themes: 'power, perception, psychology',
          category: 'Core Principles'
        },
        {
          text: 'The most important skill in gaining power is the ability to master your emotions.',
          context: 'Emotional control as a power tool',
          themes: 'emotions, control, power',
          category: 'Core Principles'
        },
        {
          text: 'Never show your anger, it is a weapon you must keep secret.',
          context: 'Strategic emotional control',
          themes: 'emotions, strategy, control',
          category: 'Strategic Thinking'
        },
        {
          text: 'Power is like a chess game: each piece has its role and value.',
          context: 'Strategic thinking in power dynamics',
          themes: 'strategy, chess, power',
          category: 'Strategic Thinking'
        },
        {
          text: 'The key to power is the ability to judge who is best able to further your interests in all situations.',
          context: 'Strategic relationship building',
          themes: 'judgment, relationships, interests',
          category: 'Core Principles'
        },
        {
          text: 'Power is a social game. To learn and master it, you must develop the ability to study and understand people.',
          context: 'Social intelligence in power dynamics',
          themes: 'social intelligence, understanding, power',
          category: 'Core Principles'
        },
        {
          text: 'The essence of power is the ability to keep the initiative, to get others to react to your moves.',
          context: 'Maintaining control through initiative',
          themes: 'initiative, control, strategy',
          category: 'Practical Tactics'
        },
        {
          text: 'Power is based on a simple rule: you must always be aware of what you are revealing or concealing.',
          context: 'Information control as power',
          themes: 'information, control, awareness',
          category: 'Practical Tactics'
        }
      ]
    },
    {
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      coverImage: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      rating: 5,
      description: 'A counterintuitive approach to living a good life. A book that challenges conventional wisdom about happiness and success.',
      analysis: 'The Subtle Art of Not Giving a F*ck by Mark Manson is a counterintuitive approach to living a good life that challenges conventional wisdom about happiness and success. Manson argues that the key to a good life is not giving a f*ck about more things, but giving a f*ck about fewer, more important things. He challenges readers to question their values and priorities, suggesting that many people pursue goals and values that don\'t actually bring them happiness. The book emphasizes the importance of accepting negative experiences and using them as opportunities for growth. Manson discusses how the constant pursuit of positive experiences can actually lead to more suffering, while accepting and working through difficult emotions can lead to greater fulfillment. He introduces the concept of "choosing your problems wisely" and taking responsibility for everything in your life, even if it\'s not your fault. The book challenges readers to be honest with themselves about their limitations and to stop comparing themselves to others. Manson uses humor and direct language to deliver serious insights about life, happiness, and personal responsibility. The book has resonated with millions of readers because it provides a refreshing perspective on how to live a meaningful life without falling into the traps of modern society\'s expectations.',
      amazonLink: 'https://www.amazon.com/dp/0062457713/?tag=moncodeaff',
      quotes: [
        {
          text: 'Life is essentially an endless series of problems. The solution to one problem is merely the creation of another.',
          context: 'The nature of life and problem-solving',
          themes: 'problems, life, perspective',
          category: 'Core Values'
        },
        {
          text: 'Happiness comes from solving problems.',
          context: 'Finding meaning through challenges',
          themes: 'happiness, problems, meaning',
          category: 'Core Values'
        },
        {
          text: 'You are responsible for everything in your life, even if it\'s not your fault.',
          context: 'Taking full responsibility for responses',
          themes: 'responsibility, control, choice',
          category: 'Personal Responsibility'
        },
        {
          text: 'Freedom comes from accepting responsibility.',
          context: 'The paradox of responsibility and freedom',
          themes: 'freedom, responsibility, acceptance',
          category: 'Personal Responsibility'
        },
        {
          text: 'Truth is more important than comfort.',
          context: 'Choosing honesty over comfort',
          themes: 'truth, comfort, honesty',
          category: 'Authentic Living'
        },
        {
          text: 'Being authentic means accepting reality, even when it\'s painful.',
          context: 'Authenticity through reality acceptance',
          themes: 'authenticity, reality, acceptance',
          category: 'Authentic Living'
        },
        {
          text: 'The key to a good life is not giving a f*ck about more; it\'s giving a f*ck about less, giving a f*ck about only what is true and immediate and important.',
          context: 'Selective caring as a life strategy',
          themes: 'priorities, values, focus',
          category: 'Core Values'
        },
        {
          text: 'The desire for more positive experience is itself a negative experience.',
          context: 'The paradox of pursuing happiness',
          themes: 'happiness, paradox, desire',
          category: 'Core Values'
        },
        {
          text: 'The acceptance of negative experience is itself a positive experience.',
          context: 'Finding positivity in acceptance',
          themes: 'acceptance, negative experience, positivity',
          category: 'Core Values'
        },
        {
          text: 'Happiness requires honesty with yourself.',
          context: 'Self-honesty as foundation for happiness',
          themes: 'happiness, honesty, self-awareness',
          category: 'Authentic Living'
        }
      ]
    },
    {
      title: "Can't Hurt Me",
      author: 'David Goggins',
      coverImage: '/cant-hurt-me.jpg',
      rating: 5,
      description: "David Goggins, former Navy SEAL, shares his extraordinary journey and methods for pushing mental and physical limits.",
      analysis: "Can't Hurt Me by David Goggins is a powerful memoir and self-help book that chronicles the extraordinary journey of a man who transformed himself from an overweight, underachieving individual into one of the world's most elite athletes and military operators. Goggins shares his brutal childhood, his struggles with racism and poverty, and his journey to becoming a Navy SEAL, ultramarathon runner, and ultra-endurance athlete. The book introduces the concept of the '40% rule,' which suggests that when most people think they're done, they've only used 40% of their capability. Goggins emphasizes the importance of developing mental toughness through embracing discomfort and pushing through pain. He introduces the 'accountability mirror' concept, where individuals must honestly assess themselves and take full responsibility for their lives. The book challenges readers to stop making excuses and to develop a 'calloused mind' that can withstand any challenge. Goggins shares his philosophy that suffering is a test and that true growth comes from doing things you don't want to do. The book provides practical strategies for building mental resilience, including daily self-discipline practices and pushing through when you want to quit. Goggins' story serves as both inspiration and a practical guide for anyone looking to overcome their limitations and achieve extraordinary results through mental toughness and relentless determination.",
      amazonLink: 'https://www.amazon.com/dp/1544512287/?tag=moncodeaff',
      quotes: [
        {
          text: "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
          context: 'Warning against complacency and comfort',
          themes: 'potential, comfort, complacency',
          category: 'Mental Toughness'
        },
        {
          text: "The mind is the most powerful weapon we have.",
          context: 'The power of mental strength',
          themes: 'mind, power, weapon',
          category: 'Mental Toughness'
        },
        {
          text: "When you think you're done, you're only at 40% of your body's capability.",
          context: 'The 40% rule principle',
          themes: 'capability, limits, potential',
          category: 'Overcoming Limits'
        },
        {
          text: "Don't stop when you're tired. Stop when you're done.",
          context: 'Pushing through exhaustion',
          themes: 'perseverance, exhaustion, completion',
          category: 'Overcoming Limits'
        },
        {
          text: "Tell yourself the truth! That you've wasted enough time, and that you have other dreams that will take courage to realize.",
          context: 'Self-accountability and truth-telling',
          themes: 'truth, accountability, courage',
          category: 'Accountability & Discipline'
        },
        {
          text: "You must own everything in your world. There is no one else to blame.",
          context: 'Taking full responsibility',
          themes: 'responsibility, ownership, blame',
          category: 'Accountability & Discipline'
        },
        {
          text: "You have to build calluses on your brain just like how you build calluses on your hands.",
          context: 'Developing mental resilience',
          themes: 'resilience, mental toughness, development',
          category: 'Mental Toughness'
        },
        {
          text: "The only way you gain mental toughness is to do things you're not happy doing.",
          context: 'Growth through discomfort',
          themes: 'mental toughness, discomfort, growth',
          category: 'Mental Toughness'
        },
        {
          text: "You are stopping you, you are giving up instead of getting hard.",
          context: 'Self-sabotage and quitting',
          themes: 'self-sabotage, quitting, mental strength',
          category: 'Mental Toughness'
        },
        {
          text: "The most important conversations you'll ever have are the ones you'll have with yourself.",
          context: 'Self-dialogue and internal communication',
          themes: 'self-talk, internal dialogue, importance',
          category: 'Accountability & Discipline'
        }
      ]
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
        analysis: bookData.analysis,
        amazonLink: bookData.amazonLink,
      },
    });

    // Create quotes for the book
    for (const quoteData of bookData.quotes) {
      await prisma.quote.create({
        data: {
          text: quoteData.text,
          context: quoteData.context,
          themes: quoteData.themes,
          category: quoteData.category,
          bookId: book.id,
        },
      });
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