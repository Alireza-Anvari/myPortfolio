
import { Box } from '@mui/material';

import {SidebarHeader,SidebarFooter,SidebarTabs} from '.';

const SidebarContent=()=>{

    return (
        <Box sx={{textAlign:"center",mt:2}}>
                    {/* <Box sx={{display:,position:"fixed"}}>
                    <AiFillCloseSquare onClick={handleDrawerToggle} />
            </Box> */}
  
            <SidebarHeader/>

    <SidebarTabs />
    <SidebarFooter/>
    </Box>
    )
}

export default SidebarContent