const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'D-shop',
    'postgres',
    '05102000',
    {
        dialect: 'postgres',
        host: '127.0.0.1',
        operatorsAliases: 0,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }
    }
);
const Op = Sequelize.Op;
module.exports = {
    sequelize,
    Op
}