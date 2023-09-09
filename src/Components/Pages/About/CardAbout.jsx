import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '../../../Utils/CircularProgress'

import { Card,CardContent,CardActionArea,Typography } from '@mui/material';
const CardAbout = ({id,title,logo,percentage}) => {
    const cardSkill={ maxWidth: "320px",
margin:{xs:"auto"},borderRadius:"10px" }
  return (
    <Grid xs={12} sm={5} md={3.5} ld={3.5} xl={3.5} sx={{mt:5}}>
                                
    <Card sx={cardSkill}>
              <CardActionArea sx={{"&.MuiButtonBase-root": {flexDirection:"column"}}}>
                  <CardContent>
                  <Typography  variant="h5" component="div">
                      {title}
                  </Typography>
                            {logo}
                  </CardContent>
            
                   <CircularProgress num={percentage}/>

              </CardActionArea>
  </Card>
                          </Grid>  )
}

export default CardAbout