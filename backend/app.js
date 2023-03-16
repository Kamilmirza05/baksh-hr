const express=require('express');
const app=express();
const db=require('./src/untils/db');
const sequelize = require('./src/untils/db');
const User=require('./src/models/user');
const Employee = require('./src/models/employee');
const Role = require('./src/models/role');
const Permission = require('./src/models/permission');
const logger=require('./src/logs');
const bodyParser=require('body-parser');
const Manager = require('./src/models/manager');
const salaryType=require('./src/models/salaryType');
// .evn file get
require('dotenv').config();
console.log('hii')

// Routes
const adminRoutes=require('./src/routes/adminRoutes');
const Api=require('./src/routes/apiRoutes');
const Department = require('./src/models/department');
const Designation = require('./src/models/designation');
const EmployeeCompany = require('./src/models/empCompany');
const EmployeeBank = require('./src/models/empBank');
const Bank=require('./src/models/bank');
const cors=require('cors')
const path=require('path')

const version1='v1';
const options={
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE'
}
app.use(cors(options))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"./client/build")))
// app.use(express.urlencoded())



app.use('/api/admin',adminRoutes)
app.use('/api',Api)

app.use("*",(req,res,next)=>{
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// RelationShips Role and Permissions
Role.hasMany(User,
{
  foreignKey: {
    allowNull: false
  }
});
User.belongsTo(Role);

// RelationShips Role entity and user entity
Permission.hasOne(User,{
  foreignKey: {
    allowNull: false
  }
});
User.belongsTo(Permission);


// Manager Relation with User
User.hasOne(Manager,{foreignKey:'userId',allowNull:false});
Manager.belongsTo(User,{foreignKey: 'userId'})

User.hasMany(Manager,{foreignKey:'createId'})
Manager.belongsTo(User,{foreignKey: 'createId'})


User.hasMany(Department,{foreignKey:'userId'});
Department.belongsTo(User,{foreignKey:'userId'});

Department.hasMany(Designation);
Designation.belongsTo(Department);

Department.hasMany(EmployeeCompany);
EmployeeCompany.belongsTo(Department);

Designation.hasMany(EmployeeCompany);
EmployeeCompany.belongsTo(Designation);

User.hasMany(Employee,{foreignKey:'userId'});
Employee.belongsTo(User,{foreignKey:'userId'});

Employee.hasOne(EmployeeCompany);
EmployeeCompany.belongsTo(Employee);

Employee.hasOne(EmployeeBank);
EmployeeBank.belongsTo(Employee)

User.hasMany(Employee,{foreignKey:'createId'})
User.belongsTo(Employee,{foreignKey:'createId'})


Bank.hasMany(EmployeeBank,{foreignKey:'bankId'})
EmployeeBank.hasMany(Bank,{foreignKey:'bankId'})

// My sql database create
sequelize
.sync({alter:true})
.then(() => {
  console.log('Models synchronized successfully.');
})
.catch((error) => {
  console.error('Error synchronizing models:', error);
});


module.exports=app;