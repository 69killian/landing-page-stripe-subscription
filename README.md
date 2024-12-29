# (FR) Stripint
![Logo](logostripint.png)

[![Lien du site déployé]()](https://landing-page-stripe-subscription.vercel.app/)

Force de mes 2 années d'expériences, et de mon travail acharné pour améliorer mes process et mes designs signatures pour mes sites, je suis fier de vous présenter un de mes meilleurs projets : **Stripint**, une solution (fictive) qui est une solution d'intégration Stripe pour vos sites internet en quelques minutes ! 

Plusieurs options de pricing sont incluses pour ce service :
- **Un paiement au mois** : c'est un model très populaire et utile pour des utilisations uniques
- **Un prix à l'année** : Ce prix est idéal pour les projets nécessitant une intégration Stripe plus complète et longue !

## Fonctionnalités
- **Authentification sécurisée** via [Kinde](https://kinde.com).
- **Gestion des abonnements** avec Stripe (paiements mensuels et annuels)
- **Webhooks Stripe** pour une synchronisation en temps réel des paiements et des abonnements
- **Base de données** MongoDB optimisée grâce à Prisma ORM, que j'ai pu découvrir en même temps que la réalisation du projet
- **Interface utilisateur moderne** et responsive avec Next.js et Tailwind
- **Backend géré par TypeScript** pour plus de robustesse et de maintenabilité du code

## Objectifs
Mon objectif principal à travers Stripint est de démontrer :
1. Une intégration fluide de Stripe sur un site web
2. Une gestion avancée des abonnements et des paiements
3. L'utilisation de technologies modernes pour créer une application SaaS rapide, fiable et esthétiquement agréable à visiter

## Technologies Utilisées
- **Next.js** : Rendu côté serveur et l'optimisation des performances
- **Tailwind** : Designs rapides et évolutifs, faciles à reprendre
- **Prisma ORM** : Très utile pour la gestion des interactions avec MongoDB de manière simple
- **MongoDB** : Base de données NoSQL rapide a créer
- **TypeScript** : Pour un code typé et une meilleure qualité de développement sans erreurs
- **Kinde** : Solution d'authentification sécurisée grâce au prestataire
- **Stripe** : Gestion des paiements et des abonnements du site

## Installation
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-nom-utilisateur/stripint.git
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Configurez les variables d'environnement :
   - Créez un fichier `.env` à la racine.
   - Ajoutez les clés nécessaires :
     ```env
     DATABASE_URL=... # URL MongoDB
     STRIPE_SECRET_KEY=... # Clé secrète Stripe
     KIND_API_KEY=... # Clé API Kinde
     NEXTAUTH_URL=... # URL de l'application
     ```
4. Lancez l'application :
   ```bash
   npm run dev
   ```

## Démonstration
![Screenshot](black.png) ![Screenshot](white.png)


---

<br><br><br><br><br><br><br><br><br>

# (ENG) Stripint

[![Online Demo]()](https://landing-page-stripe-subscription-gt5rnuxa3-69killians-projects.vercel.app/)

After two years of experience and hard work refining my processes and signature designs for my websites, I am proud to present one of my best projects: **Stripint**, a (fictional) solution for integrating Stripe into your websites in just minutes!

Several pricing options are included for this service:
- **Monthly subscription**: Very popular and useful for one-time use cases.
- **Annual subscription**: Ideal for projects requiring a more comprehensive Stripe integration.

## Features
- **Secure authentication** using [Kinde](https://kinde.com).
- **Subscription management** with Stripe (monthly and yearly payments).
- **Stripe webhooks** for real-time synchronization of payments and subscriptions.
- **MongoDB database** optimized with Prisma ORM.
- **Modern, responsive UI** built with Next.js and Tailwind CSS.
- **Fully TypeScript-based code** for robustness and maintainability.

## Goals
The main goal of Stripint is to demonstrate:
1. Seamless Stripe integration into a website.
2. Advanced subscription and payment management.
3. The use of modern technologies to create a fast, reliable, and visually appealing SaaS application.

## Technologies Used
- **Next.js**: React framework for server-side rendering and performance optimization.
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent design.
- **Prisma ORM**: Simplified and efficient interactions with MongoDB.
- **MongoDB**: Scalable and robust NoSQL database.
- **TypeScript**: For type-safe and high-quality development.
- **Kinde**: Secure, ready-to-use authentication solution.
- **Stripe**: Payment and subscription management.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/stripint.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file at the root.
   - Add the required keys:
     ```env
     DATABASE_URL=... # MongoDB URL
     STRIPE_SECRET_KEY=... # Stripe secret key
     KIND_API_KEY=... # Kinde API key
     NEXTAUTH_URL=... # Application URL
     ```
4. Start the application:
   ```bash
   npm run dev
   ```

## Demo
![Screenshot](black.png) ![Screenshot](white.png)
