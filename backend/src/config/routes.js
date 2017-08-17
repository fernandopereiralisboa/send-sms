const express = require('express')

module.exports = function(server) {
    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de mensagens
    const Message = require('../api/message/messageService')
    Message.register(router, '/messages')
}