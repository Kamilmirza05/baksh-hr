const {insertRoleDto,signupDto}=require('../dto/dto');
const Permission = require('../models/permission');
const Role=require('../models/role');
const User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const InsertRole=async (roleName)=>{
    const response=await Role.create({roleName:roleName});
    return response;
}

const Signup=async (email,password)=>{
        const roles=await Role.findOne({where:{roleName:'admin'}});
        let modulejson={
            employee:{view:true,add:true,edit:true,delete:true},
            attendance:{view:true,add:true},
            leave:{view:true,add:true,edit:true,delete:true},
            payslip:{view:true,add:true,delete:true},
            perfomance:{view:true,add:true},
            recruitment:{view:true,add:true},
            daily:{work:true,notification:true,quote:true}
        }

        const permission=await Permission.create({
            module:modulejson,
            active:true,
        })
        var hash = bcrypt.hashSync(password, 8);
        
        const response=await User.create({
            email:email,
            password:hash,
            permissionId:permission?.id,
            roleId:roles?.id,
            status:'active',
        })
        return signupDto(response);
}



module.exports={InsertRole,Signup};