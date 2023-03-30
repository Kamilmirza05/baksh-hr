const User = require('../models/user');
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

};



exports.editEmployee=async (req,res,next)=>{
    try {
        const response=await Employee.editEmployee(req,res,req.body);
        res.json({msg:"Employee Successfully edit",flag:true,response:response})

    } catch (error) {
        return Error(req,res,error);
    }

};

exports.salaryTypes=async (req,res,next)=>{

    try {
        let response=await Employee.salaryType();
        response=await response.map((emp)=>{
            return emp.type;
        })
        res.json({msg:"Salary Succefully Fetched",flag:true,salaryTypes:response})

    } catch (error) {
        return Error(req,res,error);
    }
};

exports.createAttendance=async (req,res,next)=>{

 try {
        const response=await Employee.createAttendance(req.Checktime.timeIn || fingerprint);
        res.json({msg:"Attendance mark",flag:true,response:response})
    } catch (error) {
         return Error(req,res,error);
    }
    const employee = await findEmployeebyId(Id)

    if (!employee){
        return res.status(400).json('employee not found please add your fingerprint')

    }
    else {

        const {id,timeOut}=req.body.fingerprint;
        res.json({msg:"Attendance not mark",flag:false,response:false})
        throw new Error("please mark your attendance")
    }
}





