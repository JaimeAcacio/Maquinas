const express = require('express')
const ControllerUsuario = require('./controllers/ControllerUsuario')
const ControllerMaquina = require('./controllers/ControllerMaquina')

//esta sendo passada para a variavel rota um metodo do express chamado Router
const rota = express.Router()




//rota de cadastro de usuarios
rota.post('/usuarios',ControllerUsuario.store)
//rota de registro de maquina
rota.post('/maquinas',ControllerMaquina.store)

rota.get('/maquinas',ControllerMaquina.index)

module.exports = rota