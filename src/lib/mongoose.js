import mongoose from 'mongoose';
import 'dotenv/config';

const uri = process.env.MONGODB_URI;
mongoose.connect(uri);

const componentSchema = new mongoose.Schema({
  name: String,
  content: String,
});

// Vérifiez si le modèle existe déjà pour éviter de le redéfinir
const Component = mongoose.models.Component || mongoose.model('Component', new mongoose.Schema({
  name: String,
  content: String,
}));

async function getComponentById(id) {
  try {
    return await Component.findById(id).lean();
  } catch (error) {
    console.error('Error fetching component by ID:', error);
    throw error;
  }
}

export { Component, mongoose, getComponentById };
