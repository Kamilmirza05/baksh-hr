const express=require('express')
const router=express.Router();
const adminController=require('../controllers/admin.controller');
const managerController=require('../controllers/manager.controller');
const department=require('../controllers/department.controller')
const { multerUpload } = require('../middleware/multer');
const isAuth=require('../middleware/authorize')
const EmployeeController=require('../controllers/employee.controller')

const {validRole,validUser,validManager, validEditManager, validEmployee}=require('../validations/validations');

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
// Delete Manager
router.delete('/delete-manager/:userId',isAuth,managerController.deleteManager);


// Departments

// Create the deparment
router.post('/department',isAuth,department.createDepartment);

// Create Employee

router.post('/create-employee',isAuth,multerUpload.single('employeePhoto'),validEmployee,EmployeeController.createEmployee)


// Edit Employee

router.put('/edit-employee',multerUpload.single('employeePhoto'),EmployeeController.editEmployee)

// Attendance 
const multer = require('multer');
const attedanceController = require('../controllers/attendance.controller');

// Set up file upload storage and limits
const storage = multer.memoryStorage();
const limits = { fileSize: 1000000 };
const upload = multer({ storage, limits });

// Create new fingerprint data
router.post('/', upload.single('fingerprint'), attedanceController.create);

// Retrieve fingerprint data by ID
router.get('/:id', attedanceController.findById);

// Delete fingerprint data by ID
router.delete('/:id', attedanceController.delete);

// Attendance Routes
router.get('/view-attendance-current', adminController.viewCurrentlyMarkedAttendance);
router.post('/create-attendance', adminController.viewCurrentlyMarkedAttendance);
router.put('/update-attendance/:id', adminController.viewAttendanceSheet);
router.delete('/delete-attendance/:id', adminController.viewAttendanceSheet);
module.exports = router;


module.exports=router;