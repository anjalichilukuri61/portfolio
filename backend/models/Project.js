const mongoose = require('mongoose');

const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: true,
    },
    problem: String,
    solution: String,
    category: [{
      type: String
    }],
    techStack: [{
      type: String
    }],
    features: [{
      type: String
    }],
    github: String,
    liveDemo: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
