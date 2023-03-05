const Role = require("../models/role")
const {Error}=require('../helpers/helper')
const { Login} = require("../services/public.service")




exports.login=async (req,res,next)=>{
    const {email,password}=req.body;
    try {
        const response=await Login(req,res,email,password);
        return res.status(200).json({status:true,msg:"User Login Successfully",response}) 
    } catch (error) {
        return Error(req,res,error);   
    }
  }