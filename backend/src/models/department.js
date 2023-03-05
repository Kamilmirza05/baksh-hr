const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const Department = sequelize.define('department', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},{
    timestamps: true,
    timezone: '+00:00'
  });
module.exports = Department;