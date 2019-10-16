require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroller');
var sequelize = require('./db');

sequelize.sync(); //tip: {force: true} for resetting tables
app.use(express.json());
app.use(require('./middleware/headers'))
app.use(express.json())

/***Exposed Routes */
app.use('/test', test)
app.use('/api/user', user); 

/***Protected Routes */

app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

//you could aslo write it this way without the require statement above.
//app.use('/api/user', require('./controllers/usercontrollers;'));

app.listen(3000, function(){
    console.log('App is listening on 3000.') //5
});

//app.use('/api/test', function(req, res){
 //  res.send("This is data from the /api/test endpoint. It's from the server.");
//});


 


