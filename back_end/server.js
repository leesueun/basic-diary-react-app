var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const cors = require('cors');
var connect = require('./model');

connect();
var app = express();

let corsOptions = {
    origin: 'https://www.domain.com',
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.urlencoded({extended:true}));
// app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/note' , require('./routes/note'));
app.use('/user' , require('./routes/user'));
app.use('/login', require('./routes/login'));

app.listen(5000, () => console.log(`Server listening on port 5000`));