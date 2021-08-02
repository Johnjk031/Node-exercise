let http = require('http')
const fs = require('fs')
const port = 1010

const server = http.createServer(function(req, res) {
    res.write('Hello Node World')
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.log('whoops', error)
    } else {
        console.log('Server is running on localhost:' + port)
    }
})