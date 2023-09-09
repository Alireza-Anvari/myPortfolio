import React,{useRef,useEffect} from 'react'
import { Box,Typography } from '@mui/material'
import Typed from 'typed.js'
import { Helmet, HelmetProvider } from "react-helmet-async";


const Home = () => {
    const nameElement=useRef(null)
    const infoElement=useRef(null)
    const strings=[
        "من یک توسعه دهنده front- end هستم",
        "من یک    مدرس وب هستم",
        "Html , Css , js , mui , tailwind , react js",
    
    ]

    useEffect(()=>{
        const typedInfo=new Typed(infoElement.current,{
            strings:strings,
            startDelay:1000,
            typeSpeed:80,
            backSpeed:50,
            backDelay:1000,
            loop:true,
            showCursor:true

        })
        return ()=>{
            typedInfo.destroy();
        }
    },[])
  return (
    <Box sx={{
        backgroundImage:`url(${require('../../Assets/Image/backgrounds/MainBackground.jpg')})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"top",
        alignItems:"center",
        
    }}>
        <HelmetProvider>
          {/* <Helmet><title>پورتفولیو  علیـــــرضا انـــــوری</title></Helmet> */}
        <Helmet><title>سایت  علیرضا انوری | صفحه اصلی</title></Helmet>
        </HelmetProvider>
<Typography variant='h4' sx={{color:"#fff",fontWeight:"bold",mt:20}}>سلام:من علیـــــرضا انــــــوری هستم</Typography>
<Typography variant='h5' sx={{color:"#fff",direction:"ltr",m:3}} ref={infoElement}>     </Typography>
    </Box>
  )
}

export default Home