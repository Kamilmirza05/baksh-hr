import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../../../components/sidebar/sidebar';

const Dashboard = () => {
  return (<Box>
    <Sidebar/>
      <div className='listcontainer'>
        {/* <DataTable/> */}
      </div>
  </Box>
  )
}

export default Dashboard