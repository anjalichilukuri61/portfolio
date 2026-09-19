const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    description: String,
    responsibilities: [{
      type: String
    }],
    isEducation: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
