const { Schema, model } = require('mongoose');

const ReservaSchema = Schema({
    fechaReserva: Date,
    horario: [Number],
    estado: String,
    usuario: {
        codigo: String
    },
    cubiculo: {
        nombre: String,
        ubicacion: String,
        zona: String,
        capacidad: String,
        _id: String
    }
}, { timestamps: true })

module.exports = model('reserva', ReservaSchema);