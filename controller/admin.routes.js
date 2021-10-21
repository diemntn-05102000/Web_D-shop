const express = require('express');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../databases/database');
const router = express.Router();
const item = require('../models/item');
const users = require('../models/users');
const orderlines = require('../models/orderlines');
const bills = require('../models/bills');
router.get('/item-list', function(req, res, next) {
  
  if(req.query.sold == 'desc'){
      Promise.all([
        item.findAll({
        order: [
          ['sold', 'DESC'],
        ],
        
        })
        
      ]).then(data => {
          res.json({data:data, status:201})
      
      }).catch((err) => {
          console.log('err',err);
          res.json({status:401, message:"fail"});
      });
  }else{
    Promise.all([
      item.findAll({
      order: [
        ['sold', 'ASC'],
      ],
      
      })
      
    ]).then(data => {
        res.json({data:data, status:201})
    
    }).catch((err) => {
        console.log('err',err);
        res.json({status:401, message:"fail"});
    });
  }
  

});
router.get('/user-list',async function(req, res, next) {
  var requestBought = req.query.bought;
  var requestGender = req.query.gender;
  var users = null;
  console.log('123',requestGender)
  if(requestGender === 'undefined'|| requestGender === 'null'){
    
    users = await sequelize.query(
      `SELECT u.user_name, u.date_birth, u.gender,u.province,u.district,u.email,u.phone, coalesce(SUM(amount),0) as bought FROM users u LEFT JOIN bills b ON u.user_name = b.user_name LEFT JOIN orderlines o ON b.bill_id = o.bill_id group by u.user_name ORDER BY bought ${requestBought}`, 
      { type: QueryTypes.SELECT });
  }else{
    users = await sequelize.query(
      `SELECT u.user_name, u.date_birth, u.gender,u.province,u.district,u.email,u.phone, coalesce(SUM(amount),0) as bought FROM users u LEFT JOIN bills b ON u.user_name = b.user_name LEFT JOIN orderlines o ON b.bill_id = o.bill_id WHERE u.gender = '${requestGender}' group by u.user_name ORDER BY bought ${requestBought}`, 
      { type: QueryTypes.SELECT });
  }
  if(users != null){
    res.json({data:users, status:201})
  }else res.json({status:401, message:"fail"});
 


});
module.exports = router;
