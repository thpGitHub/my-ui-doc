# Projet de Documentation

Ce projet génère de la documentation pour les composants React en utilisant Astro et Starlight. La documentation inclut des pages générées automatiquement pour chaque composant, affichant à la fois le composant rendu et son code source.

## Configuration

### Prérequis

- Node.js
- MongoDB

### Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/thpGitHub/my-ui-doc.git
   cd my-ui-doc 
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :

    Créez un fichier .env à la racine de votre projet et ajoutez votre chaîne de connexion MongoDB :

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   ```

## Génération des Composants et de la Documentation

  Ce projet inclut des scripts pour générer les fichiers de composants React et les fichiers de documentation correspondants à partir d'une base de données MongoDB.

1. Générer les Fichiers de Composants React

    Le script `generateComponentsFiles.mjs` récupère les composants depuis la base     de données MongoDB et génère des fichiers de composants React dans le répertoire       `src/components/`.

2. Générer les Fichiers de Documentation

    Le script `generateDocsFiles.mjs` récupère les composants depuis la base de     données MongoDB et génère des fichiers de documentation Markdown (MDX) dans le  répertoire `src/content/docs/components/`. Chaque fichier de documentation   inclut le composant rendu et son code source.

3. Générer la Configuration de la Barre Latérale

    Le script `generateSidebarConfig.mjs` génère le fichier de configuration de la  barre latérale `sidebar.config.json` utilisé par Astro Starlight.

## Lancer le Serveur de Développement

Pour démarrer le serveur de développement et générer les composants, les fichiers de documentation et la configuration de la barre latérale, exécutez :

```bash
npm run dev
```

Cette commande va :

- Générer les fichiers de composants React depuis la base de données.
- Générer les fichiers de documentation pour chaque composant.
- Générer le fichier de configuration de la barre latérale.
- Démarrer le serveur de développement Astro.

## Construire le Projet

Pour construire le projet pour la production, exécutez :

```bash
npm run build
```

Cette commande effectuera les mêmes étapes que la commande de développement, mais elle construira également le projet pour le déploiement.

## Conclusion

Cette configuration vous permet de générer dynamiquement de la documentation pour vos composants React à partir d'une base de données MongoDB.
