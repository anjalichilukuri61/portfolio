const mongoose = require('mongoose');

const skillSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    skills: [{
      type: String
    }],
  },
  {
    timestamps: true,
  }
);

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;
