import React from 'react'
import Drawer  from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { ListItemIcon } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const drawerWidth = 300
const layout ={
      page:{
        background: "#f9f9f9",
       width: "100%"
      },
      drawer:{
        width: drawerWidth
      },
      drawerPaper:{
        width: drawerWidth
      },
      root:{
        display: 'flex'
      }
}

function Layout({children}) {

  const sidebarItems=[
    {
      text: "Employees",
      icon: <AccountCircleOutlinedIcon color="secondary"/>,
      path: '/'
    },
    {
      text: "Customers",
      icon: <PeopleAltIcon color="secondary"/>,
      path: '/customers'
    },
    {
      text: "Services",
      icon: <SettingsIcon color="secondary"/>,
      path: '/services'
    }
  ]
   
    
  return (
   
      <div className={layout.root}>
        <div className={layout.page}>
          {/* sidebar */}
          <Drawer className={layout.drawer} variant="permanent" 
          anchor='left'
          classes={{paper: layout.drawerPaper}}>
            <div>
              <Typography variant="h5">
                Admin Dashboard
              </Typography>
            </div>
            {/*links */}
            <List>
              {sidebarItems.map((item)=>(
                <ListItem
                key={item.text}
                button
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItem>
                <hr/>S
              ))}
            </List>
          </Drawer>
        {children}
    </div>
    </div>
   
  )
}

export default Layout