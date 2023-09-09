import React from 'react'
import { Box ,IconButton} from '@mui/material';
import {styled} from '@mui/material/styles'
import { FaSquareGithub,FaSquareInstagram ,FaSquareWhatsapp,FaTelegram} from "react-icons/fa6";
import GlobalStyles from '@mui/material/GlobalStyles';
// import Icon from '@mui/material/Icon';
// or
import { GitHub,Instagram,WhatsApp,Telegram } from '@mui/icons-material';

const SocialButton=styled('button')({
    display:'inline-block',
    fontSize:"1.8rem",
    padding:"0 !important",
    background:"transparent",
    border:"none",
    margin:"0 4px",
    borderRadius:20,
    // "&:hover":{color:"red"}
    
 })
 

const SocialIcons = () => {
  return (

      <Box sx={{margin:"0 auto" , textAlign:"center",m:1}} component="div">
        {/* <GlobalStyles styles={globalSVG.fill}/> */}
    <SocialButton aria-label="telegram" >
        <a href='https://t.me/Alireza_anvari_61' target='_blank' rel="noopener noreferrer">
            <Telegram sx={{color:"white","&:hover":{color:"dodgerblue"}}} />
         


        </a>
</SocialButton>
<SocialButton aria-label="whatsapp">
        <a href="https://wa.me/989125696784" target='_blank' rel="noopener noreferrer">
            <WhatsApp  sx={{color:"white","&:hover":{color:"dodgerblue"}}}/>
        </a>
</SocialButton>
<SocialButton aria-label="instagram">
        <a href="https://www.instagram.com/alireza.anvari61" target='_blank' rel="noopener noreferrer">
            <Instagram  sx={{color:"white","&:hover":{color:"dodgerblue"}}}/>
        </a>
</SocialButton>

<SocialButton aria-label="Github">
        <a href='https://github.com/Alireza-Anvari'  target='_blank' rel="noopener noreferrer">
            <GitHub sx={{color:"white","&:hover":{color:"dodgerblue"}}}/>
        </a>
</SocialButton>
    </Box>


  )
}

export default SocialIcons