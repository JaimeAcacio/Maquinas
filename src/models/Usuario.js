const mongoose = require ("mongoose")

//aqui e o esquema de como o usuario vai ser cadastrado no BD
const UsuarioEsquema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    senha:{
        type:Number,
        required:true,
        select: false
    }
},
{
    //timestamps serve pra registrar quando foi modificado algo no BD
    timestamps:true,
})
module.exports = mongoose.model('Usuario',UsuarioEsquema)