const express = require('express');
const { sequelize } = require('../databases/database');
const router = express.Router();
const item = require('../models/item');
/* GET home page. */
router.get('/', function(req, res, next) {
  Promise.all([
    item.findAll({
    order: [
      ['sold', 'DESC'],
    ],
    limit: 10,
    }), 
    item.findAll({
    where:{
      theme: ['Váy'],
    },
    order: [
      ['sold', 'DESC'],
    ],
    limit: 5,
  }),
  item.findAll({
    where:{
      theme: ['Áo'],
    },
    order: [
      ['sold', 'DESC'],
    ],
    limit: 5,
  }),
  item.findAll({
    where:{
      theme: ['Quần'],
    },
    order: [
      ['sold', 'DESC'],
    ],
    limit: 5,
  }),
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
