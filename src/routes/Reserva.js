const express = require('express');
const { addReserva, listReserva, getReservaFecha } = require('../controllers/Reserva');


const router = express.Router();

router.post('/register', addReserva);
router.get('/retrieve', listReserva);
router.post('/date/retrieve', getReservaFecha);



module.exports = router;