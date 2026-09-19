const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getMessages, createMessage, deleteMessage, markRead } = require('../controllers/messageController');

const router = express.Router();

router.route('/').get(protect, getMessages).post(createMessage);
router.route('/:id').delete(protect, deleteMessage);
router.route('/:id/read').put(protect, markRead);

module.exports = router;
