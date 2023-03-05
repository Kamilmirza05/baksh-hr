const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const Employee = sequelize.define('employee', {

},{
    timestamps: true,
    timezone: '+00:00'
  });
module.exports = Employee;
