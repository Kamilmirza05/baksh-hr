const {body, validationResult} = require('express-validator');
const User =require('../models/user')
const {managerImage}=require('../middleware/multer')

exports.validRole=[
    body('roleName').notEmpty().isString().isLength({ min: 3}),
    (req,res,next)=>{
        console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]


exports.validUser=[
  body('email')
  .notEmpty()
  .isString()
  .isLength({ min: 3})
  .custom(value => {
    console.log(value)
    return User.findOne({where:{email:value}})
    .then(user => {
      if (user) {
        return Promise.reject('E-mail already exist');
      }
    });
  }),
  body('password').notEmpty().isString().isLength({ min: 3}),
  (req,res,next)=>{
      console.log(req.body)
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
  }
]




exports.validManager=[  
  (req,res,next)=>{
    req.body=JSON.parse(JSON.stringify(req.body));
    next();
  },
  body('name')
  .notEmpty().withMessage('Name is required'),
  body('phone')
  .notEmpty()
  .withMessage('Phone is required')
  .isLength({min:11,max:15})
  .withMessage('Phone Length 11 greater than')

  ,
  body('email')
    .isEmail().withMessage('Email is not valid')
    .normalizeEmail()
    .custom((email)=>{
      return User.findOne({where:{email:email}})
      .then(user => {
        if (user) {
          return Promise.reject('E-mail already exist');
        }
      });
    })
    ,
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('status')
  .notEmpty().withMessage('Status is required'),
  body('module').notEmpty().withMessage('Module must not be empty'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


// Edit Manager validation
exports.validEditManager=[  
  (req,res,next)=>{
    req.body=JSON.parse(JSON.stringify(req.body));
    next();
  },
  body('name')
  .notEmpty().withMessage('Name is required'),
  body('phone')
  .notEmpty()
  .withMessage('Phone is required')
  .isLength({min:11,max:15})
  .withMessage('Phone Length 11 greater than')

  ,
  body('email')
    .isEmail().withMessage('Email is not valid')
    .normalizeEmail()
    .custom((email)=>{
      return User.findOne({where:{email:email}})
      .then(user => {
        if (!user) {
          return Promise.reject('E-mail not exist');
        }
      });
    })
    ,
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('status')
  .notEmpty().withMessage('Status is required'),
  body('module').notEmpty().withMessage('Module must not be empty'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
// Close Edit Validation Manager


// Login Validation Manager
exports.validLogin=[  
  
  body('email')
    .isEmail().withMessage('Email is not valid')
    .normalizeEmail()
    .custom((email)=>{
      return User.findOne({where:{email:email}})
      .then(user => {
        if (!user) {
          return Promise.reject('E-mail Not Exist');
        }
        if(user.status==='inactive'){
          return Promise.reject('Your account is blocked');
        }
      });
    })
    ,
  body('password')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  (req, res, next) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Close Validation Login


