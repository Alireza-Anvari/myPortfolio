import React from 'react'
import { Drawer } from '@mui/material'
import { SidebarContent } from '../Sidebar'
import { useContext } from 'react'
import MainContext from '../../Context'
const SidebarDrawer = () => {
const {drawerOpen,setDrawerOpen}=useContext(MainContext)
  return (

    <Drawer open={drawerOpen} variant='temporary'  onClose={()=>{setDrawerOpen(false)}} sx={{"& .MuiDrawer-paper":{width:250,display:{
        xs:"block",
        sm:"block",
        md:"none",
        lg:"none",
        xl:"none"
        
    }}}}>
        <SidebarContent  />
    </Drawer>  )
}

export default SidebarDrawer