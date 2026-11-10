const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets.controller');

router.get('/tickets', ticketsController.getAllTickets);
router.get('/tickets/:id', ticketsController.getTicketById);
router.post('/tickets', ticketsController.createTicket);

module.exports = router;
