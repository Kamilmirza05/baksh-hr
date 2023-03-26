import * as yup from 'yup';

const validationSchema=yup.object().shape({
    email: yup.string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: yup.string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .required('Password is required'),
       name:yup.string().min(3,'name greater than 3 ').max(100,'name less than 100').required("name is required"),
       fatherName:yup.string().required("Name is Required").min(3,'fatherName greater than 3').max(100,'less than 100'),
       profilePic:yup.object().required('profile pic is required'),
       dateofJoining:yup.date().required('Date of joinining is required'),
       dob:yup.date().required('Date of Birth is required'),
       gender:yup.string().required('Gender is required'),
       departmentId:yup.string().required('Department is required'),
       designationId:yup.string().required('Designation is required'),
       contactOne:yup.string().min(10,'phone or contact greater than 10 ').required('Contact one is required'),
       contactTwo:yup.string().min(10,'phone or contact greater than 10 ').required('Contact two is required'),
       accountholderName:yup.string().min(3,'account holder name greater than 3').required('Account Holder is required'),
       accountNumber:yup.string().min(10,'Account Number greater than 10').required('Account Number is required'),
       branchName:yup.string().min(5,"Branch Name greater than 10").required("Branch Name is required"),
       bankId:yup.string().required('Bank is required'),
       employeeId:yup.string().optional(),
       status:yup.string().required('Status is Required'),
       salaryType:yup.string().required('Salary Type is required'),
       salary:yup.number().required('Salary is Required').positive(),
       bloodGroup:yup.string().required('Blood Group is required'),
       emergencyContact:yup.string().min(10,'phone or contact greater than 10 ').required('Emergency Contact is required'),
       kinname:yup.string().min(3,'name greater than 3 ').max(100,'kin name less than 100').required("kin name is required"),
       relation:yup.string().required('Relation is required'),
       relationContact:yup.string().min(10,'phone or contact greater than 10 ').required('Relation Contact is required'),
       localAddress:yup.string().min(5,"Address greater than").required('Local Address is required'),
       permanentAddress:yup.string().min(5,"Address greater than").required('Permanent is required'),
       martialStatus:yup.string().required('Martial Status is required'),
       nationality:yup.string().required('Nationality is required'),
       managerId:yup.string().required('Manager is required'),
})

export default validationSchema