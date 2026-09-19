const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const connectDB = require('./config/db');

dotenv.config({ path: '../.env' });
connectDB();

async function fix() {
  try {
    const res = await Project.updateOne(
      { title: 'Handloom Connect' }, 
      { image: '/handloom.jpeg' } // Using .jpeg as specified by the user
    );
    console.log('Fixed Image:', res);
  } catch(e) {
    console.log(e);
  }
  process.exit();
}
fix();
