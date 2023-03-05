const Department=require('../models/department');
const Designation=require('../models/designation');

const create=async (req,department,designation)=>{
    
    const departmentCreate=await Department.create({department:department,userId:req?.user?.id});
    console.log(departmentCreate.id)
    let designationNew=await designation.map((child)=>{
        return {...child,departmentId:departmentCreate.id}
    });
    // console.log(designationNew)

    const respone=await Designation.bulkCreate(designationNew);
    return respone
}


module.exports={create}