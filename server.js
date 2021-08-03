let http = require('http')
const fs = require('fs')
const port = 1010
var express = require('express');
var path = require('path');
const server = express()

server.use(express.static('public'));
server.use('/css', express.static(__dirname + 'public/css'))
server.use('/js', express.static(__dirname + 'public/js'))

server.set ('views', './views')
server.set('view engine', 'ejs')

server.get('', (req, res) => {
    res.render('index')
})




server.listen(port, function(error) {
    if (error) {
        console.log('whoops', error)
    } else {
        console.log('Server is running on localhost:' + port)
    }
})