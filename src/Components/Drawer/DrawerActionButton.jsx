import React,{useContext} from 'react'
import { Box,Fab } from '@mui/material'
import { GiHamburgerMenu } from "react-icons/gi";
import MainContext from '../../Context'
const DrawerActionButton = () => {
    const {setDrawerOpen}=useContext(MainContext)
  return (
    <Box sx={{position:"absolute",display:{
        xs:"block",
        sm:"block",
        md:"none",
        lg:"none",
        xl:"none"
    }}}>
        <Fab sx={{backgroundColor:"#141414",m:2,color:"#fff","&.MuiButtonBase-root:hover":{backgroundColor:"#fff",color:"#141414"}}}   size="small" aria-label='Sidebar' onClick={()=>{setDrawerOpen(true)}}>
            <GiHamburgerMenu style={{width:25,height:25,margin:"0 auto",}}/>
        </Fab>
    </Box>  )
}

export default DrawerActionButton