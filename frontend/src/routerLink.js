import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditEmployee from './features/employee/pages/editemployee'
import Managemployee from './features/employee/pages/managemployee'
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
    </Routes>      
    </>

  )
}

export default RouterLink