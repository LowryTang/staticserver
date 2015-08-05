var finalhandler = require('finalhandler')
var https = require('https')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('public');

// Create server
var server = https.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})

// Listen
server.listen(3000);
