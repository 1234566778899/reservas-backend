const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect('mongodb+srv://61126863:CJ05yA55creGkCii@cluster0.iyqbg9l.mongodb.net/reservas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(db => console.log('db connected'))
    .catch(error => console.log(error));
