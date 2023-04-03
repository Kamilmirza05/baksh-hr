const Role = require("../models/role")
const {Error}=require('../helpers/helper')
const {InsertRole,Signup, Login} = require("../services/admin.service")

exports.createAdmin=(req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}


exports.insertRole=async (req,res,next)=>{
    const {roleName}=req.body;
    try {
        const response=await InsertRole(roleName);
        return res.json({msg:'Succefully Created',status:true,response:response});
    } catch (error) {
        return Error(req,res,error);
    }
}

exports.signup=async (req,res,next)=>{
  const {userType,email,password}=req.body;
  try {
    const data=await Signup(email,password);
    return res.status(200).json({status:true,msg:"Admin Created Succefully",data:data}) 
  } catch (error) {
    return Error(req,res,error);   
  }
}

// current attendance
exports.viewCurrentlyMarkedAttendance=async (req,res,next)=>{

  var attendanceChunks = [];
  Attendance.find({
    employeeID: req.session.user._id,
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  
  }).sort({_id: -1}).exec(function getAttendanceSheet(err, docs) {
  
  var found = 0;
  if (docs.length > 0) {
      found = 1;
  }
  for (var i = 0; i < docs.length; i++) {
      attendanceChunks.push(docs[i]);
  }
  res.render('Employee/viewAttendance', {
      title: 'Attendance Sheet',
      month: new Date().getMonth() + 1,
      csrfToken: req.csrfToken(),
      found: found,
      attendance: attendanceChunks,
      moment: moment,
      userName: req.session.user.name
  });
  });
}

exports.viewAttendanceSheet=async (req,res,next)=>{
  var attendanceChunks = [];
  Attendance.find({
      employeeID: req.session.user._id,
      month: req.body.month,
      year: req.body.year
  }).sort({_id: -1}).exec(function getAttendance(err, docs) {
      var found = 0;
      if (docs.length > 0) {
          found = 1;
      }
      for (var i = 0; i < docs.length; i++) {
          attendanceChunks.push(docs[i]);
      }
      res.render('Employee/viewAttendance', {
          title: 'Attendance Sheet',
          month: req.body.month,
          csrfToken: req.csrfToken(),
          found: found,
          attendance: attendanceChunks,
          moment: moment,
          userName: req.session.user.name
      });
  });
}



// attendance controller for
exports.editAttendance=async (req,res,next)=>{

  const {userId}=req.params.employeeId;

  try {
      const response=await Attendance.editAttendance(userId);
      res.json({msg:"Attendance edited",flag:true,response:response})
  } catch (error) {
       return Error(req,res,error);
  }
}

exports.deleteAttendnace=async (req,res,next)=>{
  const {userId}=req.params.employeeId;
  try {
      const response= await Attendance.deleteAttendance(userId);
      res.json({msg:"attendance Deleted",flag:true});
  } catch (error) {
      return Error(req,res,error);
  }
}



