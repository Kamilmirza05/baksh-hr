const express=require('express');
const router=express.Router();
const {login}=require('../controllers/public.controller')
const {validLogin}=require('../validations/validations')


router.post('/login',validLogin,login);

// Depa

module.exports=router;