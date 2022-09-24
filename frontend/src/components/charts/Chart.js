import React from 'react'
import './chart.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart() {
    const data = [
        {
          name: 'Yoga',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Zumba Aerobics',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Aerobic classes',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Steam and Sauna Rooms',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Polymetric Boxes',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
      ];
  return (
    <div className='chart'>
        <h3 className='chart-title'>Service Analytics</h3>
      <ResponsiveContainer width="100%"   aspect={4/1}>
        <AreaChart
      
           width={730} height={250} data={data}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
     </ResponsiveContainer>
    </div>
  )
}

export default Chart