const express = require('express');
const { updateHorario, listHorario } = require('../controllers/Horario');
const router = express.Router();

router.put('/update/:id', updateHorario);
router.get('/retrieve', listHorario);

module.exports = router;