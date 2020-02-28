const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

server.get('/', (req, res, next) => res.send('Backend'))

server.listen(3000)
