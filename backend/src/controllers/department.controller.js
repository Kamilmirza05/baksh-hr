const Department=require('../services/department.service');
const {Error}=require('../helpers/helper');

exports.createDepartment=async (req,res,next)=>{
    const {department,designation}=req.body;
    try {
        const response=await  Department.create(req,department,designation)
    } catch (error) {
      return Error(req,res,error);       
    }
}

exports.getDepartment=async (req,res,next)=>{
  try {
      const response=await Department.get();
      res.json({flag:true,msg:'Succefull Fetched',departments:response})
  } catch (error) {
    return Error(req,res,error);       
  }
}

exports.getDesignations=async (req,res,next)=>{
  console.log('hit...')
  const {id}=req.params;
  try {
    const response=await Department.getDesignation(id);
    res.json({flag:true,msg:'Succefull Fetched',designations:response})    
  } catch (error) {
    return Error(req,res,error);           
  }
}