const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db')

const Role = sequelize.define('role', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    roleName:{
        type:DataTypes.STRING,
        // unique:true,
        // allowNull:false
    }
},{
    timestamps: true,
    timezone: '+00:00'
});

module.exports = Role;
