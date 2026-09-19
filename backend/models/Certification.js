const mongoose = require('mongoose');

const certificationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    issuer: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    link: String
  },
  {
    timestamps: true,
  }
);

const Certification = mongoose.model('Certification', certificationSchema);
module.exports = Certification;
