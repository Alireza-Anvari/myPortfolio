import React,{useContext} from 'react'
import Grid  from '@mui/material/Unstable_Grid2';
import MainContext from '../Context'
const SidebarContainer = ({children}) => {
const {pageNumber}=useContext(MainContext)
// const x=pageNumber !== 1 ? "hidden" : "visible"
let x; 
x={
  height:"100vh",
  overflow:"hidden",
  backgroundColor:"#141414"
}
if(pageNumber!==0 ){
  x={...x,height:"auto",overflow:"visible"}
}


  return (
    <Grid xs={0} sm={0} md={3} lg={2} xl={2} sx={x}>  
                    {children}
    </Grid>
  )
}

export default SidebarContainer