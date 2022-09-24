import React from 'react'
import './home.css'
import Featured from '../../components/featuredinfo/Featured'
import Chart from '../../components/charts/Chart'
import RightWidget from '../../components/widgets/right/RightWidget'
import LeftWidget from '../../components/widgets/left/LeftWidget'
import Grid from '@mui/material/Grid'

function Home() {
  return (
    <div className='home'>
     <Featured/>
     <Chart/>
     <Grid container>
     <LeftWidget/>
     <RightWidget/>
     
     </Grid>
    </div>
  )
}

export default Home