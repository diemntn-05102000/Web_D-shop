const express = require("express");
const users = require("../models/users");

const router = express.Router();
router.post('/', async(req, res)=> {
    let {
        user_name ,
        pass_word,
        first_name,
        last_name,
        province,
        district,
        email,
        phone,
        

     } = req.body;
    console.log('req.body',req.body);
    users.findOne({ where:{user_name: req.body.user_name}}).then((data, message) =>{
        if(data == null){
            users.create({
                user_name,
                pass_word,
                first_name,
                last_name,
                province,
                district,
                email,
                phone,
                is_superuser: true,
                is_staff: false

            },{
                fields: ["user_name","pass_word","first_name","last_name","province","district","email","phone","is_superuser","is_staff"]
            }).then(data => {
                res.send(data)
            });
        }else{
            console.log('data', data);
            res.json({data:data, message: "User name existed in database"})
            res.status(404).send('Existed in database') 

        }
    }).catch(err=>{
        console.log('err', err);
    });
});
module.exports = router;