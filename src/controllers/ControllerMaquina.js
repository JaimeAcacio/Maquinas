const Maquina = require('../models/Maquina')

module.exports = {
    async index( req, res){
        //pego o usuario que esta logado
        const {user} = req.headers
        // e coloco dentro da variavel maquinas filtrando pelo id
        const maquinas = await Maquina.find({user})
        
        return res.json(maquinas)
    },

 async  store(req, res){
     //esta parte esta mostrando que maquinas e date vem de req.body
    const { serial } = req.body

    const {user} = req.headers
//aqui faz a criacao do novo usuario
    const maquina = await Maquina.create({
            serial,
            data :Date.now(),
            user : user
        })

        return res.json({maquina})
    }
}