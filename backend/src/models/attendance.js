const { Sequelize, DataTypes } = require('sequelize');
const sequelize=require('../untils/db');

    const Attendance = sequelize.define('Attendance', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Employee',
          key: 'id'
        }
      },
      check_in: {
        type: DataTypes.DATE,
        allowNull: false
      },
      check_out: {
        type: DataTypes.DATE,
        allowNull: false
      },
      fingerprint: {
        type: DataTypes.STRING,
        allowNull: false
      },
      timestamp: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      }

    });

    module.exports = Attendance;
