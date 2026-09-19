const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getExperiences, createExperience, updateExperience, deleteExperience } = require('../controllers/experienceController');

const router = express.Router();

router.route('/').get(getExperiences).post(protect, createExperience);
router.route('/:id').put(protect, updateExperience).delete(protect, deleteExperience);

module.exports = router;
