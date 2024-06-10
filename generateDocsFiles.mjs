import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Component, mongoose } from './src/lib/mongoose.js';

const outputDir = './src/content/docs/components/';

async function generateDocsFiles() {
  try {
    const components = await Component.find({}).lean();

    // Créez le répertoire de sortie s'il n'existe pas
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Générer un fichier de documentation pour chaque composant
    for (const component of components) {
      const importStatement = `import { ${component.name} } from 'my-react-ui-components';`;
      const content = `
---
title: "${component.name}"
---

import ${component.name} from '../../../components/${component.name}.jsx';
import { Code } from '@astrojs/starlight/components';

<${component.name} />

## Import

<Code code={\`${importStatement}\`} lang="bash" />

## Code

<Code code={\`${component.content}\`} lang="js" title="${component.name}.jsx" />
      `;

      const filePath = path.join(outputDir, `${component.name}.mdx`);
      fs.writeFileSync(filePath, content.trim());
      console.log(`Generated ${filePath}`);
    }

    console.log('Docs files generated successfully.');
  } catch (error) {
    console.error('Error generating docs files:', error);
  } finally {
    mongoose.connection.close();
  }
}

generateDocsFiles();
