const Role = require("../models/role")
const {Error}=require('../helpers/helper')
const { Login, getBanks} = require("../services/public.service")




exports.login=async (req,res,next)=>{
    const {email,password}=req.body;
    try {
        const response=await Login(req,res,email,password);
        return res.status(200).json({flag:true,msg:"User Login Successfully",response}) 
    } catch (error) {
        return Error(req,res,error);   
    }
}


exports.banks=async(req,res,next)=>{
    try {
        const response=await getBanks();
        return res.status(200).json({flag:true,msg:"Bank Successfully Fetched",banks:response}) 
    } catch (error) {
        return Error(req,res,error);   
    }
}

