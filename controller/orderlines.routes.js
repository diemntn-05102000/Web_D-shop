const express = require("express");
const router = express.Router();
const orderlines = require('../models/orderlines');
const bill = require('../models/bill');
const item = require('../models/item');
/* Orderlines*/
router.get('/', async(req, res)=> {
    
    let {
        bill_id ,
        item_id ,
        amount } = req.body
    try {
        let newOrder = await orderlines.create({
            
            bill_id ,
            item_id ,
            amount 
        },{
            fields: ["bill_id","item_id","amount"]
        });
        if(newOrder){
            res.json({
                result: 'OK',
                data: newOrder
            });
        }else{
            res.json({
                result: 'failed',
                data: {},
                message: 'Insert failed'
            }); 
        }
    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: 'Insert failed, error'
        }); 
    }
//   res.json({
//       data: "You send a POST request"
  //});
});
module.exports = router;