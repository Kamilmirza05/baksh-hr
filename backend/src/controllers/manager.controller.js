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
// current attendance
exports. viewCurrentlyMarkedAttendance=async (req,res,next)=>{

    var attendanceChunks = [];
    Attendance.find({
      employee_id: req.session.user._id,
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
        employee_id: req.session.user._id,
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
  
    const {employee_id}=req.params.employeeId;
  
    try {
        const response=await Attendance.editAttendance(req.employeeId);
        res.json({msg:"Attendance edited",flag:true,response:response})
    } catch (error) {
         return Error(req,res,error);
    }
  }