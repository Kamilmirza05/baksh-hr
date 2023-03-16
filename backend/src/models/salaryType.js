const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const SalaryType = sequelize.define('salaryTypes', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type:{
        type:DataTypes.STRING,
    }
},{
    timestamps: false,
});

module.exports = SalaryType;
