const Sequelize = require('sequelize');
require("dotenv").config();
const password=process.env.PASSWORD
const user=process.env.USER;
const dbname=process.env.DBNAME
console.log(user,dbname,password)
const sequelize = new Sequelize(dbname,user,password , {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  retry: {
    match: [/Deadlock/i],
    max: 3, // Maximum rety 3 times
    backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
    backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
  },
});

const transaction=sequelize;

sequelize
.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(err => console.error('Unable to connect to the database:', err));

module.exports=sequelize;