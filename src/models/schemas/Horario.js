const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({
    hora: Number,
    estado: String,
})

module.exports = model('horario', HorarioSchema);