const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
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
    }
},{
    timestamps: false,
}
    );
    module.exports = users;