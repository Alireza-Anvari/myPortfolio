import React from 'react'
import { Divider ,Box,Typography} from '@mui/material';
import {FaRegCopyright } from "react-icons/fa";

const SidebarFooter = () => {
  return (
<>
<Divider variant='middle' sx={{background:"#fff",mt:1}}/>
            <Box sx={{p:1,display:"flex",flexDirection:"column"}}>
    
            <Typography variant='caption' color='whitesmoke'> طراحی شده توسط علیـــرضا انـــوری</Typography>
            <Typography variant='caption' color='whitesmoke' sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>       <FaRegCopyright  sx={{mx:5}} />  {" "}    کپی رایت سال 1402
            </Typography>
            </Box>
</>
    )
}

export default SidebarFooter