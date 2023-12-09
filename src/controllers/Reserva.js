const Reserva = require('../models/schemas/Reserva');


const addReserva = async (req, res) => {
    try {
        const { usuario, fechaReserva, horario, cubiculo } = req.body;
        const reservaFounded = await Reserva.findOne({ $and: [{ "usuario.codigo": usuario.codigo }, { fechaReserva }] });
        if (reservaFounded) return res.status(400).json({ error: 'No puedes registrar más de una reserva en un solo dia' });
        const existReserva = await Reserva.findOne({ $and: [{ fechaReserva }, { horario: { $in: horario } }, { "cubiculo._id": cubiculo._id }] });
        if (existReserva) return res.status(400).json({ error: 'Ya esta reservado ese horario' });
        const reserva = new Reserva(req.body);
        await reserva.save();
        return res.status(200).json({ ok: 'Reserva realizado con exito' });
    } catch {
        res.status(500).json({ error: 'Error on server' });
    }
}
const listReserva = async (req, res) => {
    try {
        const reservas = await Reserva.find();
        return res.status(200).json(reservas);
    } catch {
        return res.status(500).json({ error: 'Error on server' });
    }
}

const getReservaFecha = async (req, res) => {
    try {
        const { date } = req.body;
        const reservas = await Reserva.find({ fechaReserva: date })
        return res.status(200).json(reservas);
    } catch {
        return res.estatus(500).json({ error: 'Error on server' });
    }
}

module.exports = {
    addReserva,
    listReserva,
    getReservaFecha
}