var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Users = require('./routes/Users');
const NewPositions = require('./routes/NewPositions');



var app = express();
var port = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use('/users', Users);
app.use('/jobs', NewPositions);

app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
