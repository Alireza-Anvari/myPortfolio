import React, { useState, useEffect,useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import 'react-toastify/dist/ReactToastify.css';
import toast from 'react-hot-toast'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
  Button,
  Slide,TextField,CardActionArea
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";

import { GitHub,Instagram,WhatsApp,Telegram,Mail,Phone } from '@mui/icons-material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import Grid from "@mui/material/Unstable_Grid2";

import {commentSchema,contactSchema,recaptchaSchema} from '../../../Utils/commentValidation'
import axios from 'axios'



const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&:before, &:after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&:before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });


const ContactMe = () => {
  const cardSkill = {
    // my: 1,
    alignItems: "center",
    columnGap: 3,
    justifyContent: "center",
    color:"white","&:hover":{color:"dodgerblue"}
  };
  const styleIcons={width:"25px",height:"25px",marginTop:"10px"}
  const ContactsDetails=[
    {id:1,title:"09125696784",logo:<Phone style={styleIcons}/>,percentage:95},
    {id:1,title:"alireza.anvari.61@gmail.com",logo:<Mail style={styleIcons}/>,percentage:85},
    {id:1,title:" https://github.com/Alireza-Anvari",logo:< GitHub style={styleIcons}/>,percentage:80},
    {id:1,title:"https://www.instagram.com/alireza.anvari61",logo:<Instagram style={styleIcons}/>,percentage:82},
    {id:1,title:'https://t.me/Alireza_anvari_61',logo:<Telegram style={styleIcons}/>,percentage:75},
    {id:1,title:"https://wa.me/989125696784",logo:<WhatsApp style={styleIcons}/>,percentage:75},
  ]
  const myForm=useRef();


  const [loading, setLoading] = useState(false);
  const [formData,setFormData]=useState({})
  const [token,setToken]=useState({reCaptcha:""})
  const [contacts,setContacts]=useState([])
  const [error,setError]=useState([])
  const recaptchaRef = useRef();

const changeFormHandler=(e)=>{
// const {value,name}=e.target;
// console.log(e);


  setFormData({
    ...formData,
    [e.target.name]:e.target.value
  })




}


const formSubmitHandler= async(e)=>{
  e.preventDefault();

  try{

    
    if( await contactSchema.validate(formData,{abortEarly:false})){
      const getValueRecaptcha = await recaptchaRef.current.getValue();
      if(!getValueRecaptcha){

        await recaptchaSchema.validate(token,{abortEarly:false})
    }
    


     const {status}=await axios.post("https://portfolioapi.reactnovin.com/contacts",formData)
     if(status===201){
       setFormData({})

       toast.success("نظر شما به  درستی ثبت شد .")
      //  myForm.current.reset();
     
      
     }
   }
     //console.log(commentSchema.validate(formData,{abortEarly:false}));
    //  console.log("status",status);
  }
  catch(err)
{
 // console.log(commentSchema.validate(formData,{abortEarly:false}).inner);
  setError(err.inner)

  console.log(err);
  console.log(err.inner);
 }

}
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);


  const outerTheme = useTheme();

  return (
<>
{/* <Toaster/> */}

    <Card sx={{ background: "#fff", color: "#141414" ,}}>
      <CardContent>
      <HelmetProvider>
            {/* <Helmet><title>پورتفولیو  علیـــــرضا انـــــوری</title></Helmet> */}
            <Helmet>
              <title>سایت علیرضا انوری |    ارتباط با من</title>
            </Helmet>
          </HelmetProvider>










                     <Box sx={{my:0}}>
          <Slide
            direction="down"
            in={loading}
            style={{ transitionDelay: loading ? "300ms" : "0ms" }}
          >
            <Divider
              sx={{ "&::before ,&::after": { background: "#141414", mt: 1 } }}
            >
              <Chip
                sx={{ background: "#141414", color: "#fff", mt: 1 }}
                label={
                  <Typography sx={{ direction: "ltr" }}>
 ارباط با من                    </Typography>
                }
              ></Chip>
            </Divider>
          </Slide>

                

          <Slide
            direction="up"
            in={loading}
            style={{ transitionDelay: loading ? "500ms" : "0ms" }}
          >
          
                <Box sx={{margin:"10px  auto"}}>

                <ThemeProvider theme={customTheme(outerTheme)}>
                    <form onSubmit={formSubmitHandler} ref={myForm}>
                  <Grid container spacing={2} sx={{flexDirection:"row-reverse",alignItems:"center",justifyContent:"flex-start"}}>
                   <Grid xs={12}  sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>

                            <span style={{flex:"1 1 20px",alignSelf:"center",color:"red"}}>*</span>
                         <TextField variant="outlined" value={formData.fullName}  onChange={changeFormHandler}  id="nameInput"  type="text" name="fullName" fullWidth label="نام و نام خانوادگی" sx={{ input: { color: '#242424', fontFamily:"fontFa1",direction:"ltr",textAlign:"left"},flex:"1 1 90%"}} InputLabelProps={{style:{ color: '#242424',fontFamily:"fontFa1"} }} />
                         {/* {error.length > 0 && error[0].message ?(<Typography sx={{flex:"1 1 100%",color:"red"}}>{error[0].message}</Typography>):null} */}
                         {error?.map((err,index)=>(err.path==="fullName" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}

                         </Grid>
                         <Grid xs={12}  sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>
                         <span style={{flex:"1 1 20px",alignSelf:"center",color:"red"}}>*</span>

                         <TextField variant="outlined" value={formData.email}  onChange={changeFormHandler}    id="emailInput"  type="email" name="email" fullWidth label="  ایمیل  " sx={{ input: { color: '#242424', fontFamily:"fontFa1",direction:"ltr",textAlign:"left"},flex:"1 1 90%","& .muirtl-nrutr0-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill":{webkitBoxShadow:"0 0 0 100px #ffffff inset",color:"#242424 !important"} }} InputLabelProps={{style:{ color: '#242424',fontFamily:"fontFa1"} }} />
                         {/* {error.length > 0 && error[1].message ?(<Typography sx={{flex:"1 1 100%",color:"red"}}>{error[1].message}</Typography>):null} */}
                        {error?.map((err,index)=>(err.path==="email" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}
                         {/* {error[1].message && 
                         (
                                <Typography>{error[1].message}</Typography>                              
                         )} */}
                    </Grid>
    
                 
<Grid xs={12}  sm={12} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>
                  
<span style={{flex:"1 1 20px",alignSelf:"center",color:"red"}}>*</span>
             
<TextField
  placeholder="لطفا نظرات خود را در این قسمت وارد کنید..."
  multiline
  rows={4}
  maxRows={4}
  fullWidth
  name="comment"
  value={formData.comment}  onChange={changeFormHandler} 
  InputProps={{style:{ color: '#242424',fontFamily:"fontFa1"} }}
  sx={{ flex:{xs:"1 1 90%",sm:"1 1 95%"},"& .muirtl-1qk1us7-MuiInputBase-input-MuiOutlinedInput-input":{color:"#242424"},direction:"ltr",textAlign:"right" ,fontFamily:"fontFa1"}} InputLabelProps={{style:{ color: '#242424',fontFamily:"fontFa1"} }}
 />  
                          {error?.map((err,index)=>(err.path==="comment" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}

  {/*  {error.length > 0 && error[3].message ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{error[3].message}</Typography>):null} */}
         
             </Grid>
             <Grid xs={12} sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}} >
             <span style={{flex:"1 1 20px",alignSelf:"center",color:"red"}}>*</span>

             <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KIY}
              ref={recaptchaRef}
                  hl="fa"
                  name="reCaptcha"
                  style={{flex:"1 1 90%",display:"flex",justifyContent:"flex-end"}}
            
                  // size="invisible"

                  // value={formData.reCaptcha}
                  // onChange={changeFormHandler}
                  />
                        {error?.map((err,index)=>(err.path==="reCaptcha" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}

                           
               </Grid>
             <Grid xs={12} sm={12} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>
                  
                <Button variant="contained" type="submit" sx={{fontFamily: 'fontFa1',
    padding: "7px 0 !important",
    textAlign: "center !important",
    background: "#424242",
    color: "#fff",
    display: "block !important",
    fontSize: "1.2rem",width:{xs:"100%",sm:"340px"}}} >ثبت </Button>
                         
             </Grid>
                                {/* <Grid xs={11} sm={6} sx={{background:"gold"}}>
                              {
                                error?.map((item,index)=>  {console.log(item)})
                              }
                                </Grid> */}
                  </Grid>
                  </form>
                  </ThemeProvider>
                </Box>


          </Slide>
          


          <Grid container sx={cardSkill}>
              
              {ContactsDetails.map((skill,index)=>(
                        <Slide
                        direction="up"
                        in={loading}
                        style={{
                          transitionDelay: loading ? `${index + 5}99ms` : "0",
                        }}
                      >
              {/* <CardContactMe id={skill.id} title={skill.title} logo={skill.logo} /> */}
              <Grid xs={12} sm={5} md={3.5} ld={3.5} xl={3.5} sx={{mt:3}} id={skill.id} >
                                
                                <Card sx={cardSkill}>
                                          <CardActionArea sx={{"&.MuiButtonBase-root": {flexDirection:"column"}}}>
                                              <CardContent>

            {/* <a href='https://github.com/Alireza-Anvari' target='_blank' rel="noopener noreferrer"> */}
            {/* <Telegram sx={{color:"white","&:hover":{color:"dodgerblue"}}} /> */}
         
                  {skill.logo}
           {/* </a> */}
                                              <Typography  variant="caption" component="div">
                                                  {skill.title}
                                              </Typography>
                                              </CardContent>
                                        
                            
                                          </CardActionArea>
                              </Card>
                                                      </Grid> 
              </Slide>
              )
              
              
              )}
          </Grid>
   
                     </Box>
                  </CardContent>
          </Card>
          </>
  )
            }
            export default ContactMe