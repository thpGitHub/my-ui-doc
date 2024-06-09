import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement

// Chargez la configuration de la sidebar générée
const sidebarConfig = JSON.parse(fs.readFileSync('./sidebar.config.json', 'utf-8'));

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    astroExpressiveCode(),
    mdx(),
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: sidebarConfig,
    }),
  ],
});
