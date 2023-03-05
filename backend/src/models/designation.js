const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const Designation = sequelize.define('designation', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    designation:{
        type:DataTypes.STRING,
    }
},{
    timestamps: true,
    timezone: '+00:00'
  });
module.exports = Designation;