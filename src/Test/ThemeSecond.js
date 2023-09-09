import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/system';
import { red, green, blue } from '@mui/material/colors';
import { Typography,Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
import styled from '@emotion/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import GlobalStyles from '@mui/material/GlobalStyles';


// import { withStyles } from "@material-ui/core/styles"



// const customTheme = createTheme({
//   a:{
//     fontSize:"2rem",
//     background:"tomato"
//   },
//   b:{
//     fontSize:"2rem",
//     background:"cyan"
//   },
// });

// const customTheme1 = createTheme({
//   // typography: {
//   //   h3: {
//   //     main: '#1976d2',
//   //     contrastText: 'red',
//   //     fontSize:"3rem"
//   //   },
//   // },
//   a:{
//     fontSize:"2rem",
//     background:"gold"
//   },
//   b:{
//     fontSize:"2rem",
//     background:"cyan"
//   },
// });

// const MyThemeComponent = styled('div')(({ theme }) => ({
//   color: theme.a.fontSize,
//   backgroundColor: theme.a.background,
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: green[500],
//   },
//   [theme.breakpoints.down('md')]: {
//     backgroundColor: red[500],
//   },
// }));

// const MyThemeComponent2 = styled('p')(({ theme }) => ({
//   color: theme.a.fontSize,
//   backgroundColor: theme.b.background,
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: green[500],
//   },
//   // [theme.breakpoints.down('md')]: {
//   //   backgroundColor: red[500],
//   // },
// }));
// const MyCode=styled(Typography)({
//   background: "#131313"
// });

// const MyButton = styled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

// });



// const MyStyledButton = (props) => (

  
//   <Button
//     sx={{
//       // mx: 1,
//       padding:10,
//       background:"red" ,
//       // ✔️ this shortcut is specific to the `sx` prop,
//     }}
//   >
//     {props.children}
//   </Button>
// );



// const MyStyledButton1 = styled('button')({
//   padding: 5,
//   background:"green" // means "1px", NOT "theme.spacing(1)"
// });


// const Child = styled.div`
//   color: green;
// `;
// const Parent = styled.div`
//   ${Child} {
//     color: green;
//   }
// `;



const styles = {
  a:{
  
     background:"#141414",
      '@media (min-width: 780px)': {
        // display:"none",
        background:"red",
      }

  },
  b:{
    background:"red"
  }
    
    }
  

export default function ThemeUsage() {

  const x={
    a:{h1:{background:"teal"}}
  }

  // const Mobile = useMediaQuery('(min-width:600px)');
  // const Desktop = useMediaQuery('(min-width:1200px)');
  // const Ipad = useMediaQuery('(min-width:1000px)');


  // const     drawerWidth= {
  //    background:"#141414",
  //     '@media (min-width: 780px)': {
  //       display:"none",
  //       background:"red",
  //     }
  //   }
  

// const myStyles=styles()
  return (
    <>
    {/* <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider>
      <ThemeProvider theme={customTheme1}>
      <MyThemeComponent2>Styled div with theme</MyThemeComponent2>
    </ThemeProvider>
    <MyButton>aaaaa</MyButton>
    <MyCode  variant="h1">aaaaa</MyCode> */}
 {/* <MyStyledButton>aaa</MyStyledButton> */}

{/* <MyStyledButton1>aaa</MyStyledButton1> */}

{/* <Button>This my button component.</Button> */}
{/* <Child>Red because I am not inside a Parent</Child> */}
    {/* <Parent>
         <Child>Green because I am inside a Parent</Child>
    </Parent> */}







<Typography   sx ={styles.a}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>



      <GlobalStyles styles={x.a} />
      <h1>Grey h1 element</h1>


    {/* <Typography  open={Mobile}
                onClose={!Mobile}
                 sx={{background:{sm:"blue"}}}
                 key='1'
                 >mobile</Typography >
                     <Typography  open={Ipad}
                onClose={!Ipad}
                 sx={{background:{md:"red"}}}
                 key='2'
                 >Ipad</Typography >
                     {/* <Typography  open={!Mobile}
                onClose={Mobile}
                 sx={{background:{md:"blue"}}}
                 key='3'
                 >mobile</Typography > */}


 */


{/* <Typography   sx ={drawerWidth}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography> */}

    </>
  );
}
