const express = require('express');
const app = express();
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')

app.use('/', homeRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Running on Port ${process.env.PORT}`)
})  
