const express = require('express');
const path = require('path');

// init
const app = express();

// setting
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.urlencoded({ extended: false })); // tartar de comvertir datos en un objeto json

// global var

// routes
app.get('/', (req, res) => {
    res.send('welcome!!');
})

// static file
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;