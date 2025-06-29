const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting PostgreSQL database seed...');

  // Atomic Habits
  const atomicHabits = await prisma.book.create({
    data: {
      title: 'Atomic Habits',
      author: 'James Clear',
      coverImage: 'https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg',
      description: 'A practical guide to creating good habits and breaking bad ones. An essential book about behavior change.',
      amazonLink: 'https://www.amazon.com/dp/0735211299/?tag=moncodeaff-20',
      rating: 5,
      analysis: `# Atomic Habits : La Science du Changement Comportemental

## Introduction et Contexte

"Atomic Habits" de James Clear est devenu une référence incontournable dans le domaine du développement personnel. Publié en 2018, ce livre révolutionne notre compréhension des habitudes en s'appuyant sur des recherches scientifiques solides plutôt que sur des conseils superficiels.

James Clear, ancien athlète de baseball qui a survécu à un accident grave, a développé une approche systématique du changement comportemental. Son expérience personnelle et ses recherches approfondies ont donné naissance à un framework pratique pour transformer nos vies une habitude à la fois.

## La Philosophie des Habitudes Atomiques

### Le Concept Fondamental

L'idée centrale d'"Atomic Habits" repose sur un principe simple mais puissant : les petits changements, répétés quotidiennement, produisent des résultats extraordinaires. Clear utilise l'analogie des intérêts composés pour expliquer comment 1% d'amélioration quotidienne peut transformer complètement une vie sur le long terme.

### Pourquoi les Habitudes Sont-elles Si Importantes ?

Les habitudes constituent 40% de nos comportements quotidiens. Elles déterminent notre santé, notre productivité, nos relations et notre bonheur. Pourtant, la plupart d'entre nous abordons le changement de manière inefficace, en nous concentrant sur les objectifs plutôt que sur les systèmes.

## Analyse des Citations Clés

### "You do not rise to the level of your goals, you fall to the level of your systems."

Cette citation emblématique résume l'essence de la philosophie de Clear. Elle nous rappelle que :

- **Les objectifs sont des résultats** : Ils définissent ce que nous voulons accomplir
- **Les systèmes sont des processus** : Ils déterminent comment nous y parvenons
- **La qualité de nos systèmes détermine notre succès** : Plus que nos objectifs

### Contexte et Signification

Cette phrase apparaît dans le premier chapitre du livre, établissant immédiatement le ton pour tout ce qui suit. Clear utilise cette métaphore pour expliquer pourquoi tant de personnes échouent malgré des objectifs ambitieux : elles se concentrent sur la destination plutôt que sur le voyage.

## Les Quatre Lois du Changement Comportemental

### 1. Rendre l'Habitude Évidente

La première loi concerne la visibilité. Clear explique que nous devons rendre nos bonnes habitudes plus visibles et nos mauvaises habitudes moins visibles. Il propose des techniques comme :

- L'empilement d'habitudes (habit stacking)
- La conception de l'environnement
- L'utilisation de déclencheurs visuels

### 2. Rendre l'Habitude Attractive

La deuxième loi traite de la motivation. Clear utilise le concept de "temptation bundling" pour associer des activités désagréables à des récompenses immédiates. Il explique comment :

- Associer les habitudes difficiles à des activités plaisantes
- Utiliser la pression sociale positive
- Créer des rituels motivants

### 3. Rendre l'Habitude Facile

La troisième loi se concentre sur la facilité d'exécution. Clear recommande de :

- Réduire la friction pour les bonnes habitudes
- Augmenter la friction pour les mauvaises habitudes
- Utiliser la règle des deux minutes
- Optimiser l'environnement

### 4. Rendre l'Habitude Satisfaisante

La quatrième loi concerne la satisfaction immédiate. Clear explique l'importance de :

- Créer des récompenses immédiates
- Utiliser le tracking des habitudes
- Célébrer les petites victoires

## Applications Pratiques

### Dans la Vie Quotidienne

Les principes d'"Atomic Habits" s'appliquent à tous les domaines de la vie :

- **Santé** : Commencer par 2 minutes d'exercice quotidien
- **Productivité** : Créer des routines matinales
- **Relations** : Développer des habitudes de communication
- **Apprentissage** : Lire 10 pages par jour

### Exemples Concrets

Clear fournit de nombreux exemples concrets, comme :
- L'histoire de l'équipe cycliste britannique qui a dominé le Tour de France
- Les transformations personnelles d'individus ordinaires
- Les recherches scientifiques sur le comportement humain

## Impact et Réception

### Influence sur le Développement Personnel

"Atomic Habits" a révolutionné le domaine du développement personnel en :
- Apportant une approche scientifique au changement comportemental
- Fournissant un framework pratique et applicable
- Démystifiant le processus de formation des habitudes

### Critiques et Limites

Bien que largement acclamé, le livre a reçu quelques critiques :
- Certains trouvent l'approche trop systématique
- D'autres soulignent que les habitudes ne résolvent pas tous les problèmes
- Quelques-uns critiquent le manque de prise en compte des facteurs sociaux et économiques

## Conclusion

"Atomic Habits" reste un livre essentiel pour quiconque souhaite améliorer sa vie de manière durable. Sa force réside dans sa combinaison unique de rigueur scientifique et de praticité. James Clear a créé un guide accessible qui transforme la théorie en action concrète.

Le message central du livre - que nous sommes le produit de nos habitudes - nous donne le pouvoir de changer notre vie en modifiant nos comportements quotidiens. C'est un message d'espoir et d'action qui continue d'inspirer des millions de lecteurs dans le monde entier.`,
      quotes: {
        create: [
          {
            text: "You do not rise to the level of your goals, you fall to the level of your systems.",
            context: "Introduction du livre, explication de l'importance des systèmes sur les objectifs",
            themes: "Systèmes, Objectifs, Changement",
            category: "Core Principles"
          },
          {
            text: "Small habits make a big difference.",
            context: "Explication de l'effet cumulatif des petites actions",
            themes: "Habits, Persévérance, Progrès",
            category: "Core Principles"
          },
          {
            text: "Change is not an event, it's a process.",
            context: "Démythification du changement instantané",
            themes: "Changement, Processus, Patience",
            category: "Core Principles"
          },
          {
            text: "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.",
            context: "Chapitre sur l'identité et les habitudes",
            themes: "Identité, Transformation, Objectifs",
            category: "Identity and Habits"
          },
          {
            text: "Every action you take is a vote for the type of person you wish to become.",
            context: "Explication du vote d'identité",
            themes: "Identité, Actions, Transformation",
            category: "Identity and Habits"
          }
        ]
      }
    }
  });

  console.log('✅ PostgreSQL database seeded successfully!');
  console.log(`📚 Created ${await prisma.book.count()} books`);
  console.log(`💬 Created ${await prisma.quote.count()} quotes`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding PostgreSQL database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 