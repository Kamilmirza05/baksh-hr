const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const Bank = sequelize.define('bank', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bankName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
},{
    timestamps: false
});
module.exports = Bank;