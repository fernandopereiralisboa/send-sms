const restful = require('node-restful')
const mongoose = restful.mongoose

const messageSchema = new mongoose.Schema({
    to: { type: String, required: true },
    from: { type: String, required: true },
    body: { type: String, required: true },
    media: { type: String, required: false }
})

module.exports = restful.model('Message', messageSchema)