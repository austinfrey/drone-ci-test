const http = require('http')
const ecstatic = require('ecstatic')(__dirname + '/public')

const server = http.createServer(ecstatic)

server.listen(5000)
