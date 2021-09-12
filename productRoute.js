const express= require('express')
const router= express.Router();
const Product=require('./db')

// Get all products
router.get('/',async(req,res)=>{
    try{
    
        const products=await Product.find();
        res.json(products);
        
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
//GET product by id
router.get('/:product_id',async(req,res)=>{
    try{
        const product = await Product.findById(req.params.product_id);
        res.status(200).json(product);
    }catch(err){
        res.status(404).json({
            "status":"Product was not found..."
        })
    }
})

//POST 
router.post('/',async(req,res)=>{
    if(req.body.quantity<0){
        return res.status(416).json({
            "status":"failure",
            "reason":"quantity should be grater than 0"
        })
    }
    const product= new Product({
        name: req.body.name,
        category_name: req.body.category_name,
        description: req.body.description,
        buy_price: req.body.buy_price,
        sell_price: req.body.sell_price,
        quantity: req.body.quantity
    });
    try{
    const savedProduct=await product.save()
    res.status(201).json(savedProduct);
    }catch(err){
        res.status(400).json({
            "status": "failure",
            "reason": "request error"
        })
    }
})

//delete
router.delete('/:product_id',async(req,res)=>{
    try{
    const removeProduct= await Product.deleteOne({_id:req.params.product_id})
        res.status(204).json(removeProduct);
    }catch(err){
        res.status(400).json({
            "status":"failure",
            "reason":"Could not find the product to delete"
        })
    }
}
)
//PUT
router.patch("/:product_id",async(req,res)=>{
    try{
            const updatedProduct=await Product.updateOne(
                {_id:req.params.product_id},
                {
                    $set:{
                        name: req.body.name,
                        category_name: req.body.category_name,
                        description: req.body.description,
                        buy_price: req.body.buy_price,
                        sell_price: req.body.sell_price,
                        quantity: req.body.quantity
                    }
                }
            )
            res.status(200).json(updatedProduct)
        }catch(err){
            res.status(400).json({
                "status":"failure",
                "reason":"Could not Update the product..."
            })
        }
})

module.exports = router;
