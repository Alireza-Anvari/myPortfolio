import React, { useState, useEffect } from "react";
import contactManager from "../../../Assets/Image/ProjectsImage/xontact-manager.png"
import travel from "../../../Assets/Image/ProjectsImage/travel.png"
import plantShop from "../../../Assets/Image/ProjectsImage/plantShop.png"
import building from "../../../Assets/Image/ProjectsImage/building.png"
import myPortfolio from "../../../Assets/Image/ProjectsImage/myPortfolio.png"
import MainPortfolio from "../../../Assets/Image/ProjectsImage/MainPortfolio.png"
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Chip,
  Avatar,
  Slide,
} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import { grey } from "@mui/material/colors";
import { CardProject } from "../";
import { styled } from "@mui/material/styles";
import QRCode from "qrcode.react";

const MyGrid = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Project = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const cardsDetails = [
    { id: 1, title: "پروژه مدیریت مخاطبین", logo: contactManager,url:"https://contact.reactnovin.com/Contacts",description:" اپلیکیشن مدیریت مخاطبین  با زبانهای برنامه نویسی React js , javascript , bootstrap , css , html  طراحی شده است .در این اپلیکیشن هم از Front-End و هم تا حدودی Back-End استفاده شده . " },
    { id: 1, title: "  پورتفولیو", logo: MainPortfolio,url:"https://reactnovin.com",description:"این سایت در حقیقت پورتفولیو بنده هست . این سایت با زبانهای React js , Material Ui , Css , Html  ایجاد شده . در این سایت بیشتر تمرکز بر روی Front-End  سایت بوده و بصورت محدود از Back-End استفاده شده " },
    { id: 2, title: "پروژه سایت گردشگری", logo: travel,url:"https://alireza-anvari.github.io/rayanTravel/",description:"قالب سایت گردشگری با زبانهای برنامه نویسی React js , Tailwind , Css , Html ایجاد شده است .  قالب این سایت  یک سایت Static  میباشد   " },
    { id: 3, title: "پروژه فروشگاه گل و گیاه", logo:plantShop ,url:"http://plantshop.reactnovin.com/",description:" سایت فروشگاهی گل و گیاه رزا یک قالب Static  میباشد . در این قالب از زبانهای برنامه نویسی Javascript ,Tailwind , Css , Html استفاده شده است" },
    { id: 4, title: " پروژه ساختمانی", logo: building,url:"http://building.reactnovin.com/",description:"این سایت یک دمو برای یک شرکت ساختمانی میباشد و البته تمرینی برای خود بنده بود  این سایت با زبانهای برنامه نویسی Javascript , Bootstarp , Css , Html  ایجاد گردید  " },
    { id: 4, title: "پورتفولیو قبلی", logo: myPortfolio,url:"https://www.portfolio.reactnovin.com/",description:"این پورتفولیو که مشاهده میکنید اولین پورتفولیو بنده بود (خیلی خنده دار ) . در این پورتفولیو از Javascript , Tailwind , Css , Html  استفاده شده بود. این پورتفولیو رو یادگاری نگهش داشتم" },
  ];

  const cardStyle = {
    p: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const borderVertical = {
    position: "absolute",
    content: '""',
    width: "2px",
    height: "100px",
    top: "50%",
    background: "#fff",
    transform: "translateY(-50%)",
  };
  const borderHorizontal = {
    position: "absolute",
    content: '""',
    width: "80%",
    height: "2px",
    top: "0",
    background: "#fff",
    transform: "translateY(-50%)",
  };
  // const before={position:"absolute",content:'""',width:"2px",height:"120px",top:"50%",background:"#fff",transform:"translateY(-50%)",left:0}
  const qr = {
    width: "100%",
    height: "100%",
    // borderRadius: "5px",
  };
  return (
    <Card sx={{ background: "#fff", color: "#141414" }}>
      <CardContent>
        <Box>
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
                    نمونه کارهای من
                  </Typography>
                }
              ></Chip>
            </Divider>
          </Slide>
          <HelmetProvider>
            {/* <Helmet><title>پورتفولیو  علیـــــرضا انـــــوری</title></Helmet> */}
            <Helmet>
              <title>سایت علیرضا انوری | پروژه های من</title>
            </Helmet>
          </HelmetProvider>
          <Grid
            container
            sx={{
              my: 2,
              alignItems: "center",
              justifyContent: "center",
              rowGap: 2,
            }}
          >
            {cardsDetails.map((detail, index) => (
              <Slide
                direction="up"
                in={loading}
                style={{
                  transitionDelay: loading ? `${index + 3}99ms` : "0",
                }}
              >
                {/* این گرید رو نمیشه تو یه کامپوننت جدا گإاشت */}
                <Grid
                  xs={12}
                  sm={11}
                  md={11}
                  lg={10}
                  xl={10}
                  sx={{ p: 1, background: "#424242", borderRadius: 2 }}
                >
                  <Box sx={{ border: "1px solid #fff", p: 1, borderRadius: 2 }}>
                    <Typography
                      sx={{
                        textAlign: { xs: "center", sm: "left" },
                        color: "#fff",
                        background: "#ffffff7d",
                        width: 1,
                        padding: "5px 10px",
                        boxSizing: "border-box",
                        borderRadius: 2,
                      }}
                      variant="subtitle1"
                    >
{detail.title}                    </Typography>

                    <Grid container sx={{ justifyContent: "center" }}>
                      <Grid xs={11} sm={3} sx={{ ...cardStyle }}>
                        <MyGrid>
                          <Avatar
                            src={detail.logo}
                            sx={{
                              width: { xs: "50%", sm: "80%" },
                              height: { xs: "50%", sm: "80%" },
                              borderRadius: 2,
                            }}
                          />
                        </MyGrid>
                      </Grid>
                      <Grid
                        xs={11}
                        sm={7}
                        sx={{
                          position: "relative",
                          ...cardStyle,alignItems:"flex-start",
                          "&:after": {
                            xs: { ...borderHorizontal },
                            sm: { ...borderVertical, left: 0 },
                          },
                          "&:before": {
                            xs: { ...borderHorizontal, top: "100%" },
                            sm: { ...borderVertical, right: 0 },
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                       
                            textAlign: "center",
                            direction: "ltr",
                            fontSize:".8rem",
                            lineHeight:"45px"
                          }}
                          // variant="caption"
                        >
                          
                          {detail.description}
                          <a target="_blank" href={detail.url}  style={{textDecoration:"none",padding:"0px 20px",display:"inline-block",border:"1px Solid #fff",marginRight:"10px",color:"#fff",borderRadius:"5px"}}>مشاهده سایت</a>
                        </Typography>
                      </Grid>
                      {/* "&:after":{ xs:{...after,transform:"rotateZ(90deg) translateX(50px)",top:"0",right:"50%",height:"250px"},sm:{...after}} */}
                      {/* <Grid xs={11} sm={7}  sx={{...cardStyle,"&:after":{...after,right:0,}}} >2</Grid> */}
                      <Grid xs={11} sm={2} sx={{ ...cardStyle, pb: 0 }}>
                        <MyGrid>
                          {/* <Avatar src={detail.logo} sx={{width:{xs:"30%",sm:"70%"},height:{xs:"50%",sm:"100%"},borderRadius:1}}/> */}

                          <Box sx={{width:{xs:"100px",sm:"80%"},height:{xs:"100px",sm:"80%"}}}>
                            <QRCode
                              value={detail.url}
                              style={{...qr}}
                            />
                          </Box>
                        </MyGrid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Slide>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Project;
