const User = require("../models/schemas/User");

const register = async (req, res) => {
    try {
        const { codigo, password } = req.body;
        let userFounded = await User.findOne({ codigo });
        if (userFounded) return res.status(400).json({ error: 'Usuario ya existe' })
        if (password.length < 4) return res.status(400).json({ error: 'La contraseña minimo 4 caracteres' });
        let user = new User(req.body);
        await user.save();
        return res.status(200).json({ ok: 'Su cuenta sido registrado correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

const login = async (req, res) => {
    try {
        const { codigo, password } = req.body;

        const userFounded = await User.findOne({ codigo });
        if (!userFounded) return res.status(400).json({ error: 'Usuario no encontrado' });
        if (userFounded.password != password) return res.status(400).json({ error: 'Contraseña incorrecta' });
        return res.status(200).json({ codigo: userFounded.codigo });
    } catch (error) {
        res.status(500).json({ error: 'Error on server' });
    }
}

module.exports = {
    register,
    login
}