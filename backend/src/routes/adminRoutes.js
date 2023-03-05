const express=require('express')
const router=express.Router();
const adminController=require('../controllers/admin.controller');
const managerController=require('../controllers/manager.controller');
const department=require('../controllers/department.controller')
const { managerImage } = require('../middleware/multer');
const isAuth=require('../middleware/authorize')

const {validRole,validUser,validManager, validEditManager}=require('../validations/validations');

// Admin Controller
router.post('/',adminController.createAdmin);
router.post('/insert-role',validRole,adminController.insertRole);
router.post('/create-admin',validUser,adminController.signup);

// Manager

// Create Manager
router.post('/create-manager',isAuth,managerImage.single('photo'),validManager,managerController.createManager);
// Edit Manager
router.put('/create-manager',isAuth,managerImage.single('photo'),validEditManager,managerController.editManager);
// Get the Bulk of Managers
router.post('/get-managers',isAuth,managerController.getManagers);
// Get the Single Manager
router.get('/get-manager/:userId',isAuth,managerController.getManager);
// Delete Manager
router.delete('/delete-manager/:userId',isAuth,managerController.deleteManager);


// Departments

// Create the deparment
router.post('/department',isAuth,department.createDepartment);

module.exports=router;