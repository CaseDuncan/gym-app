import React from 'react'
import './featured.css'
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import { Avatar } from '@mui/material';

function Featured() {
  return (
    <div className='featured'>
      <div className='featured-info'>
        <span className='title'>Revenue</span>
        <div className='content'>
        <h5>ksh. 20,000</h5>
        </div>
        
      </div>

      <div className='featured-info'>
        <span className='title'>Users</span>
     
        <div className='content'>
        <h5>20</h5>
        </div>
        
      </div>

      <div className='featured-info'>
        <span className='title'>Customers</span>
        <div className='content'>
        <h5>100</h5>
        </div>
        
      </div>

    </div>
  )
}

export default Featured