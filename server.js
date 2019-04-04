const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function(req, res) {
  res.json({"ipaddress":req.headers['x-forwarded-for'] || req.connection.remoteAddress, "language":req.headers["accept-language"],
  "software":req.headers["user-agent"]});
});

const port = process.env.PORT || 3000;

const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});