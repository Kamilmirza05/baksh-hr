const Manager=require('../services/manager.service')
const {Error}=require('../helpers/helper')

exports.createManager=async (req,res,next)=>{
    const {name,phone,email,password,status,module,userId}=req.body;


    try {
        const response=await Manager.createManager(req,res,req.file,name,phone,email,password,status,module,userId);
        res.json({msg:"Manager Successfully Created",flag:true,response:response})

    } catch (error) {
        return Error(req,res,error);
    }
}


exports.editManager=async (req,res,next)=>{
    const {name,phone,email,password,status,module,userId}=req.body;

    try {
        const response=await Manager.editManager(req.file,name,phone,email,password,status,module,userId);
        res.json({msg:"Manager Successfully Edit",flag:true,response:response})
    } catch (error) {
         return Error(req,res,error);
    }
}


exports.getManagers=async (req,res,next)=>{
    const {page,limit}=req.body
    try {
        const response=await Manager.getManagers(limit,page);
        res.json({msg:"Manager Successfully Fetched",flag:true,response:response})
    } catch (error) {

         return Error(req,res,error);
    }
}

exports.getManager=async (req,res,next)=>{
    const {userId}=req.params;
    try {
        const response=await Manager.getManager(userId);
        res.json({msg:"Manager Successfully Fetch",flag:true,response:response});
    } catch (error) {
        return Error(req,res,error);
    }
}


exports.deleteManager=async (req,res,next)=>{
    const {userId}=req.params;
    try {
        const response=await Manager.deleteManager(userId);
        res.json({msg:"Manager Deleted",flag:true});
    } catch (error) {
        return Error(req,res,error);
    }
}