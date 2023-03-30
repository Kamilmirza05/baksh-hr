import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Attendance from './features/attendance/pages/attendance'
import AttendanceReport from './features/attendance/pages/attendancereports'
import Manageattendance from './features/attendance/pages/manageattendance'
import EditEmployee from './features/employee/pages/editemployee'
import Managemployee from './features/employee/pages/managemployee'
import ViewEmployee from './features/employee/pages/viewemployee'
const Dashboard=React.lazy(() => import('./features/dashboard'))
const Employee= React.lazy(() => import('./features/employee'))
const Login= React.lazy(() => import('./features/login'))


const RouterLink = () => {
  return (
    <>
     <Routes>
          <Route path="/dashboard" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Dashboard/>
              </React.Suspense>
              } 
          />
          <Route path="/add-employee" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Employee/>
              </React.Suspense>
              } 
          />
          <Route path="/edit-employee/:employeeId" 
              element={  
              <React.Suspense fallback={<>Loading...</>}>
                <EditEmployee/>
              </React.Suspense>
              } 
          />
          <Route path="/view-employee/:employeeId" 
              element={  
              <React.Suspense fallback={<>Loading...</>}>
                <ViewEmployee/>
              </React.Suspense>
              } 
          />
          <Route path="/manage-employees" 
              element={  
              <React.Suspense fallback={<>Loading...</>}>
                <Managemployee/>
              </React.Suspense>
              } 
          />
          <Route path="/" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Login/>
              </React.Suspense>
              } 
          />

              <Route path="/daily-attendance" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Attendance/>
              </React.Suspense>
              } 
          />
             <Route path="/attendance-report" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <AttendanceReport/>
              </React.Suspense>
              } 
          />
             <Route path="/manage-attendance" 
              element={  
              <React.Suspense fallback={<>...</>}>
                <Manageattendance/>
              </React.Suspense>
              } 
          />
    </Routes>      
    </>

  )
}

export default RouterLink