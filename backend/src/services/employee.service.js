// const {insertRoleDto,signupDto}=require('../dto/dto');
// const Permission = require('../models/permission');
// const Role=require('../models/role');
// const User = require('../models/user');
// var jwt = require('jsonwebtoken');

const Employee = require("../models/employee");
const Permission = require("../models/permission");
const Role = require("../models/role");
const User = require("../models/user");
var bcrypt = require('bcryptjs');
const EmployeeBank = require("../models/empBank");
const EmployeeCompany = require("../models/empCompany");

// const InsertRole=async (roleName)=>{
//     const response=await Role.create({roleName:roleName});
//     return response;
// }


const createEmployee=async (req,res,
    {name,fatherName,dob,gender,phoneOne,phoneTwo,
    localAddress,nationality,permanentAddress,referenceOne,
    referenceOnePhone,referenceTwo,referenceTwoPhone,martialStatus,
    comment,departmentId,designationId,dateofJoining,email,password,
    managerId,status,bloodGroup,emergencyContact,kinname,relation,
    kinPhone,holderName,accountNumber,bankName,branch,bankCode,
    salaryType,salary}
    )=>{

        console.log(dob)
        let modulejson={
            employee:{view:true,add:true,edit:true,delete:true},
            attendance:{view:true,add:true},
            leave:{view:true,add:true,edit:true,delete:true},
            payslip:{view:true,add:true,delete:true},
            perfomance:{view:true,add:true},
            recruitment:{view:true,add:true},
            daily:{work:true,notification:true,quote:true}
        }

        const role=await Role.findOne({where:{roleName:'employee'}})
        const permission=await Permission.create({
            module:modulejson,
        })
        const salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(password, salt);
        const user=await User.create({
            name:name,
            email:email,
            password:hash,
            status:status,
            roleId:role.id,
            permissionId:permission.id
        })


        const employee=await Employee.create({
            name,
            email:email,
            fatherName,
            dob,
            gender,
            phoneOne,
            phoneTwo,
            localAddress,
            nationality,
            permanentAddress,
            referenceOne,
            referenceOnePhone,
            referenceTwo,
            referenceTwoPhone,
            martialStatus,
            comment,
            bloodGroup,
            emergencyContact,
            kinname,
            relation,
            kinPhone,
            holderName,
            accountNumber,
            bankName,
            branch,
            bankCode,
            profilePhoto:req.file,
            userId:user.id,
            createId:req.user.id,
        })

        const employeeBank=await EmployeeBank.create({
            holderName,
            accountNumber,
            bankName,
            branch,
            bankCode,
            salaryType,
            salary,
            employeeId:employee.id,
        })

        console.log(dateofJoining)
        const employeeCompany=await EmployeeCompany.create({
            managerId:managerId,
            dateofJoining,
            status:status,
            departmentId,
            designationId,
            employeeId:employee.id,
        })

        return employeeCompany;
}




module.exports={createEmployee};