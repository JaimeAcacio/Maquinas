//nas duas linhas e importado o express e passado para a variavel server
const express = require('express')
const server = express()
const mongoose = require('mongoose')
const cors = require('cors')
//aqui eu importo meu arquivo de rotas
const rotas = require('./routes')


//aqui e feita a conexao com banco de dados
mongoose.connect('mongodb+srv://Teste:rosemary56@cluster0-bj8ju.mongodb.net/PrimeiroApp?retryWrites=true&w=majority',
{userNewUrlParser:true})

server.use(cors())
//aqui esta sendo declarado ao express que eu vou usar json
server.use(express.json())
//aqui estou dizendo que vou usar as rotas
server.use(rotas)

//aqui estou criando a porta de entrada do servidor
server.listen(3333);


