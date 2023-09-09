import React from 'react'
import { grey } from '@mui/material/colors';
import { useContext } from 'react';
import MainContext  from '../../Context'
import { Tabs,Tab } from '@mui/material';
import {SidebarDataTabs} from './SidebarDataTabs'

const SidebarTabs = () => {
    const {pageNumber,handlePageNumber,setDrawerOpen}=useContext(MainContext)
    const tabsData=SidebarDataTabs()
  return (

    
    <Tabs orientation="vertical"
    variant="scrollable"
    scrollButton="auto"
    allowScrollButtonMobile
    value={pageNumber}
    onChange={handlePageNumber}
    sx={{mt:1}}
   >
    {tabsData.map((tab,index)=>(


        <Tab key={index} onClick={()=>{setDrawerOpen(false)}} sx={{"&.MuiTab-root":{backgroundColor:grey[800],borderRadius:2,my:0.5,mx:1,fontSize:".9rem",minHeight:"2.8rem"}}}variant='subtitle1' icon={tab.icon} iconPosition="start" label={tab.label} {...tab}/>

    ))}
    {/* <Tab onClick={()=>{setDrawerOpen(false)}} sx={{"&.MuiTab-root":{backgroundColor:grey[800],borderRadius:2,my:0.5,mx:1,fontSize:".9rem",minHeight:"2.8rem"}}}variant='subtitle1' icon={<FaInfoCircle/>} iconPosition="start" label=" درباره من"     {...tabProps(1)} />
    <Tab onClick={()=>{setDrawerOpen(false)}} sx={{"&.MuiTab-root":{backgroundColor:grey[800],borderRadius:2,my:0.5,mx:1,fontSize:".9rem",minHeight:"2.8rem"}}}variant='subtitle1' icon={<FaReact/>} iconPosition="start" label=" نمونه کارها"  {...tabProps(2)} />
    <Tab onClick={()=>{setDrawerOpen(false)}} sx={{"&.MuiTab-root":{backgroundColor:grey[800],borderRadius:2,my:0.5,mx:1,fontSize:".9rem",minHeight:"2.8rem"}}}variant='subtitle1' icon={<MdMessage/>} iconPosition="start" label=" نظرات دانشجویان"      {...tabProps(3)}/>
    <Tab onClick={()=>{setDrawerOpen(false)}} sx={{"&.MuiTab-root":{backgroundColor:grey[800],borderRadius:2,my:0.5,mx:1,fontSize:".9rem",minHeight:"2.8rem"}}}variant='subtitle1' icon={<MdContactPhone/>} iconPosition="start" label="  ارتباط با من"  {...tabProps(4)} />
 */}


</Tabs>
    )
}

export default SidebarTabs