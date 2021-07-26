const express = require("express");
const router = express.Router();
const { Sequelize, Op } = require('../databases/database');
const cart = require('../models/cart');
const items = require('../models/item');

router.post('/', async(req, res)=> {
   
   
    cart.findAll({
         where:{
            user_name: req.body.user_name
         }
        }).then(data => {
            var arrayItemId = [];
            var arrayAmount = [];
            for (let i = 0; i < data.length; i++) {
                arrayItemId[i] = data[i].item_id;
                arrayAmount[i] = data[i].amount;
            }
                items.findAll({
                    where: {
                        item_id :  {
                            [Op.in]: arrayItemId,
                          },
                    }
                }).then(data => {
                    res.json({data:data, amount: arrayAmount, itemId: arrayItemId, status:201})
                });
                
            
        
        
        }).catch((err) => {
            console.log('err',err);
            
        });
});
module.exports = router;
