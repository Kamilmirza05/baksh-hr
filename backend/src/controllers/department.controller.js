const Department=require('../services/department.service');
const {Error}=require('../helpers/helper');

exports.createDepartment=async (req,res,next)=>{
    const {department,designation}=req.body;
    try {
        const response=await 
        Department.create(req,department,designation)
    } catch (error) {
      return Error(req,res,error);       
    }
}