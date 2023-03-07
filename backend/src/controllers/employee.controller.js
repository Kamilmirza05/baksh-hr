const Employee=require('../services/employee.service');

exports.createEmployee=async (req,res,next)=>{
    console.log('hit...')
    try {
        const response=await Employee.createEmployee(req,res,req.body);
        res.json({msg:"Employee Successfully Created",flag:true,response:response})

    } catch (error) {
        console.log(error)
        return Error(req,res,error);
    }

}