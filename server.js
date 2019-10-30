const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/gearheads'));

app.use('*', function (req, res) {
  res.sendFile(__dirname + '/dist/gearheads/index.html');
});

app.listen(process.env.PORT || 8080);