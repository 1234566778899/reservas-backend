const express = require('express');
const { addCubiculo, listCubiculo } = require('../controllers/Cubiculo');

const router = express.Router();

router.post('/register', addCubiculo);
router.get('/retrieve', listCubiculo);

module.exports = router;