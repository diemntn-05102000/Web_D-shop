const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const bill = require('./bills');
const item = require('./item');
const orderlines = sequelize.define('orderlines',{
    orderlines_id:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    bill_id:{
        type: Sequelize.CHAR
    },
    item_id:{
        type: Sequelize.CHAR
        
    },
    amount:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: 0,
}
    );
    orderlines.belongsTo(bill,{foreignKey: 'bill_id', targetKey:'bill_id'});
    bill.hasMany(orderlines,{foreignKey: 'bill_id', sourceKey:'bill_id'});
    // orderlines.belongsTo(item,{foreignKey: 'fk_orderlinesid_itemid', targetKey:'item_id'});
    // item.hasMany(orderlines,{foreignKey: 'fk_orderlinesid_itemid', sourceKey:'item_id'});
    
    module.exports = orderlines;