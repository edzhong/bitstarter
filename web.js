var express = require('express');

var app = express.createServer(express.logger());

var hellovar = new Bufer(28);
hellovar.write(fs.readFile(index.html));

app.get('/', function(request, response) {
  response.send(hellovar.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
