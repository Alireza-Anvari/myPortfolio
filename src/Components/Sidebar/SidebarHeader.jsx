import React,{useContext} from 'react'
import { Divider ,Box,Typography} from '@mui/material';
import myImage from '../../Assets/Image/myPics/alireza-anvari.jpeg'
// import {FaAnglesRight} from "react-icons/fa";
import MainContext from '../../Context/index'
import { RandomReveal } from 'react-random-reveal';
import { alphabetPersian } from '../../Utils/Alphabet';
import {FaAnglesRight } from "react-icons/fa6";

import SocialIcons from './SocialIcons';






const SidebarHeader = () => {
    const {setDrawerOpen}=useContext(MainContext)


  return (

<>
<Box sx={{display:{xs:"block",sm:"block",md:"none",lg:"none",xl:"none"},position:"relative",left:"125px"}}>
<FaAnglesRight style={{color:"#fff",position:"fixed",width:"20px",height:"20px",background:"#353535",padding:"6px",cursor:"pointer"}} onClick={()=>{setDrawerOpen(false)}}/>
</Box>
<Box sx={{display:{
                xs:"none",
                sm:"none",
                md:"block",
                ld:"block",
                xl:"block",
            }}}>
           
                <img alt='عکس علیرضا انوری' src={myImage} style={{width:150,height:150,borderRadius:150}}  />
            </Box>

            <Box sx={{display:{
                xs:"block",
                sm:"block",
                md:"none",
                ld:"none",
                xl:"none",
            }}}>
                <img alt='عکس علیرضا انوری' src={myImage} style={{width:80,height:80,borderRadius:100}}  />
            </Box>
    
        {/* <Avatar src={myImage} sx={{width:150,height:150,margin:"0 auto",borderRadius:100}} variant='rounded'  /> */}
       <Typography variant='subtitle1' color='whitesmoke'> 
       علیـــــرضا انـــــوری
       {/* <RandomReveal   isPlaying duration={4} characterSet={alphabetPersian} characters='علیـــــرضا انـــــوری' /> */}
       </Typography>
       <Typography variant='caption' color='whitesmoke'>  توسعه دهنده وب (Front-End)</Typography>
                  <SocialIcons/>
        <Divider variant='middle' sx={{background:"#fff"}}/>
</>
    )
}

export default SidebarHeader