
const insertRoleDto=(data)=>{
    return{

    }
}

const signupDto=(data)=>{
    return{
        id:data?.id,
        email:data?.email,
        password:data?.password,
        active:data?.active
    }
}

const LoginDto=(data)=>{
    return {
        userId:data?.id,
        email:data?.email,
        active:data?.status,
        role:data?.role,
        permission:data?.permission
    }
}


module.exports={insertRoleDto,signupDto,LoginDto}