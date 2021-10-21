const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const bill = require('./bills');
const users = sequelize.define('users',{
    // user_id:{
    //     type: Sequelize.CHAR,
    //     primaryKey: true
    // },
    user_name:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    pass_word:{
        type: Sequelize.CHAR
    },
    
    first_name:{
        type: Sequelize.CHAR
    },
    last_name:{
        type: Sequelize.CHAR
    },
    date_join:{
        type: Sequelize.DATE
    },
    date_birth:{
        type: Sequelize.DATE
    },
    province:{
        type: Sequelize.CHAR
    },
    district:{
        type: Sequelize.CHAR
    },
    email:{
        type: Sequelize.CHAR
    },
    phone:{
        type: Sequelize.CHAR
    },
    is_superuser:{
        type: Sequelize.BOOLEAN
    },
    is_staff:{
        type: Sequelize.BOOLEAN
    },
    gender:{
        type: Sequelize.CHAR
    },
},{
    timestamps: false,
}
    );
    bill.belongsTo(users,{foreignKey: 'user_name', targetKey:'user_name'});
    users.hasMany(bill, {foreignKey: 'user_name', targetKey:'user_name'});

    module.exports = users;