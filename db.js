const mongoose= require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    category_name:String,
    description:String,
    buy_price:Number,
    sell_price:Number,
    quantity:Number
})

module.exports=mongoose.model('products',productSchema)