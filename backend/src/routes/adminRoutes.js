const express=require('express')
const router=express.Router();
const adminController=require('../controllers/admin.controller');
const managerController=require('../controllers/manager.controller');
const department=require('../controllers/department.controller')
const { multerUpload } = require('../middleware/multer');
const isAuth=require('../middleware/authorize')
const EmployeeController=require('../controllers/employee.controller')
const {getDepartment} =require('../controllers/department.controller');

const {validRole,validUser,validManager, validEditManager, validEmployee}=require('../validations/validations');
const { getDesignations } = require('../controllers/department.controller');

// Admin Controller
router.post('/',adminController.createAdmin);
router.post('/insert-role',validRole,adminController.insertRole);
router.post('/create-admin',validUser,adminController.signup);

// Manager

// Create Manager
router.post('/create-manager',isAuth,multerUpload.single('managerPhoto'),validManager,managerController.createManager);
// Edit Manager
router.put('/create-manager',isAuth,multerUpload.single('managerPhoto'),validEditManager,managerController.editManager);
// Get the Bulk of Managers
router.post('/get-managers',isAuth,managerController.getManagers);
// Get the Single Manager
router.get('/get-manager/:userId',isAuth,managerController.getManager);

// Get Manager list for drop down
router.get('/get-managersList',managerController.getManagersList);

// Delete Manager
router.delete('/delete-manager/:userId',isAuth,managerController.deleteManager);


// Departments

// Create the deparment
// isAuth
router.post('/department',department.createDepartment);

router.get('/department',getDepartment);

router.get('/designation/:id',getDesignations);



// Create Employee

router.post('/create-employee',isAuth,multerUpload.single('employeePhoto'),validEmployee,EmployeeController.createEmployee);
// Edit Employee
router.put('/edit-employee',multerUpload.single('employeePhoto'),EmployeeController.editEmployee);



router.get('/salaryTypes',EmployeeController.salaryTypes);
// Attendance 
router.get('/view-attendance-current', adminController.viewCurrentlyMarkedAttendance);
router.put('/Employee/viewAttendance', adminController.viewAttendanceSheet);

module.exports=router;