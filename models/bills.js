const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const coupon = require('./coupon');
const users = require('./users');

const bills = sequelize.define('bills',{
    bill_id:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    user_name:{
        type: Sequelize.CHAR
        
    },
    coupon_id:{
        type: Sequelize.CHAR
        
    },
    bill_date:{
        type: Sequelize.CHAR
    },
    total_due:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
}
    );
    bills.hasOne(coupon,{foreignKey: 'fk_billid_userid', sourceKey:'user_name'});

    
    // https://youtu.be/t_cedTldfjs?t=2269
    module.exports = bills;