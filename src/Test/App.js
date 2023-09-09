import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import { red, green, blue } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
// import { theme } from './../layout/Theme/Theme';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import ThemeSecond from '../Test/ThemeSecond'

// const Root = styled('div')(({ theme }) => ({

//   [theme.breakpoints.up('xs')]: {
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('sm')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: green[500],
//   },
// }));

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });




// const styles = (theme) => ({
//   root: {
//     backgroundColor: 'blue',
//     // Match [md, ∞)
//     //       [900px, ∞)
//     // [theme.breakpoints.up('md')]: {
//     //   backgroundColor: 'red',
//     // },
//   },
// });



export default function App() {
  return (
    // <Root>
    //   <Typography>down(md): red</Typography>
    // <Typography>up(md): blue</Typography>
    //  <Typography>up(lg): green</Typography>
    // </Root>
    // <ThemeProvider >
    //   <Typography  class<Name={styles}>aaaaaa</Typography>
    // </ThemeProvider>
    // <ThemeProvider theme={styles}>
    // <Typography >rtghfhfghfg</Typography>
    // </ThemeProvider>
    <ThemeSecond/>
  );
}