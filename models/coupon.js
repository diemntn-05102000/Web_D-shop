const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const coupon = sequelize.define('coupon',{
    coupon_id:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    code:{
        type: Sequelize.CHAR
    },
    date_exp:{
        type: Sequelize.DATE
        
    },
    amount:{
        type: Sequelize.REAL
    }
},{
    timestamps: false,
}
    );
    module.exports = coupon;