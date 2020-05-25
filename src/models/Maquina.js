const mongoose = require ("mongoose")
//aqui e o esquema de como o usuario vai ser cadastrado no BD
const MaquinaEsquema = new mongoose.Schema({
    serial :"Number",
    data : "Date",
    user:{
        //esta pegando o id do usuario que esta cadastrando a maquina
        type: mongoose.Schema.Types.ObjectId,
        //esta dizendo que e referente a tabela de usuarios
        ref:'Usuario'
    }
},)

module.exports = mongoose.model('Maquina',MaquinaEsquema)