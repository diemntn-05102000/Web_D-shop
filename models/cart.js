const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const users = require('./users');
const item = require('./item');
const cart = sequelize.define('cart',{
    user_name:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    item_id:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    amount:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: 0,
    freezeTableName: true,
}
    );
    
    module.exports = cart;