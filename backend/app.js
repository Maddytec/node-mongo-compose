const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyPaser = require('body-parser')
const cors = require('cors')

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Middlewares
server.use(bodyPaser.urlencoded({extended:true}))
server.use(bodyPaser.json())
server.use(cors())

// ODM
const Ativo = restful.model('Ativo', { 
    codigo: { type: String, require: true },
    descricao: { type: String, require: true }
})

// Rest API
Ativo.methods(['get', 'post', 'put', 'delete'])
Ativo.updateOptions({new: true, runValidators: true})

// Routes
Ativo.register(server, '/ativos') 

// Start Server
server.listen(3000)
