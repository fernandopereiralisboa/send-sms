const Message = require('./message')

Message.methods(['get', 'post', 'delete'])

Message.route('count', (req, res, next) => {
    Message.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Message