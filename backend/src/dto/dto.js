
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


const employeesDto=(data)=>{
    console.log(data)
    return {
        name:data?.name,
        email:data?.email,
        id:data?.id,
        status:data?.User?.status
    }
}


module.exports={insertRoleDto,signupDto,LoginDto,employeesDto}