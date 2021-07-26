const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const bill = require('./bill');
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
    // orderlines.belongsTo(bill,{foreignKey: 'fk_orderlinesid_billid', targetKey:'bill_id'});
    // bill.hasMany(orderlines,{foreignKey: 'fk_orderlinesid_billid', sourceKey:'bill_id'});
    // orderlines.belongsTo(item,{foreignKey: 'fk_orderlinesid_itemid', targetKey:'item_id'});
    // item.hasMany(orderlines,{foreignKey: 'fk_orderlinesid_itemid', sourceKey:'item_id'});
    
    module.exports = orderlines;