import React, { useState, useEffect,useRef } from "react";
import Slider from "react-slick";
// import contactManager from "../../Assets/Image/ProjectsImage/xontact-manager.png"
import { Helmet, HelmetProvider } from "react-helmet-async";
// import 'react-toastify/dist/ReactToastify.css';
import toast,{Toaster} from 'react-hot-toast'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
  Avatar,
  Button,
  Slide
} from "@mui/material";
import { PersonPin} from '@mui/icons-material';
import ReCAPTCHA from "react-google-recaptcha";


import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

import { TextField,FormControl,FormLabel,FormControlLabel,Radio,RadioGroup, } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { grey } from "@mui/material/colors";
// import { CardProject } from "../";
import { styled } from "@mui/material/styles";
import {commentSchema,recaptchaSchema} from '../../Utils/commentValidation'
import axios from 'axios'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
// import {toast,ToastContainer} from 'react-toastify'
import { SentimentVeryDissatisfied,SentimentDissatisfied,SentimentNeutral,SentimentSatisfiedAlt,SentimentVerySatisfied } from '@mui/icons-material';

const labels = {

  1: <SentimentVeryDissatisfied style={{fontSize:"1.8rem"}}/>,

  2: <SentimentDissatisfied style={{fontSize:"1.8rem"}}/>,

  3: <SentimentNeutral style={{fontSize:"1.8rem"}}/>,

  4: <SentimentSatisfiedAlt style={{fontSize:"1.8rem"}}/>,

  5: <SentimentVerySatisfied style={{fontSize:"1.8rem"}}/>,
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

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


const Comments = () => {
  const myForm=useRef();
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(-1);

  const [loading, setLoading] = useState(false);
  const [formData,setFormData]=useState({})
  const [token,setToken]=useState({reCaptcha:""})
  const [students,setStudents]=useState([])
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

    
    if( await commentSchema.validate(formData,{abortEarly:false})){
      const k = await recaptchaRef.current.getValue();
      if(!k){

        await recaptchaSchema.validate(token,{abortEarly:false})
    }
    


     const {data,status}=await axios.post("https://portfolioapi.reactnovin.com/students",formData)
     if(status===201){
       setFormData({})
       let allData=[...students]
       allData=[...allData,data]
       //console.log("allData",allData);
       setStudents(allData)
       setError([]);
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
    const fetchData=async()=>{

try{
 
const {data: allData}=await axios.get("https://portfolioapi.reactnovin.com/students")
if(allData)
{
  // console.log(allData);
  setStudents(allData)
}
}
catch(err){
  console.log(err.message);
}



    }
    fetchData();
    return () => {
      setLoading(false);
    };
  }, []);


  const outerTheme = useTheme();

const optionSlick={
  dots:true,
  arrows:true,
  infinite:true,
  autoplay:true,
  autoplaySpeed:4000,
  pauseOnHover:true,
  cssEase:"linear",
  // swipeToSlide:false,
  // dots: true,
  // infinite: true,
  // speed: 500,
  // slidesToShow: 1,
  // slidesToScroll: 1
}
  return (
<>
{/* <Toaster/> */}

    <Card sx={{ background: "#fff", color: "#141414" ,}}>
      <CardContent>

        <Box>
        {/* <ToastContainer rtl={true} position="top-center"  /> */}
        <HelmetProvider>
            {/* <Helmet><title>پورتفولیو  علیـــــرضا انـــــوری</title></Helmet> */}
            <Helmet>
              <title>سایت علیرضا انوری |   نظرات دانشجویان</title>
            </Helmet>
          </HelmetProvider>
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
نظرات دانشجویان                  </Typography>
                }
              ></Chip>
            </Divider>
          </Slide>
 
          {/* {console.log(students)} */}
   

   <Box component="div" sx={{justifyContent:"center",alignItems:"center",border:"1px solid #24242426",width:"70%",margin:"60px auto",p:3,borderRadius:"10px"}}>
                  <Slider {...optionSlick} sx={{"&.MuiBox-root .slick-prev":{color:"black  !important"}}}>

         {students.map((student,index)=>(
          (student.rank>3  && index<5 ?  (<Box key={index} component="div" sx={{justifyContent:"center",width:"70%",display:"flex",alignItems:"center",flexDirection:"column"}}>
<PersonPin sx={{width:"60px",height:"60px"}}/>
<Typography variant="body1">{student.fullName}</Typography>
{/* <Typography variant="body2">{student.gender}</Typography> */}

<Box
      sx={{
   
        display: 'flex',
        alignItems: 'center',
        "&.MuiBox-root":{width:1/2,display:"flex",justifyContent:"center",margin:"0 auto"}
      }}
    >
      <Rating
        name="rank"
        value={student.rank}
        // onChange={changeFormHandler} 
        readOnly
        getLabelText={getLabelText}
        onChange={(event,newValue)=>{
          changeFormHandler(event);
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        sx={{flex:"1","& .MuiRating-icon":{}}}
        emptyIcon={<StarIcon style={{ opacity: 0.55 ,color:"grey"}}  />}
      />
      {value !== null && (
        <Box sx={{ ml: 2,flex:"1",fontFamily:"fontFa1",fontSize:"2rem" }}>{labels[hover !== -1 ? hover : student.rank]}</Box>
      )}
    </Box>
                <Typography color="black" >
                    {student.comment}
                </Typography>
          

</Box>

        

          ): null)
         ))} 
                  </Slider>
   </Box>
      
                     </Box>









                     <Box sx={{my:5}}>
          <Slide
            direction="up"
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
 ارسال نظرات                  </Typography>
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
                  <Grid container spacing={2} sx={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   <Grid xs={11}  sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>

                            <span style={{flex:"1 1 20px",alignSelf:"center",color:"red"}}>*</span>
                         <TextField variant="outlined" value={formData.fullName}  onChange={changeFormHandler}  id="nameInput"  type="text" name="fullName" fullWidth label="نام و نام خانوادگی" sx={{ input: { color: '#242424', fontFamily:"fontFa1",direction:"ltr",textAlign:"left"},flex:"1 1 90%"}} InputLabelProps={{style:{ color: '#242424',fontFamily:"fontFa1"} }} />
                         {/* {error.length > 0 && error[0].message ?(<Typography sx={{flex:"1 1 100%",color:"red"}}>{error[0].message}</Typography>):null} */}
                         {error?.map((err,index)=>(err.path==="fullName" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}

                         </Grid>
                         <Grid xs={11}  sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>
                         <span style={{flex:"1 1 20px",alignSelf:"center",color:"red"}}>*</span>

                         <TextField variant="outlined" value={formData.email}  onChange={changeFormHandler}    id="emailInput"  type="email" name="email" fullWidth label="  ایمیل  " sx={{ input: { color: '#242424', fontFamily:"fontFa1",direction:"ltr",textAlign:"left"},flex:"1 1 90%","& .muirtl-nrutr0-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill":{webkitBoxShadow:"0 0 0 100px #ffffff inset",color:"#242424 !important"} }} InputLabelProps={{style:{ color: '#242424',fontFamily:"fontFa1"} }} />
                         {/* {error.length > 0 && error[1].message ?(<Typography sx={{flex:"1 1 100%",color:"red"}}>{error[1].message}</Typography>):null} */}
                        {error?.map((err,index)=>(err.path==="email" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}
                         {/* {error[1].message && 
                         (
                                <Typography>{error[1].message}</Typography>                              
                         )} */}
                    </Grid>
                    <Grid xs={11}  sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>

                    <span style={{flex:"1 1 20px",alignSelf:"center",color:"red"}}>*</span>
                    <FormControl fullWidth sx={{flex:"1 1 90%","&.MuiFormControl-root":{padding:"15px 0"},border:"1px solid #24242426",display:"flex",flexDirection:"row-reverse",justifyContent:"space-between",borderRadius:"4PX", fontFamily:"fontFa1"}}>

                    <Box
      sx={{
   
        display: 'flex',
        alignItems: 'center',
        "&.MuiBox-root":{width:1,display:"flex",justifyContent:"space-evenly"}
      }}
    >
      <Rating
        name="rank"
        value={value}
        // onChange={changeFormHandler} 
        precision={1}
        getLabelText={getLabelText}
        onChange={(event,newValue)=>{
          changeFormHandler(event);
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        sx={{flex:".6","& .MuiRating-icon":{}}}
        emptyIcon={<StarIcon style={{ opacity: 0.55 ,color:"grey"}}  />}
      />
      {value !== null && (
        <Box sx={{ ml: 2,flex:".4",textAlign:"left" }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
    </FormControl>
    {error?.map((err,index)=>(err.path==="rank" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}

    {/* {error.length > 0 && error[2].message ?(<Typography sx={{flex:"1 1 100%",color:"red"}}>{error[2].message}</Typography>):null} */}

                    </Grid>
                    <Grid xs={11}  sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>
                    <span style={{flex:"1 1 20px",alignSelf:"center",color:"grey"}}>*</span>

                    <FormControl fullWidth sx={{flex:"1 1 90%","&.MuiFormControl-root":{padding:"15px 0"},border:"1px solid #24242426",display:"flex",flexDirection:"row-reverse",borderRadius:"4PX", fontFamily:"fontFa1"}}>
  <FormLabel sx={{flex:.3,"&.MuiFormLabel-root":{color:"#242424", fontFamily:"fontFa1",textAlign:"left",padding:"0 10px"}}}>جنسیت</FormLabel>
  <RadioGroup
    name="gender"
    // value={formValues.gender}
    // onChange={handleInputChange}
    row
    sx={{flex:.7,display:"flex",justifyContent:"space-evenly",}}
    value={formData.gender}  onChange={changeFormHandler}
  >
    <FormControlLabel
      key="feMale"
      value="feMale"
      control={<Radio size="small" />}
      label="زن"
      
      sx={{"& .muirtl-1m9pwf3":{opacity:"1 !important"},"& .MuiTypography-root":{fontFamily:"fontFa1 !important"}}}
    />
    <FormControlLabel
      key="male"
      value="Male"
      control={<Radio size="small" />}
      label="مرد"
      sx={{"& .muirtl-1m9pwf3":{opacity:"1 !important"},"& .MuiTypography-root":{fontFamily:"fontFa1 !important"}}}
    />

  </RadioGroup>
</FormControl>             </Grid>
                 
<Grid xs={11}  sm={6} sx={{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap"}}>
                  
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
  sx={{ flex:"1 1 90%","& .muirtl-1qk1us7-MuiInputBase-input-MuiOutlinedInput-input":{color:"#242424"},direction:"ltr",textAlign:"right" ,fontFamily:"fontFa1"}} InputLabelProps={{style:{ color: '#242424',fontFamily:"fontFa1"} }}
 />  
                          {error?.map((err,index)=>(err.path==="comment" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}

  {/*  {error.length > 0 && error[3].message ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{error[3].message}</Typography>):null} */}
         
             </Grid>
             <Grid xs={11} sm={6} sx={{display:"flex",justifyContent:"flex-end"}} >
                  <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KIY}
              ref={recaptchaRef}
                  hl="fa"
                  name="reCaptcha"
            
                  // size="invisible"

                  // value={formData.reCaptcha}
                  // onChange={changeFormHandler}
                  />
                        {error?.map((err,index)=>(err.path==="reCaptcha" ? (<Typography sx={{flex:"1 1 100%",color:"red"}}>{err.message}</Typography>):null))}

                           
               </Grid>
             <Grid xs={11} sm={6} >
                  
                <Button variant="contained" type="submit" sx={{fontFamily: 'fontFa1',
    padding: "7px 0 !important",
    textAlign: "center !important",
    background: "#424242",
    color: "#fff",
    display: "block !important",
    fontSize: "1.2rem",width:"100%"}} >ثبت </Button>
                         
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
          
                     </Box>
                  </CardContent>
          </Card>
          </>
  )
            }
            export default Comments