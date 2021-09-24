const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const cart = require('./cart');

const item = sequelize.define('items',{
    item_id:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    item_name:{
        type: Sequelize.CHAR
    },
    theme:{
        type: Sequelize.CHAR
        
    },
    price:{
        type: Sequelize.DECIMAL
    },
    quantity:{
        type: Sequelize.INTEGER
    },
    brand:{
        type: Sequelize.CHAR
    },
    sold:{
        type: Sequelize.INTEGER

    },
    img: {
        type: Sequelize.CHAR
    },
},{
    timestamps: false,
}
    );
    item.belongsToMany(cart, {
        through: 'items_of_cart',
        foreignKey: 'item_id',
        as: 'items'
      });
    module.exports = item;