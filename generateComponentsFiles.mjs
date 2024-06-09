import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Component, mongoose } from './src/lib/mongoose.js';

const outputDir = './src/components/';

async function generateComponentsFiles() {
  try {
    const components = await Component.find({}).lean();

    // Créez le répertoire de sortie s'il n'existe pas
    if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Générer un fichier de composant pour chaque composant
    for (const component of components) {
      const filePath = path.join(outputDir, `${component.name}.jsx`);
      fs.writeFileSync(filePath, component.content.trim());
      console.log(`Generated ${filePath}`);
    }

    console.log('Component files generated successfully.');
  } catch (error) {
    console.error('Error generating component files:', error);
  } finally {
    mongoose.connection.close();
  }
}

generateComponentsFiles();
