import React from 'react'
import {  ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache  from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import {theme} from './Theme/Theme'
import Grid from '@mui/material/Unstable_Grid2';




const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({children}) => {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
 
        <Grid container sx={{height:"100vh"}}>
{children}
        </Grid>
      </ThemeProvider>
  </CacheProvider>
  )
}

export default MainLayout