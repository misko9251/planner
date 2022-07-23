const express = require('express');
const app = express();
const mongoose = require('mongoose');
const homeRoute = require('./routes/home');
const toDoRoutes = require('./routes/planner');
const toShopRoutes = require('./routes/groceries');
const toEatRoutes = require('./routes/restaurant');
const choresRoutes = require('./routes/chores');
const connectDB = require('./config/database');

require('dotenv').config({path: './config/.env'});

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoute);
app.use('/planner', toDoRoutes);
app.use('/groceries', toShopRoutes);
app.use('/restaurant', toEatRoutes);
app.use('/chores', choresRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Running on Port ${process.env.PORT}`);
})  
