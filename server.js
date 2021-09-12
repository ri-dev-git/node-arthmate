const express= require('express')
const app=express();
const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');
const bodyParser=require('body-parser')
require('dotenv/config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('arthmate')
})

//routes
const getRoute=require('./productRoute')
app.use('/api/products',getRoute);



//Mongodb
//Z8JdPBhY6xYOVrY9
const connect_db='mongodb+srv://rishi:Z8JdPBhY6xYOVrY9@cluster0.nvf4z.mongodb.net/ecommercedb?retryWrites=true&w=majority'
mongoose.connect(connect_db,{
    useNewUrlParser:true,
})

app.listen(8000);