const multer=require('multer');

const imageFilter = function(req, file, cb) {
    const allowedExtensions = ['.png', '.jpg','.jpeg'];
    const fileExtension = file.originalname.slice(-4);
    if (file.mimetype.startsWith('image/') && allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(new Error('Only PNG and JPG files are allowed'), false);
    }
};

const manager = multer.diskStorage({
    destination: function(req, file, cb) {
      console.log(file?.fieldname)
      if(file?.fieldname==='employeePhoto'){
        cb(null, './uploads/employees');

      }else{
        cb(null, './uploads/managers');
      }
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname);
    }
  });
  

  const multerUpload = multer({
    limits: { fileSize: 1024 * 1024 *5 }, // Limit file size to 1MB
    fileFilter: imageFilter, 
    storage: manager 
  });


module.exports={multerUpload}