var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
