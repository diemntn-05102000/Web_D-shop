const express = require("express");
const { sequelize,Op } = require('../databases/database');
// const app = express();
const router = express.Router();
const item = require('../models/item');
router.get('/',  (req, res) => {
    console.log('req: ', req.query.item_name);
    const search_item = req.query.item_name;
    item.findAll({ 
        where: {
            item_name: {
                [Op.iLike]: `%${search_item}%`
               
            }
        }}).then((data, message) =>{
            console.log(data);        
            res.json({data:data, message: "Ok"})
           
        }).catch((err)=>{
            console.log('err',err);
            res.status(401).send({
                message: 'Not found item.',
    
            });
        });
});
module.exports = router;