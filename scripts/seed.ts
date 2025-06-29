const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

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

  // Power
  const power = await prisma.book.create({
    data: {
      title: 'Power',
      author: 'Robert Greene',
      coverImage: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      description: 'A comprehensive guide to power dynamics, strategy, and influence. Learn the timeless principles of power and how to navigate complex social situations.',
      amazonLink: 'https://www.amazon.com/dp/0143112783/?tag=moncodeaff-20',
      rating: 5,
      analysis: `# Power : Les Lois de la Dynamique Sociale

## Introduction et Contexte Historique

"Power" de Robert Greene est une exploration approfondie des mécanismes du pouvoir dans les relations humaines. Publié en 1998, ce livre s'inspire des stratégies historiques et des principes psychologiques pour dévoiler les lois intemporelles qui régissent les dynamiques de pouvoir.

Robert Greene, auteur de plusieurs best-sellers sur la stratégie et le pouvoir, a étudié l'histoire, la philosophie et la psychologie pour créer un guide complet sur l'art de la manipulation sociale et de l'influence.

## La Philosophie du Pouvoir

### Définition du Pouvoir

Greene définit le pouvoir comme la capacité d'influencer les autres et de contrôler les situations. Il distingue plusieurs types de pouvoir :
- Le pouvoir direct (autorité formelle)
- Le pouvoir indirect (influence et manipulation)
- Le pouvoir de l'information
- Le pouvoir de la réputation

### Les Lois Universelles

Le livre présente 48 lois du pouvoir, chacune basée sur des exemples historiques et des principes psychologiques. Ces lois ne sont pas des règles morales, mais des observations sur la façon dont le pouvoir fonctionne réellement.

## Analyse des Citations Clés

### "Never show your anger, it is a weapon you must keep secret."

Cette citation illustre la première loi du pouvoir : "Ne surpassez jamais votre maître." Elle révèle plusieurs principes importants :

- **La maîtrise émotionnelle** : Les émotions peuvent être utilisées contre nous
- **La stratégie de l'information** : Ne pas révéler ses véritables sentiments
- **L'avantage tactique** : Garder ses armes cachées

### Contexte et Applications

Cette loi s'applique dans de nombreux contextes :
- Relations professionnelles
- Négociations
- Conflits personnels
- Jeux politiques

## Les Stratégies du Pouvoir

### 1. L'Art de la Dissimulation

Greene consacre plusieurs chapitres à l'importance de la dissimulation :
- Cacher ses véritables intentions
- Utiliser le mystère comme source de pouvoir
- Contrôler l'information

### 2. La Manipulation Sociale

Le livre explore les techniques de manipulation :
- L'utilisation de la flatterie
- La création de dépendance
- L'exploitation des faiblesses humaines

### 3. La Construction de l'Image

Greene explique comment :
- Créer une réputation favorable
- Utiliser l'apparence pour influencer
- Contrôler la perception des autres

## Applications Pratiques

### Dans le Monde Professionnel

Les lois du pouvoir s'appliquent particulièrement au monde du travail :
- Gestion des relations hiérarchiques
- Négociation de salaires
- Gestion des conflits
- Construction d'une carrière

### Dans les Relations Personnelles

Bien que controversé, le livre offre des insights sur :
- Les dynamiques de couple
- Les relations familiales
- Les amitiés
- Les conflits interpersonnels

## Critiques et Controverses

### Aspects Éthiques

Le livre a suscité de nombreuses critiques :
- Promotion de la manipulation
- Manque de considération éthique
- Potentiel de mauvaise utilisation

### Défense de Greene

Greene défend son approche en arguant que :
- Ces lois existent déjà dans la nature
- Mieux vaut les comprendre que les ignorer
- La connaissance protège contre la manipulation

## Impact Culturel

### Influence sur la Culture Populaire

"Power" a influencé :
- Des séries télévisées
- Des films
- Des chansons
- Des discussions sur les réseaux sociaux

### Utilisation dans Divers Domaines

Le livre est utilisé dans :
- Les écoles de commerce
- Les formations en leadership
- Les études de psychologie sociale
- Les analyses politiques

## Conclusion

"Power" reste un livre controversé mais influent. Sa valeur réside dans sa capacité à révéler les mécanismes cachés des relations humaines. Bien que certains principes puissent sembler cyniques, la compréhension de ces dynamiques peut être utilisée de manière éthique pour :

- Se protéger contre la manipulation
- Améliorer ses compétences de négociation
- Comprendre les dynamiques sociales
- Développer son intelligence sociale

Le livre nous rappelle que le pouvoir est une réalité de la vie sociale, et que la meilleure approche est de le comprendre pour l'utiliser de manière responsable.`,
      quotes: {
        create: [
          {
            text: "Never show your anger, it is a weapon you must keep secret.",
            context: "Loi sur la maîtrise émotionnelle et la dissimulation",
            themes: "Émotions, Stratégie, Contrôle",
            category: "Strategic Thinking"
          },
          {
            text: "Power is like a chess game: each piece has its role and value.",
            context: "Analogie entre le pouvoir et les échecs",
            themes: "Stratégie, Planification, Valeur",
            category: "Strategic Thinking"
          },
          {
            text: "The best way to win is to make the other person lose without realizing it.",
            context: "Stratégie de victoire subtile",
            themes: "Stratégie, Victoire, Subtilité",
            category: "Practical Tactics"
          }
        ]
      }
    }
  });

  // The Subtle Art of Not Giving a F*ck
  const subtleArt = await prisma.book.create({
    data: {
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      coverImage: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg',
      description: 'A counterintuitive approach to living a good life. A book that challenges conventional wisdom about happiness and success.',
      amazonLink: 'https://www.amazon.com/dp/0062457713/?tag=moncodeaff',
      rating: 5,
      analysis: `# The Subtle Art of Not Giving a F*ck : Une Philosophie de Vie Contre-Intuitive

## Introduction et Contexte

"The Subtle Art of Not Giving a F*ck" de Mark Manson a révolutionné le genre du développement personnel en 2016. Contrairement aux livres traditionnels qui promettent le bonheur éternel, Manson propose une approche réaliste et parfois brutale de la vie.

Mark Manson, blogueur et auteur américain, s'est fait connaître par son style direct et sans fard. Son approche unique combine humour, philosophie existentielle et conseils pratiques pour créer un guide de vie authentique.

## La Philosophie Contre-Intuitive

### Le Paradoxe du Bonheur

Manson commence par déconstruire le mythe du bonheur constant. Il affirme que :
- La quête obsessionnelle du bonheur nous rend malheureux
- Les problèmes sont inévitables et nécessaires
- La souffrance a une valeur intrinsèque

### L'Art de Choisir ses Batailles

Le titre du livre résume sa philosophie centrale : nous devons apprendre à ne pas nous soucier de tout, mais à choisir soigneusement ce qui mérite notre attention et notre énergie.

## Analyse des Citations Clés

### "Life is essentially an endless series of problems. The solution to one problem is merely the creation of another."

Cette citation fondamentale révèle la nature de la vie humaine :

- **Les problèmes sont permanents** : Ils ne disparaissent jamais complètement
- **La résolution crée de nouveaux défis** : Chaque solution génère de nouveaux problèmes
- **L'acceptation est la clé** : Plutôt que de fuir les problèmes, nous devons les embrasser

### Contexte et Signification

Cette observation apparaît dans le premier chapitre, établissant le ton pour tout le livre. Manson utilise cette vérité pour expliquer pourquoi tant de personnes sont malheureuses malgré leurs succès apparents.

## Les Valeurs et leur Importance

### Définir ses Valeurs

Manson consacre une section importante à l'identification de nos valeurs personnelles :
- Les mauvaises valeurs créent de mauvais problèmes
- Les bonnes valeurs créent de bons problèmes
- Nous devons choisir nos valeurs consciemment

### Exemples de Bonnes Valeurs

Le livre propose plusieurs valeurs constructives :
- La responsabilité personnelle
- L'honnêteté
- La vulnérabilité
- L'acceptation de l'incertitude

## Applications Pratiques

### Dans la Vie Quotidienne

Les principes du livre s'appliquent à :
- Les relations personnelles
- La carrière professionnelle
- La santé mentale
- Les décisions importantes

### Exemples Concrets

Manson fournit de nombreux exemples :
- L'histoire de Dave Mustaine et Metallica
- Les expériences personnelles de l'auteur
- Des cas cliniques et des études

## Impact et Réception

### Succès Commercial

Le livre a connu un succès phénoménal :
- Plus de 15 millions d'exemplaires vendus
- Traduit dans plus de 50 langues
- Resté sur les listes de best-sellers pendant des années

### Critiques et Controverses

Le livre a également suscité des critiques :
- Langage parfois vulgaire
- Approche trop cynique pour certains
- Manque de solutions pratiques détaillées

## Influence sur le Développement Personnel

### Changement de Paradigme

Le livre a contribué à :
- Démystifier l'industrie du développement personnel
- Promouvoir une approche plus réaliste
- Encourager l'acceptation de la souffrance

### Nouvelle Génération d'Auteurs

L'influence de Manson se voit dans :
- Le style d'écriture direct
- L'approche contre-intuitive
- L'utilisation de l'humour noir

## Conclusion

"The Subtle Art of Not Giving a F*ck" reste un livre important pour plusieurs raisons :

1. **Réalisme** : Il offre une vision honnête de la vie
2. **Pratique** : Il fournit des outils concrets pour améliorer sa vie
3. **Philosophique** : Il s'appuie sur des principes existentiels solides
4. **Accessible** : Il présente des idées complexes de manière compréhensible

Le message central du livre - que nous devons choisir nos batailles et accepter les difficultés de la vie - continue de résonner avec des millions de lecteurs. C'est un rappel puissant que la vie n'est pas parfaite, mais qu'elle peut être significative et satisfaisante si nous apprenons à naviguer dans ses complexités avec sagesse et courage.`,
      quotes: {
        create: [
          {
            text: "Life is essentially an endless series of problems. The solution to one problem is merely the creation of another.",
            context: "Introduction de la philosophie réaliste de la vie",
            themes: "Problèmes, Réalisme, Acceptation",
            category: "Core Values"
          },
          {
            text: "Happiness comes from solving problems.",
            context: "Explication de la source du bonheur",
            themes: "Bonheur, Problèmes, Satisfaction",
            category: "Core Values"
          },
          {
            text: "Unhealthy values create unhealthy problems.",
            context: "Importance du choix des valeurs",
            themes: "Valeurs, Problèmes, Santé",
            category: "Core Values"
          },
          {
            text: "You are responsible for everything in your life, even if it's not your fault.",
            context: "Principe de responsabilité personnelle",
            themes: "Responsabilité, Contrôle, Pouvoir",
            category: "Personal Responsibility"
          },
          {
            text: "Truth is more important than comfort.",
            context: "Importance de l'honnêteté sur le confort",
            themes: "Vérité, Honnêteté, Croissance",
            category: "Authentic Living"
          }
        ]
      }
    }
  });

  // Can't Hurt Me
  const cantHurtMe = await prisma.book.create({
    data: {
      title: "Can't Hurt Me",
      author: 'David Goggins',
      coverImage: '/cant-hurt-me.jpg',
      description: "David Goggins, ancien Navy SEAL, partage son parcours hors du commun et ses méthodes pour repousser les limites mentales et physiques.",
      amazonLink: 'https://www.amazon.com/dp/1544512287/?tag=moncodeaff',
      rating: 5,
      analysis: `# Can't Hurt Me : L'Art de la Résilience Extrême

## Introduction et Contexte

"Can't Hurt Me" de David Goggins est plus qu'un simple livre de développement personnel - c'est un témoignage brut et inspirant d'un homme qui a transformé sa vie en repoussant constamment ses limites. Publié en 2018, ce livre raconte l'histoire incroyable d'un homme qui est passé de 300 livres en surpoids à Navy SEAL, ultramarathonien et recordman du monde.

David Goggins, ancien Navy SEAL, ultramarathonien et auteur, est devenu une figure emblématique du mental toughness. Son approche "no excuses" et sa philosophie de vie ont inspiré des millions de personnes dans le monde entier.

## La Philosophie du Mental Toughness

### Définition du Mental Toughness

Goggins définit le mental toughness comme la capacité de :
- Endurer l'inconfort extrême
- Persister malgré les échecs
- Se dépasser constamment
- Accepter la souffrance comme partie intégrante de la croissance

### Les Trois Piliers

Le livre s'articule autour de trois concepts fondamentaux :
1. **L'accountability mirror** : Se regarder en face et assumer ses responsabilités
2. **Le calloused mind** : Développer une mentalité endurcie
3. **Le 40% rule** : La règle selon laquelle nous n'utilisons que 40% de notre potentiel

## Analyse des Citations Clés

### "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential."

Cette citation emblématique résume la philosophie de Goggins :

- **Le danger du confort** : La vie moderne nous rend mous
- **Le potentiel inexploité** : Nous sommes capables de bien plus
- **L'urgence d'agir** : Le temps est limité

### Contexte et Signification

Cette phrase apparaît dans le contexte de la transformation personnelle de Goggins, illustrant comment le confort peut devenir notre pire ennemi.

## Les Méthodes de Transformation

### 1. L'Accountability Mirror

Goggins décrit cette technique comme :
- Se regarder dans le miroir chaque matin
- Se dire la vérité sur soi-même
- Prendre la responsabilité de ses échecs
- S'engager à s'améliorer

### 2. Le Calloused Mind

Le développement d'un esprit endurci implique :
- S'exposer volontairement à l'inconfort
- Pratiquer la discipline quotidienne
- Accepter la souffrance comme outil de croissance
- Développer la résilience mentale

### 3. Le 40% Rule

Cette règle révèle que :
- Nous abandonnons bien avant nos vraies limites
- Notre esprit nous limite plus que notre corps
- Nous devons apprendre à ignorer notre cerveau primitif

## Applications Pratiques

### Dans la Vie Quotidienne

Les principes de Goggins s'appliquent à :
- L'exercice physique
- Les objectifs professionnels
- Les relations personnelles
- Le développement de compétences

### Exemples Concrets

Le livre fournit de nombreux exemples :
- L'entraînement des Navy SEALs
- Les ultramarathons
- Les records du monde
- Les transformations personnelles

## Impact et Influence

### Succès Commercial

Le livre a connu un succès phénoménal :
- Plus de 2 millions d'exemplaires vendus
- Traduit dans de nombreuses langues
- Inspiré des millions de personnes

### Influence Culturelle

L'impact de Goggins se voit dans :
- Le mouvement du mental toughness
- Les programmes d'entraînement
- Les discussions sur la résilience
- Les réseaux sociaux

## Critiques et Controverses

### Aspects Controversés

Le livre a suscité des critiques :
- Approche trop extrême pour certains
- Risque de blessures physiques
- Manque de considération pour les limites individuelles

### Défense de l'Approche

Goggins défend sa méthode en arguant que :
- Chacun doit trouver ses propres limites
- L'extrême révèle nos vraies capacités
- La souffrance contrôlée est bénéfique

## Conclusion

"Can't Hurt Me" reste un livre puissant et inspirant qui :

1. **Défie nos limites** : Nous pousse à repenser nos capacités
2. **Inspire l'action** : Fournit des outils concrets pour s'améliorer
3. **Encourage la résilience** : Enseigne l'importance de la persévérance
4. **Transforme les vies** : A aidé des millions de personnes à se dépasser

Le message central du livre - que nous sommes capables de bien plus que nous le pensons - continue d'inspirer des personnes dans le monde entier. C'est un rappel puissant que la vraie liberté vient de la capacité à contrôler son esprit et à persister malgré les difficultés.

La philosophie de Goggins nous enseigne que la vie n'est pas facile, mais qu'elle peut être extraordinaire si nous sommes prêts à endurer l'inconfort nécessaire pour atteindre notre plein potentiel.`,
      quotes: {
        create: [
          {
            text: "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
            context: "Avertissement sur les dangers du confort moderne",
            themes: "Confort, Potentiel, Urgence",
            category: "Mental Toughness"
          },
          {
            text: "When you think you're done, you're only at 40% of your body's capability.",
            context: "Explication de la règle des 40%",
            themes: "Limites, Potentiel, Persévérance",
            category: "Overcoming Limits"
          },
          {
            text: "Don't stop when you're tired. Stop when you're done.",
            context: "Principe de persévérance et de détermination",
            themes: "Fatigue, Détermination, Objectifs",
            category: "Overcoming Limits"
          },
          {
            text: "Tell yourself the truth! That you've wasted enough time, and that you have other dreams that will take courage to realize.",
            context: "Technique de l'accountability mirror",
            themes: "Vérité, Courage, Rêves",
            category: "Accountability & Discipline"
          },
          {
            text: "You must own everything in your world. There is no one else to blame.",
            context: "Principe de responsabilité totale",
            themes: "Responsabilité, Contrôle, Pouvoir",
            category: "Accountability & Discipline"
          }
        ]
      }
    }
  });

  // Die with Zero
  const dieWithZero = await prisma.book.create({
    data: {
      title: 'Die with Zero',
      author: 'Bill Perkins',
      coverImage: '/Die-with-zero.jpg',
      description: 'A revolutionary guide to optimizing your life by spending your money and time wisely. Learn how to maximize your life experiences and die with zero regrets.',
      amazonLink: 'https://www.amazon.com/dp/0358099765/?tag=moncodeaff-20',
      rating: 5,
      analysis: `# Die with Zero : L'Art d'Optimiser sa Vie

## Introduction et Contexte

"Die with Zero" de Bill Perkins propose une approche révolutionnaire de la gestion de l'argent et du temps. Publié en 2020, ce livre remet en question les croyances traditionnelles sur l'épargne et la retraite, proposant une philosophie de vie qui maximise les expériences plutôt que l'accumulation de richesse.

Bill Perkins, entrepreneur et investisseur américain, a développé cette philosophie après avoir réalisé que l'accumulation de richesse n'était pas synonyme de bonheur. Son approche unique combine finance personnelle, psychologie et philosophie de vie.

## La Philosophie de l'Optimisation de Vie

### Le Principe Fondamental

Le titre du livre résume sa philosophie centrale : l'objectif n'est pas de mourir avec le plus d'argent possible, mais de mourir avec le plus d'expériences de vie possible. Perkins affirme que :

- L'argent est un outil pour vivre, pas un objectif en soi
- Les expériences ont plus de valeur que les possessions
- Le timing est crucial dans l'optimisation de la vie

### Le Concept de "Life Energy"

Perkins introduit le concept d'énergie vitale :
- Chaque dollar représente du temps de vie
- Nous devons dépenser cette énergie au bon moment
- La valeur des expériences diminue avec l'âge

## Analyse des Citations Clés

### "The goal is not to die with the most money, but to die with the most life experiences."

Cette citation fondamentale résume la philosophie du livre :

- **Redéfinition du succès** : Le succès se mesure en expériences, pas en dollars
- **Priorisation des expériences** : Les expériences ont plus de valeur que l'argent
- **Perspective de fin de vie** : L'important est de mourir sans regrets

### Contexte et Applications

Cette philosophie s'applique à tous les aspects de la vie :
- Décisions de carrière
- Choix de dépenses
- Planification de la retraite
- Relations personnelles

## Les Principes de l'Optimisation

### 1. L'Importance du Timing

Perkins consacre une section importante au timing :
- Les expériences ont plus de valeur quand on est jeune
- La santé et l'énergie diminuent avec l'âge
- Il faut équilibrer épargne et dépenses

### 2. La Valeur des Expériences

Le livre explore pourquoi les expériences sont plus précieuses :
- Elles créent des souvenirs durables
- Elles enrichissent notre personnalité
- Elles améliorent nos relations

### 3. L'Équilibre Financier

Perkins propose des stratégies pour :
- Épargner suffisamment pour la sécurité
- Dépenser pour les expériences importantes
- Éviter l'accumulation excessive

## Applications Pratiques

### Dans la Planification Financière

Les principes du livre s'appliquent à :
- La gestion du budget
- Les décisions d'investissement
- La planification de la retraite
- Les choix de carrière

### Exemples Concrets

Perkins fournit de nombreux exemples :
- Des études de cas personnelles
- Des calculs financiers détaillés
- Des stratégies d'optimisation
- Des témoignages de personnes qui ont appliqué ces principes

## Impact et Réception

### Succès Commercial

Le livre a connu un succès notable :
- Bestseller dans plusieurs pays
- Traduit dans de nombreuses langues
- Inspiré des discussions importantes sur la finance personnelle

### Influence sur la Finance Personnelle

L'impact du livre se voit dans :
- Les nouvelles approches de la planification financière
- L'importance croissante accordée aux expériences
- Les discussions sur l'équilibre vie-travail

## Critiques et Controverses

### Aspects Controversés

Le livre a suscité des critiques :
- Risque de sous-épargne
- Approche trop individualiste
- Manque de considération pour les inégalités sociales

### Défense de l'Approche

Perkins défend sa philosophie en arguant que :
- Chacun doit trouver son propre équilibre
- L'important est la conscience des choix
- Les expériences enrichissent la vie

## Conclusion

"Die with Zero" reste un livre important qui :

1. **Remet en question les croyances traditionnelles** : Sur l'épargne et la richesse
2. **Propose une approche équilibrée** : Entre sécurité financière et expériences de vie
3. **Encourage la réflexion** : Sur nos priorités et nos valeurs
4. **Fournit des outils pratiques** : Pour optimiser notre vie

Le message central du livre - que nous devons optimiser notre vie en équilibrant épargne et expériences - continue de résonner avec des millions de lecteurs. C'est un rappel puissant que l'argent est un moyen, pas une fin, et que les vraies richesses de la vie sont les expériences que nous créons et les relations que nous cultivons.

La philosophie de Perkins nous enseigne que la vie est trop courte pour la passer à accumuler de l'argent que nous ne pourrons jamais dépenser. L'important est de vivre pleinement, de créer des expériences significatives, et de mourir sans regrets.`,
      quotes: {
        create: [
          {
            text: "The goal is not to die with the most money, but to die with the most life experiences.",
            context: "Principe fondamental de l'optimisation de vie",
            themes: "Expériences, Argent, Objectifs",
            category: "Life Optimization"
          },
          {
            text: "You can't take it with you, so spend it while you can enjoy it.",
            context: "Importance de dépenser l'argent au bon moment",
            themes: "Argent, Timing, Jouissance",
            category: "Life Optimization"
          },
          {
            text: "Life is not about accumulating wealth, it's about accumulating experiences.",
            context: "Redéfinition de la richesse",
            themes: "Richesse, Expériences, Valeurs",
            category: "Life Optimization"
          },
          {
            text: "The key is to spend your money at the right time in your life.",
            context: "Importance du timing dans les dépenses",
            themes: "Timing, Argent, Optimisation",
            category: "Timing and Planning"
          },
          {
            text: "Happiness comes from experiences, not possessions.",
            context: "Source du bonheur",
            themes: "Bonheur, Expériences, Possessions",
            category: "Mindset and Philosophy"
          }
        ]
      }
    }
  });

  // Rich Dad Poor Dad
  const richDadPoorDad = await prisma.book.create({
    data: {
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      coverImage: '/Rich-dad-poor-dad.jpg',
      description: 'A personal finance classic that teaches the difference between working for money and having money work for you. Learn about assets, liabilities, and building wealth through financial education.',
      amazonLink: 'https://www.amazon.com/dp/1612680194/?tag=moncodeaff-20',
      rating: 5,
      analysis: `# Rich Dad Poor Dad : L'Éducation Financière Révolutionnaire

## Introduction et Contexte Historique

"Rich Dad Poor Dad" de Robert Kiyosaki, publié en 1997, a révolutionné la façon dont les gens pensent à l'argent et à la richesse. Ce livre autobiographique raconte l'histoire de Kiyosaki et de ses deux "pères" - son père biologique (Poor Dad) et le père de son meilleur ami (Rich Dad) - qui lui ont enseigné des leçons diamétralement opposées sur l'argent.

Robert Kiyosaki, entrepreneur et investisseur américain, a créé un empire financier basé sur les principes enseignés par son Rich Dad. Son approche unique de l'éducation financière a inspiré des millions de personnes dans le monde entier.

## La Philosophie de l'Éducation Financière

### Les Deux Mentalités

Le livre oppose deux approches fondamentales de l'argent :

**Poor Dad (Mentalité de l'Employé) :**
- Travaille pour l'argent
- Croit en l'éducation formelle
- Évite les risques
- Accumule des dettes

**Rich Dad (Mentalité de l'Investisseur) :**
- Fait travailler l'argent pour lui
- Privilégie l'éducation financière
- Gère les risques intelligemment
- Accumule des actifs

### Le Concept d'Actifs et de Passifs

Kiyosaki introduit une distinction cruciale :
- **Actifs** : Ce qui met de l'argent dans votre poche
- **Passifs** : Ce qui sort de l'argent de votre poche

Cette distinction simple mais puissante change complètement la façon de penser l'argent.

## Analyse des Citations Clés

### "The poor and the middle class work for money. The rich have money work for them."

Cette citation emblématique résume la philosophie centrale du livre :

- **La différence fondamentale** : Entre travailler pour l'argent et faire travailler l'argent
- **L'importance du système** : Les riches créent des systèmes qui génèrent de l'argent
- **Le changement de paradigme** : Passer de l'employé à l'investisseur

### Contexte et Signification

Cette observation apparaît dans le contexte des leçons de Rich Dad, illustrant pourquoi certaines personnes restent pauvres tandis que d'autres deviennent riches.

## Les Principes de la Richesse

### 1. L'Éducation Financière

Kiyosaki consacre une section importante à l'éducation :
- L'importance de comprendre l'argent
- La différence entre l'éducation formelle et financière
- L'apprentissage continu

### 2. La Création d'Actifs

Le livre explore comment :
- Identifier les vraies opportunités
- Créer des sources de revenus passifs
- Construire un portefeuille d'actifs

### 3. La Gestion des Risques

Kiyosaki explique comment :
- Évaluer les risques intelligemment
- Diversifier les investissements
- Apprendre de ses erreurs

## Applications Pratiques

### Dans la Vie Quotidienne

Les principes du livre s'appliquent à :
- Les décisions d'achat
- Les choix de carrière
- Les investissements
- La planification financière

### Exemples Concrets

Le livre fournit de nombreux exemples :
- L'histoire personnelle de Kiyosaki
- Des études de cas d'investissements
- Des stratégies d'accumulation d'actifs
- Des témoignages de réussite

## Impact et Influence

### Succès Commercial

Le livre a connu un succès phénoménal :
- Plus de 32 millions d'exemplaires vendus
- Traduit dans plus de 50 langues
- Inspiré une série de livres et de produits

### Influence Culturelle

L'impact de Kiyosaki se voit dans :
- Le mouvement de l'indépendance financière
- Les discussions sur l'éducation financière
- Les stratégies d'investissement
- Les approches de l'entrepreneuriat

## Critiques et Controverses

### Aspects Controversés

Le livre a suscité des critiques :
- Manque de détails techniques
- Approche parfois simpliste
- Controverses sur l'histoire personnelle de Kiyosaki

### Défense de l'Approche

Kiyosaki défend sa méthode en arguant que :
- L'important est le changement de mentalité
- Les détails techniques peuvent être appris
- L'histoire inspire plus que les chiffres

## Conclusion

"Rich Dad Poor Dad" reste un livre fondamental qui :

1. **Change les mentalités** : Remet en question les croyances traditionnelles sur l'argent
2. **Éduque financièrement** : Fournit les bases de l'intelligence financière
3. **Inspire l'action** : Encourage les lecteurs à prendre le contrôle de leur vie financière
4. **Crée un mouvement** : A inspiré des millions de personnes à investir et créer des actifs

Le message central du livre - que nous devons faire travailler l'argent pour nous plutôt que de travailler pour l'argent - continue d'inspirer des générations de lecteurs. C'est un rappel puissant que la vraie richesse vient de la création d'actifs et de l'éducation financière.

La philosophie de Kiyosaki nous enseigne que l'argent n'est pas le problème, mais notre compréhension de l'argent. En apprenant à distinguer les actifs des passifs et en développant notre intelligence financière, nous pouvons tous créer la liberté financière que nous désirons.`,
      quotes: {
        create: [
          {
            text: "The poor and the middle class work for money. The rich have money work for them.",
            context: "Différence fondamentale entre les mentalités",
            themes: "Argent, Travail, Richesse",
            category: "Financial Education"
          },
          {
            text: "It's not how much money you make, but how much money you keep.",
            context: "Importance de la gestion de l'argent",
            themes: "Argent, Gestion, Épargne",
            category: "Financial Education"
          },
          {
            text: "The single most powerful asset we all have is our mind.",
            context: "Importance de l'éducation et de la mentalité",
            themes: "Mentalité, Éducation, Pouvoir",
            category: "Financial Education"
          },
          {
            text: "The difference between the rich and the poor is how they handle fear.",
            context: "Gestion des émotions dans les finances",
            themes: "Peur, Richesse, Émotions",
            category: "Mindset & Philosophy"
          },
          {
            text: "The rich focus on opportunities. The poor focus on obstacles.",
            context: "Différence de perspective entre riches et pauvres",
            themes: "Opportunités, Obstacles, Perspective",
            category: "Mindset & Philosophy"
          }
        ]
      }
    }
  });

  console.log('✅ Database seeded successfully!');
  console.log(`📚 Created ${await prisma.book.count()} books`);
  console.log(`💬 Created ${await prisma.quote.count()} quotes`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 