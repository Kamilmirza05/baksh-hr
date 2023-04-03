const hasPermission = (req, res, next, permissions) => {
    const {permission:{
        module
    }}=req.user;
    const permission=module[Object.keys(permissions)];
    const access=permission[Object.values(permissions)[0]];
    // console.log()
    if(access){
        next();
    }else{
        return res.json({flag:false,msg:"You have not permission"})
    }
};

module.exports={hasPermission}