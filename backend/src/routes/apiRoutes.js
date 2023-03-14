const express=require('express');
const router=express.Router();
const {login,banks}=require('../controllers/public.controller')

const {validLogin}=require('../validations/validations')


router.post('/login',validLogin,login);

// Bank
router.get('/banks',banks);

// Depa

module.exports=router;