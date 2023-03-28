const express=require('express');
const { getEmployee } = require('../controllers/employee.controller');
const router=express.Router();
const {login,banks}=require('../controllers/public.controller')
const isAuth=require('../middleware/authorize')

const {validLogin}=require('../validations/validations')


router.post('/login',validLogin,login);

// Bank
router.get('/banks',banks);
// Depa

router.get('/get-employee/:employeeId',isAuth,getEmployee);


module.exports=router;