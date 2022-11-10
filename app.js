const express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 4000 ;
const HOST = process.env.HOST ||  'http://localhost' ;

const app = express();
app.use(express.json());  
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));

var Router = require('./route/index');
app.use('/', Router );

app.listen(PORT,()=>{
	console.log(`App is running on ${HOST}:${PORT}`);
})