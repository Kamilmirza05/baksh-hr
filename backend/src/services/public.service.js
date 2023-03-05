const {Op} =require('sequelize')
const User=require('../models/user');
const bcrypt=require('bcryptjs');
const Permission = require('../models/permission');
const { LoginDto } = require('../dto/dto');
const jwt=require('jsonwebtoken')


const Login=async(req,res,email,password)=>{

    // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    const user = await User.findOne({
        where: {
            [Op.and]:[{email:email},{status:true},{deletedAt:null}],
        },
        include:{all:true}
    });
    
        let verify=await bcrypt.compare(password, user.password);
        const secret=process.env.secretKey;
        const data=await LoginDto(user);
        var token =await jwt.sign(data, secret,{ expiresIn: '1d' });
        return {data,token};
}

module.exports={Login};