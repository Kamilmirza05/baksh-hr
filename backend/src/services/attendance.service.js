const Attendance = require("../models/attendance")
const User = require("../models/user")

const createAttendance=async (req,res,
    {UserId,name,month,fingerprint,status,year,checkIn,
        checkOut,createId}
    )=>{
        console.log(UserId,name,month,fingerprint,year,checkIn,
            checkOut,createId)
        // var dateofbirth= new Date(dob);

        let modulejson={
            attendance:{view:true,add:false},
        }

        const role=await Role.findOne({where:{roleName:'attendance'}})
        const permission=await Permission.create({
            module:modulejson,
        })
        const salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash(password, salt);
        const user=await User.create({
            name:name,
            email:email,
            password:hash,
            status:status,
            roleId:role.id,
            permissionId:permission.id
        })


        const attendance=await Attendance.create({
            UserId:employeeId,
            name,
            month:month,
            year:year,
            checkIn:checkIn,
            checkOut:checkOut,
            fingerprint:fingerprint,
            status,
            userId:user.employeeId,
            createId:req.user.employeeId,
        })
        // 
}



const editAttendance=async (req,res,
    {UserId,name,month,fingerprint,status,year,checkIn,
        checkOut}
    )=>{


            const attendance= await Attendance.findOne({where:{UserId:employeeId}})
            attendance.UserId=employeeId;
            attendance.name=name;
            attendance.month=month;
            attendance.year=year;
            attendance.checkIn=checkIn;
            attendance.checkOut=checkOut;
            attendance.fingerprint=fingerprint;
            attendance.status=status;


            if(req?.fingerprint){
                attendance.UserId=req.fingerprint;
            }
            attendance.save();

        }

module.exports={createAttendance,editAttendance};