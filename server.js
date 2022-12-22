const express= require('express')
const app=express();
const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');
const bodyParser=require('body-parser')
require('dotenv/config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Hello')
})

//routes
const getRoute=require('./userRoute')

app.use('/api/users',getRoute);



//Mongodb
//Z8JdPBhY6xYOVrY9
const connect_db=process.env.MONGODB_PASS
mongoose.connect(connect_db,{
    useNewUrlParser:true,
})

app.listen(8000);


/*api requests are:
crud
c:create :post
r:read is for get
u:update
d:delete
*/