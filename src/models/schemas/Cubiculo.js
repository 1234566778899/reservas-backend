const { Schema, model } = require('mongoose');

const CubiculoSchema = Schema({
    nombre: String,
    ubicacion: String,
    zona: String,
    capacidad: Number
})

module.exports = model('cubiculo', CubiculoSchema);