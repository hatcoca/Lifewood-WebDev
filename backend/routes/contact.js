const express = require('express');
const router = express.Router();
const { submitContact, getMessages, markAsReplied, deleteMessage } = require('../controllers/contactController');

router.post('/', submitContact);
router.get('/', getMessages);
router.patch('/:id/replied', markAsReplied);
router.delete('/:id', deleteMessage);

module.exports = router;
