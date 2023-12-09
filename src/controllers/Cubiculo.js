const Cubiculo = require('../models/schemas/Cubiculo');

const addCubiculo = async (req, res) => {
    try {
        const { nombre, ubicacion, zona } = req.body;
        const cubiculoFounded = await Cubiculo.findOne({ $and: [{ nombre }, { ubicacion }, { zona }] });
        if (cubiculoFounded) return res.status(400).json({ error: 'Ya existe el cubículo' });
        const cubiculo = new Cubiculo(req.body);
        await cubiculo.save();
        return res.status(200).json({ ok: 'Cubiculo registrado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error on server' });
    }
}

const listCubiculo = async (req, res) => {
    try {
        const cubiculos = await Cubiculo.find();
        return res.status(200).json(cubiculos);
    } catch (error) {
        return res.status(500).json({ error: 'Error on server' });
    }
}
module.exports = {
    addCubiculo,
    listCubiculo
}