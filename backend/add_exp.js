const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Experience = require('./models/Experience');
const connectDB = require('./config/db');

dotenv.config({ path: '../.env' });
connectDB();

async function addExp() {
  try {
    // Check if it already exists to avoid duplicates
    const exists = await Experience.findOne({ role: 'Marketing Intern', company: 'Shaastra, IIT Madras' });
    if (!exists) {
      const exp = new Experience({
        role: 'Marketing Intern',
        company: 'Shaastra, IIT Madras',
        period: 'October 2024 – January 2025',
        description: 'Worked as a Marketing Intern at Shaastra, IIT Madras, promoting events and handling outreach activities.',
        responsibilities: [
          'Communication',
          'Teamwork',
          'Professional interaction',
          'Participant coordination'
        ]
      });
      await exp.save();
      console.log('Successfully added Marketing Intern experience!');
    } else {
      console.log('Experience already exists in the database.');
    }
  } catch (error) {
    console.error('Error adding experience:', error);
  }
  process.exit();
}

addExp();
