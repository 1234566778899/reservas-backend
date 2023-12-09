const Horario = require('../models/schemas/Horario');

const updateHorario = async (req, res) => {
    try {
        const { estado } = req.body;
        const { id } = req.params;
        await Horario.findOneAndUpdate({ _id: id }, { estado });
        return res.status(200).json({ ok: 'Horario Actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error on server' });
    }
}
const listHorario = async (req, res) => {
    try {
        const horarios = await Horario.find().sort({ hora: 1 });
        return res.status(200).json(horarios);
    } catch (error) {
        return res.status(500).json({ error: 'Error on server' });
    }
}
module.exports = {
    updateHorario,
    listHorario
}