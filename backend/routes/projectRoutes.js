const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getProjects, getProjectById, createProject, updateProject, deleteProject } = require('../controllers/projectController');

const router = express.Router();

router.route('/').get(getProjects).post(protect, createProject);
router.route('/:id').get(getProjectById).put(protect, updateProject).delete(protect, deleteProject);

module.exports = router;
