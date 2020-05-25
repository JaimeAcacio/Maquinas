const Usuario = require('../models/Usuario')

module.exports = {
 async  store(req, res){
     //esta parte esta mostrando que name e email vem de req.body
    const { email,senha } = req.body
    //aqui faz uma verificacao se o usuario ja existe no banco de dados
    const userExists = await Usuario.findOne({ email: email }) 
        if(userExists){ 
            return res.json(userExists) 
    }
//aqui faz a criacao do novo usuario
    const user = await Usuario.create({
            email,
            senha,
        })

        return res.json({user})
    }
}