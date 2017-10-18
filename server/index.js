const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/users');
mongoose.Promise = global.Promise;

// use body-parser middleware
app.use(bodyParser.json());
app.use(cors());

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});

// listen for requests
const port = 4000;
app.listen(process.env.port || port, function(){
    console.log('Server on - listening for requests at port '+port);
});