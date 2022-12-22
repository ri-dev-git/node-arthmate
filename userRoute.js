const express= require('express');
const router= express.Router();
const User=require('./db')

// Get all products
// /api/products/
router.get('/',async(req,res)=>{
    try{
    
        const users=await User.find();
        res.json(users);
        
    }
    catch(err){
        res.status(404).json(
            {
                "status":404,
                "reason":"Page Not Found"
            }
        )
    }
})

// /api/products/01
//GET product by id
router.get('/:product_id',async(req,res)=>{
    try{
        const product = await User.findById(req.params.product_id);
        res.status(200).json(product);
    }catch(err){
        res.status(404).json({
            "status":"User was not found..."
        })
    }
})

//POST 

module.exports = router;
