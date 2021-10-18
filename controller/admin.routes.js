const express = require('express');
const { sequelize } = require('../databases/database');
const router = express.Router();
const item = require('../models/item');
const user = require('../models/users');
/* GET home page. */
router.get('/item-list', function(req, res, next) {
  Promise.all([
    item.findAll({
    order: [
      ['sold', 'DESC'],
    ],
    
    })
    
]).then(data => {
    // data [0] is products
    // data [1] is variationProducts 
    res.json({data:data, status:201})


}).catch((err) => {
    console.log('err',err);
    res.json({status:401, message:"fail"});
});

});
router.get('/user-list', function(req, res, next) {
  Promise.all([
    user.findAll({
    // order: [
    //   ['sold', 'DESC'],
    // ],
    
    })
    
]).then(data => {
    // data [0] is products
    // data [1] is variationProducts 
    res.json({data:data, status:201})


}).catch((err) => {
    console.log('err',err);
    res.json({status:401, message:"fail"});
});

});
module.exports = router;
