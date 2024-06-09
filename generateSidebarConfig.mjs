import { Component, mongoose } from './src/lib/mongoose.js';
import fs from 'fs';
import 'dotenv/config';

async function generateSidebarConfig() {
  try {
    const components = await Component.find({}).lean();

    const sidebarConfig = [
      {
        label: 'Guides',
        items: [
          { label: 'Example Guide', link: '/guides/example/' },
        ],
      },
      {
        label: 'Reference',
        autogenerate: { directory: 'reference' },
      },
      {
        label: 'Components',
        items: components.map(component => ({
          label: component.name,
          link: `/components/${component._id}`,
        })),
      },
    ];

    fs.writeFileSync('sidebar.config.json', JSON.stringify(sidebarConfig, null, 2));
    console.log('Sidebar configuration generated successfully.');
  } catch (error) {
    console.error('Error generating sidebar configuration:', error);
  } finally {
    mongoose.connection.close();
  }
}

generateSidebarConfig();
