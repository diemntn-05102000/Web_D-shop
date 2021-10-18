const express = require("express");
const router = express.Router();
const cart = require('../models/cart');
router.post('/', async(req, res)=> {
    
     console.log('req.body',req.body);
    
        cart.findOne({ 
            where:{
                user_name: req.body.user_name, 
                item_id: req.body.item_id
            }
        }).then(data =>{
            if(data == null){

                cart.create({
                    user_name: req.body.user_name,
                    item_id: req.body.item_id,
                    amount: 1,
                
                },{
                    fields: ["user_name","item_id","amount"]
                }).then(data => {
                    res.json({data:data, message: "Add item succeeded!!!"})
                });
            }else{
                cart.update({
                    amount : data.amount +1,

                 },{
                     where:{
                      user_name: req.body.user_name, 
                      item_id: req.body.item_id
                     }
                }).then(data => {
                 res.json({data:data, message: "Item existed in cart"})
        });
    

        }
    }).catch(err=>{
        console.log('err', err);
    });
   
    
});
module.exports = router;
