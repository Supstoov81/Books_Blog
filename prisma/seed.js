const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Supprimer les données existantes
  await prisma.quote.deleteMany();
  await prisma.book.deleteMany();

  // Créer les livres
  const books = await Promise.all([
    prisma.book.create({
      data: {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        description: "Un livre révolutionnaire sur l'éducation financière et la différence entre les actifs et les passifs.",
        coverImage: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Rich-Dad-Poor-Robert-Kiyosaki/dp/1612680011",
        analysis: "Un livre révolutionnaire sur l'éducation financière qui change complètement la façon de penser l'argent.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Les pauvres et la classe moyenne travaillent pour l'argent. Les riches font travailler l'argent pour eux.",
              context: "Différence fondamentale entre les mentalités",
              themes: "Argent, Travail, Richesse",
              category: "Financial Education"
            },
            {
              text: "L'actif met de l'argent dans ma poche. Le passif en retire.",
              context: "Définition des actifs et passifs",
              themes: "Actifs, Passifs, Gestion",
              category: "Financial Education"
            },
            {
              text: "L'éducation financière est la clé de la liberté financière.",
              context: "Importance de l'apprentissage",
              themes: "Éducation, Liberté, Apprentissage",
              category: "Financial Education"
            },
            {
              text: "Ne travaillez pas pour l'argent, faites travailler l'argent pour vous.",
              context: "Principe de l'investissement",
              themes: "Investissement, Travail, Argent",
              category: "Financial Education"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        description: "Un classique sur la philosophie du succès et les principes de la réussite personnelle.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Think-Grow-Rich-Napoleon-Hill/dp/1585424331",
        analysis: "Un classique intemporel sur la philosophie du succès basé sur l'étude de personnes riches.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Tout ce que l'esprit peut concevoir et croire, il peut l'accomplir.",
              context: "Principe fondamental de la réussite",
              themes: "Esprit, Croyance, Accomplissement",
              category: "Success Principles"
            },
            {
              text: "Le désir est le point de départ de tout accomplissement.",
              context: "Importance du désir dans le succès",
              themes: "Désir, Motivation, Accomplissement",
              category: "Success Principles"
            },
            {
              text: "La foi est l'élixir qui donne vie, puissance et action à l'impulsion de la pensée.",
              context: "Rôle de la foi dans la réussite",
              themes: "Foi, Pensée, Action",
              category: "Success Principles"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        description: "Un guide pour développer des habitudes qui mènent au succès personnel et professionnel.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Habits-Highly-Effective-People-Powerful/dp/1451639619",
        analysis: "Un guide complet pour développer des habitudes efficaces dans tous les domaines de la vie.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Soyez proactif. Prenez l'initiative et la responsabilité de votre vie.",
              context: "Première habitude - la proactivité",
              themes: "Proactivité, Responsabilité, Initiative",
              category: "Personal Development"
            },
            {
              text: "Commencez par la fin en tête. Ayez une vision claire de votre destination.",
              context: "Deuxième habitude - la vision",
              themes: "Vision, Objectifs, Planification",
              category: "Personal Development"
            },
            {
              text: "Mettez les premières choses en premier. Priorisez ce qui est important.",
              context: "Troisième habitude - la priorisation",
              themes: "Priorités, Organisation, Efficacité",
              category: "Personal Development"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        description: "Le guide ultime pour améliorer ses relations interpersonnelles et son influence.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/How-Win-Friends-Influence-People/dp/0671027034",
        analysis: "Le guide classique pour développer des relations humaines authentiques et influencer positivement.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Ne critiquez, ne condamnez, ne vous plaignez jamais.",
              context: "Principe fondamental des relations",
              themes: "Critique, Relations, Positivité",
              category: "Interpersonal Skills"
            },
            {
              text: "Donnez aux autres un désir sincère et ardent d'accomplir ce que vous souhaitez.",
              context: "Art de l'influence positive",
              themes: "Influence, Motivation, Désir",
              category: "Interpersonal Skills"
            },
            {
              text: "Intéressez-vous sincèrement aux autres.",
              context: "Clé des relations authentiques",
              themes: "Intérêt, Relations, Authenticité",
              category: "Interpersonal Skills"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        description: "Un guide spirituel pour vivre dans le moment présent et trouver la paix intérieure.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808",
        analysis: "Un guide spirituel profond pour vivre dans le moment présent et trouver la paix intérieure.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Le moment présent est tout ce que vous avez. Faites-en votre ami.",
              context: "Importance du moment présent",
              themes: "Présent, Conscience, Paix",
              category: "Spirituality"
            },
            {
              text: "L'acceptation du moment présent vous apporte la paix intérieure.",
              context: "Acceptation et paix",
              themes: "Acceptation, Paix, Présent",
              category: "Spirituality"
            },
            {
              text: "Votre vie n'est pas votre vie, c'est la vie qui vit à travers vous.",
              context: "Conscience de l'être",
              themes: "Conscience, Être, Vie",
              category: "Spirituality"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "Atomic Habits",
        author: "James Clear",
        description: "Un guide pratique pour créer de bonnes habitudes et briser les mauvaises.",
        coverImage: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Atomic-Habits-Proven-Build-Break/dp/0735211299",
        analysis: "Un guide scientifique et pratique pour transformer sa vie une habitude à la fois.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Vous n'atteignez pas le niveau de vos objectifs, vous tombez au niveau de vos systèmes.",
              context: "Importance des systèmes sur les objectifs",
              themes: "Systèmes, Objectifs, Changement",
              category: "Habit Formation"
            },
            {
              text: "Les petites habitudes font une grande différence.",
              context: "Effet cumulatif des petites actions",
              themes: "Habits, Persévérance, Progrès",
              category: "Habit Formation"
            },
            {
              text: "Rendez les bonnes habitudes évidentes et les mauvaises invisibles.",
              context: "Première loi du changement comportemental",
              themes: "Visibilité, Environnement, Changement",
              category: "Habit Formation"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "Deep Work",
        author: "Cal Newport",
        description: "Un guide pour développer la capacité de concentration et la productivité profonde.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Deep-Work-Focused-Success-Distracted/dp/1455586692",
        analysis: "Un guide pour développer la capacité de concentration profonde dans un monde distrayant.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Le travail profond est de plus en plus rare et de plus en plus précieux.",
              context: "Valeur du travail profond",
              themes: "Concentration, Valeur, Rareté",
              category: "Productivity"
            },
            {
              text: "La capacité d'effectuer un travail profond est devenue de plus en plus rare.",
              context: "Rareté de la concentration",
              themes: "Concentration, Rareté, Compétence",
              category: "Productivity"
            },
            {
              text: "Concentrez-vous sur ce qui est important, pas sur ce qui est urgent.",
              context: "Priorisation du travail",
              themes: "Priorités, Importance, Urgence",
              category: "Productivity"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        description: "Un livre sur les comportements psychologiques qui influencent nos décisions financières.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Psychology-Money-Timeless-lessons-happiness/dp/0857197681",
        analysis: "Une exploration fascinante de la psychologie derrière nos décisions financières.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Le comportement financier est plus important que l'intelligence financière.",
              context: "Importance du comportement",
              themes: "Comportement, Intelligence, Finances",
              category: "Financial Psychology"
            },
            {
              text: "La richesse est ce que vous ne voyez pas.",
              context: "Nature de la vraie richesse",
              themes: "Richesse, Apparence, Réalité",
              category: "Financial Psychology"
            },
            {
              text: "Le temps est l'ingrédient le plus puissant de la richesse.",
              context: "Puissance du temps",
              themes: "Temps, Richesse, Patience",
              category: "Financial Psychology"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The Almanack of Naval Ravikant",
        author: "Eric Jorgenson",
        description: "Un recueil de sagesse sur la richesse, le bonheur et la vie.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Almanack-Naval-Ravikant-Wealth-Happiness/dp/1544514212",
        analysis: "Un recueil de sagesse moderne sur la richesse, le bonheur et le sens de la vie.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "La richesse est des actifs qui génèrent des revenus pendant que vous dormez.",
              context: "Définition de la vraie richesse",
              themes: "Richesse, Actifs, Revenus passifs",
              category: "Wealth Building"
            },
            {
              text: "Le bonheur est un choix et une compétence que vous pouvez développer.",
              context: "Nature du bonheur",
              themes: "Bonheur, Choix, Compétence",
              category: "Happiness"
            },
            {
              text: "Lisez ce que vous aimez jusqu'à ce que vous aimiez lire.",
              context: "Développement de l'amour de la lecture",
              themes: "Lecture, Passion, Développement",
              category: "Learning"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The Millionaire Fastlane",
        author: "MJ DeMarco",
        description: "Un guide pour créer la richesse rapidement en construisant des systèmes et des entreprises.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Millionaire-Fastlane-Crack-Wealth-Code/dp/0984358102",
        analysis: "Un guide pour échapper à la voie lente et créer la richesse rapidement.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "La voie lente vers la richesse est un mythe.",
              context: "Remise en question de la voie traditionnelle",
              themes: "Richesse, Mythe, Voie rapide",
              category: "Wealth Building"
            },
            {
              text: "Construisez des systèmes qui génèrent des revenus passifs.",
              context: "Importance des systèmes",
              themes: "Systèmes, Revenus passifs, Construction",
              category: "Wealth Building"
            },
            {
              text: "Le temps est plus précieux que l'argent.",
              context: "Valeur relative du temps",
              themes: "Temps, Argent, Valeur",
              category: "Wealth Building"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The 4-Hour Workweek",
        author: "Timothy Ferriss",
        description: "Un guide pour échapper au 9-5, vivre n'importe où et rejoindre les nouveaux riches.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357",
        analysis: "Un guide révolutionnaire pour échapper au travail traditionnel et vivre librement.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Ne confondez pas être occupé avec être productif.",
              context: "Différence entre occupation et productivité",
              themes: "Productivité, Occupation, Efficacité",
              category: "Productivity"
            },
            {
              text: "Automatisez tout ce qui peut l'être.",
              context: "Importance de l'automatisation",
              themes: "Automatisation, Efficacité, Liberté",
              category: "Productivity"
            },
            {
              text: "La liberté de temps est la plus grande liberté.",
              context: "Valeur de la liberté temporelle",
              themes: "Liberté, Temps, Valeur",
              category: "Lifestyle Design"
            }
          ]
        }
      }
    }),
    prisma.book.create({
      data: {
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        description: "Un contre-intuitif guide pour vivre une bonne vie en choisissant ses batailles.",
        coverImage: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
        amazonLink: "https://www.amazon.fr/Subtle-Art-Not-Giving-Counterintuitive/dp/0062457713",
        analysis: "Un guide contre-intuitif pour vivre une vie authentique en choisissant ses batailles.",
        rating: 5,
        quotes: {
          create: [
            {
              text: "Vous n'êtes pas spécial. Et c'est très bien comme ça.",
              context: "Acceptation de l'ordinaire",
              themes: "Ordinaire, Acceptation, Réalisme",
              category: "Authentic Living"
            },
            {
              text: "Choisissez vos problèmes avec soin.",
              context: "Importance du choix des batailles",
              themes: "Choix, Problèmes, Priorités",
              category: "Authentic Living"
            },
            {
              text: "La souffrance est inévitable, mais la souffrance inutile est optionnelle.",
              context: "Nature de la souffrance",
              themes: "Souffrance, Inévitable, Optionnel",
              category: "Authentic Living"
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