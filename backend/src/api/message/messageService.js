const Message = require('./message')
const ErrorHandler = require('../common/errorHandler')

Message.methods(['get', 'post', 'delete'])
Message.after('post', ErrorHandler)

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