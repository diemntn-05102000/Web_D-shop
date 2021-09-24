const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
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
    cart.hasMany(item,{foreignKey: 'fk_cartid_itemid', sourceKey:'item_id'});
    module.exports = cart;