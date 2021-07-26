const express = require("express");
const router = express.Router();
const user = require('../models/users');
router.post('/', async(req, res)=> {
    console.log('req', req.body);
    user.findOne({ where:{user_name: req.body.user_name}}).then((data, message) =>{
        if(data.pass_word === req.body.pass_word){
            res.json({data:data, message: "Ok"})
            //res.status(201).send(data, message);
            console.log(message)
        }else{
            res.send('Password wrong.');
            console.log("wrong");
        
            
        }
        }).catch((err)=>{
            console.log('err',err);
            res.status(401).send({
                message: 'Not found user.',
    
            });
        });
});
module.exports = router;