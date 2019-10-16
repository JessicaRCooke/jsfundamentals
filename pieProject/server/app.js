require('dotenv').config();

const express = require('express'); //creating express applicatoin
const app = express(); 

const pies = require('./controllers/piecontroller'); //importing the controllers
const user = require('./controllers/usercontroller');

const sequelize = require('./db');  //importing the database

sequelize.sync();
app.use(express.json());  //sending and receiving json data
app.use(require('./middleware/headers'));

app.use('/pies', pies); 
app.use('/auth', user);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));




//app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

//app.get('/', (req, res) => res.render('index'));