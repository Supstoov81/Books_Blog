const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Supprimer les données existantes
  await prisma.quote.deleteMany();
  await prisma.book.deleteMany();

  // Créer les 4 livres de la page d'accueil
  const books = await Promise.all([
    prisma.book.create({
      data: {
        title: "Atomic Habits",
        author: "James Clear",
        description: "A practical guide to creating good habits and breaking bad ones. An essential book about behavior change.",
        coverImage: "/atomic-habits.jpg",
        amazonLink: "https://www.amazon.com/dp/0735211299/?tag=moncodeaff-20",
        analysis: "A revolutionary book about behavior change that teaches how small habits can lead to remarkable results.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "You do not rise to the level of your goals, you fall to the level of your systems.",
              context: "Core principle about systems vs goals",
              themes: "Systems, Goals, Achievement",
              category: "Core Principles"
            },
            {
              text: "Small habits make a big difference.",
              context: "Power of incremental change",
              themes: "Habits, Change, Progress",
              category: "Core Principles"
            },
            {
              text: "Change is not an event, it's a process.",
              context: "Understanding the nature of change",
              themes: "Change, Process, Patience",
              category: "Core Principles"
            },
            {
              text: "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.",
              context: "Identity-based habit formation",
              themes: "Identity, Habits, Transformation",
              category: "Identity and Habits"
            },
            {
              text: "Every action you take is a vote for the type of person you wish to become.",
              context: "Voting with actions",
              themes: "Actions, Identity, Choice",
              category: "Identity and Habits"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "Power",
        author: "Robert Greene",
        description: "A book about the strategies and principles of power and influence.",
        coverImage: "/power.jpg",
        amazonLink: "https://www.amazon.com/dp/1861972784/?tag=moncodeaff",
        analysis: "A comprehensive guide to power dynamics, strategy, and influence based on historical examples.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Power is the ability to influence others and get what you want.",
              context: "Definition of power",
              themes: "Power, Influence, Control",
              category: "Core Principles"
            },
            {
              text: "Never show your anger, it is a weapon you must keep secret.",
              context: "Emotional control strategy",
              themes: "Emotions, Control, Strategy",
              category: "Strategic Thinking"
            },
            {
              text: "Power is like a chess game: each piece has its role and value.",
              context: "Strategic thinking analogy",
              themes: "Strategy, Planning, Value",
              category: "Strategic Thinking"
            },
            {
              text: "The best way to win is to make the other person lose without realizing it.",
              context: "Subtle victory strategy",
              themes: "Strategy, Victory, Subtlety",
              category: "Practical Tactics"
            },
            {
              text: "Power is a matter of perception.",
              context: "Perception of power",
              themes: "Perception, Power, Image",
              category: "Core Principles"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        description: "A counterintuitive approach to living a good life. A book that challenges conventional wisdom about happiness and success.",
        coverImage: "/subtle-art.jpg",
        amazonLink: "https://www.amazon.com/dp/0062457713/?tag=moncodeaff",
        analysis: "A counterintuitive guide to living a good life by choosing your battles wisely.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Life is essentially an endless series of problems. The solution to one problem is merely the creation of another.",
              context: "Nature of life's problems",
              themes: "Problems, Life, Reality",
              category: "Core Values"
            },
            {
              text: "Happiness comes from solving problems.",
              context: "Source of happiness",
              themes: "Happiness, Problems, Solutions",
              category: "Core Values"
            },
            {
              text: "You are responsible for everything in your life, even if it's not your fault.",
              context: "Personal responsibility principle",
              themes: "Responsibility, Control, Power",
              category: "Personal Responsibility"
            },
            {
              text: "Truth is more important than comfort.",
              context: "Value of truth over comfort",
              themes: "Truth, Comfort, Growth",
              category: "Authentic Living"
            },
            {
              text: "You are not special. And that's perfectly fine.",
              context: "Acceptance of ordinariness",
              themes: "Ordinary, Acceptance, Reality",
              category: "Authentic Living"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "Can't Hurt Me",
        author: "David Goggins",
        description: "David Goggins, former Navy SEAL, shares his extraordinary journey and methods for pushing mental and physical limits.",
        coverImage: "/cant-hurt-me.jpg",
        amazonLink: "https://www.amazon.com/dp/1544512287/?tag=moncodeaff",
        analysis: "A powerful story of resilience, discipline, and personal transformation from a former Navy SEAL.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
              context: "Warning about comfortable life",
              themes: "Comfort, Potential, Danger",
              category: "Mental Toughness"
            },
            {
              text: "When you think you're done, you're only at 40% of your body's capability.",
              context: "The 40% rule",
              themes: "Limits, Capability, Perseverance",
              category: "Overcoming Limits"
            },
            {
              text: "Don't stop when you're tired. Stop when you're done.",
              context: "Persistence principle",
              themes: "Persistence, Fatigue, Completion",
              category: "Overcoming Limits"
            },
            {
              text: "You have to build calluses on your brain just like how you build calluses on your hands.",
              context: "Mental toughness development",
              themes: "Mental Toughness, Growth, Resilience",
              category: "Mental Toughness"
            },
            {
              text: "The most important conversations you'll ever have are the ones you'll have with yourself.",
              context: "Self-talk importance",
              themes: "Self-talk, Reflection, Growth",
              category: "Accountability & Discipline"
            }
          ]
        }
      }
    })
  ]);

  console.log('✅ Database seeded successfully!');
  console.log(`📚 Created ${books.length} books`);
  
  const totalQuotes = await prisma.quote.count();
  console.log(`💬 Created ${totalQuotes} quotes`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 