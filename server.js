let http = require('http')
const fs = require('fs')
const port = 1010

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html' })
    fs.readFile('index.html', function(error, data){
        if (error) {
            res.writeHead(400)
            res.write('Could not find file')
        } else {
            res.write(data)
        }
      res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('whoops', error)
    } else {
        console.log('Server is running on localhost:' + port)
    }
})