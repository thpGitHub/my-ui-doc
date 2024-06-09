import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Component, mongoose } from './src/lib/mongoose.js';

const outputDir = './src/content/components/';

async function generateMdxFiles() {
  try {
    const components = await Component.find({}).lean();

    // Créez le répertoire de sortie s'il n'existe pas
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Générer un fichier MDX pour chaque composant
    for (const component of components) {
      const content = `
---
title: "${component.name}"
---

import React from 'react';

# ${component.name}

<div dangerouslySetInnerHTML={{ __html: \`${component.content}\` }}></div>

\`\`\`jsx
${component.content}
\`\`\`
      `;

      const filePath = path.join(outputDir, `${component._id}.mdx`);
      fs.writeFileSync(filePath, content.trim());
      console.log(`Generated ${filePath}`);
    }

    console.log('MDX files generated successfully.');
  } catch (error) {
    console.error('Error generating MDX files:', error);
  } finally {
    mongoose.connection.close();
  }
}

generateMdxFiles();
