import React from "react";
import myPic from "../../../Assets/Image/myPics/shape-Alireza.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
  Avatar,
} from "@mui/material";
import { SiReact,SiMui,SiHtml5,SiTailwindcss,SiCss3,SiJavascript } from "react-icons/si";
import Grid from "@mui/material/Unstable_Grid2";

import { grey } from "@mui/material/colors";

import CardAbout from "./CardAbout";

const About = () => {
  const gridStyleOdd = {
    background: `${grey[800]}`,
    color: "#fff",
    borderRadius: 1,
    mt: 0.5,
  };
  const gridStyleEven = {
    marginTop: { xs: 1.5, sm: 0.5, lg: 0.5, md: 0.5, xl: 0.5 },
  };
  const myPicStyle = {
    width: { xs: "80%", sm: "90%" },
    height: { xs: "80%", sm: "90%" },
    margin: "0 auto",
  };

  const cardSkill = {
    // my: 1,
    alignItems: "center",
    columnGap: 5,
    justifyContent: "center",
  };
  const skillDetails=[
    {id:1,title:"Html",logo:<SiHtml5 style={{width:"50px",height:"50px",marginTop:"20px"}}/>,percentage:95},
    {id:1,title:"Css",logo:<SiCss3 style={{width:"50px",height:"50px",marginTop:"20px"}}/>,percentage:85},
    {id:1,title:"JavaScript",logo:<SiJavascript style={{width:"50px",height:"50px",marginTop:"20px"}}/>,percentage:80},
    {id:1,title:"Tailwind",logo:<SiTailwindcss style={{width:"50px",height:"50px",marginTop:"20px"}}/>,percentage:82},
    {id:1,title:"Material ui",logo:<SiMui style={{width:"50px",height:"50px",marginTop:"20px"}}/>,percentage:75},
    {id:1,title:"React js",logo:<SiReact style={{width:"50px",height:"50px",marginTop:"20px"}}/>,percentage:75},
  ]
  return (
    <Card sx={{ background: "#fff", color: "#141414" }}>
      <CardContent>
        <Box>
          <Divider
            sx={{ "&::before ,&::after": { background: "#141414", mt: 1 } }}
          >
            <Chip
              sx={{ background: "#141414", color: "#fff", mt: 1 }}
              label={
                <Typography sx={{ direction: "ltr" }}>
                  من برنامه نویس Front-End هستم
                </Typography>
              }
            ></Chip>
          </Divider>
          <HelmetProvider>
          {/* <Helmet><title>پورتفولیو  علیـــــرضا انـــــوری</title></Helmet> */}
        <Helmet><title>سایت  علیرضا انوری |  درباره من</title></Helmet>
        </HelmetProvider>
          <Grid container sx={{ my: 2, alignItems: "center" }}>
            <Grid xs={12} sm={4} md={4} lg={4} xl={4} sx={{ p: 2 }}>
              <Avatar src={myPic} sx={myPicStyle} />
            </Grid>
            <Grid
              xs={12}
              sm={8}
              md={8}
              lg={8}
              xl={8}
              sx={{ direction: "ltr", p: 1 }}
            >
              <Box>
                <Grid container sx={{ width: 1, columnGap: 0.5 }}>
                  <Grid
                    xs={12}
                    sm={4.5}
                    md={4.5}
                    lg={4.5}
                    xl={4.5}
                    sx={gridStyleOdd}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      نام و نام خانوادگی{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6.5}
                    md={6.5}
                    lg={6.5}
                    xl={6.5}
                    sx={gridStyleOdd}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      علیـــــرضا انـــــوری مجـــــدلو{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={4.5}
                    md={4.5}
                    lg={4.5}
                    xl={4.5}
                    sx={[gridStyleOdd, gridStyleEven]}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      تاریخ تولد
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6.5}
                    md={6.5}
                    lg={6.5}
                    xl={6.5}
                    sx={gridStyleOdd}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      1361/06/16
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={4.5}
                    md={4.5}
                    lg={4.5}
                    xl={4.5}
                    sx={[gridStyleOdd, gridStyleEven]}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      تحصیلات
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6.5}
                    md={6.5}
                    lg={6.5}
                    xl={6.5}
                    sx={gridStyleOdd}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      {" "}
                      کارشناسی ارشد{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={4.5}
                    md={4.5}
                    lg={4.5}
                    xl={4.5}
                    sx={[gridStyleOdd, gridStyleEven]}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      شهر
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6.5}
                    md={6.5}
                    lg={6.5}
                    xl={6.5}
                    sx={gridStyleOdd}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      {" "}
                      کـــــرج{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={4.5}
                    md={4.5}
                    lg={4.5}
                    xl={4.5}
                    sx={[gridStyleOdd, gridStyleEven]}
                  >
                    <Typography variant="subtitle2" sx={{ width: 1, p: 1 }}>
                      بیوگرافی{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={6.5}
                    md={6.5}
                    lg={6.5}
                    xl={6.5}
                    sx={gridStyleOdd}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ p: 1, textAlign: "center" }}
                    >
                      بیش از 10 سال سابقه تدریس در دانشگاه ، همکاری با شرکتهای
                      برنامه نویسی ، انجام پروژه بصورت فریلنسر
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Divider
            sx={{ "&::before ,&::after": { background: "#141414", mt: 1 } }}
          >
            <Chip
              sx={{ background: "#141414", color: "#fff", mt: 1 }}
              label={
                <Typography sx={{ direction: "ltr" }}>
                  مهارتهای برنامه نویسی من
                </Typography>
              }
            ></Chip>
          </Divider>
          <Grid container sx={cardSkill}>
              
              {skillDetails.map((skill)=>(<CardAbout id={skill.id} title={skill.title} logo={skill.logo} percentage={skill.percentage}/>))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default About;
