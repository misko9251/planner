const express = require('express');
const app = express();
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');

app.use('/', homeRoute);

app.listen(process.env.PORT, ()=>{
    console.log('We are running.');
})