var express = require('express');

var app = express.createServer(express.logger());

var redis = require('redis-url').createClient(process.env.REDISTOGO_URL);

redis.set('foo', 'bar');

app.get('/', function(request, response) {
  redis.get('foo', function(err, value) {
    response.send('Hello World! ' + value);
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
