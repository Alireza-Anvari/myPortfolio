import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    direction: "rtl",
    palette:{
        mode:"dark",
        primary:{
                main:"#1e90ff",
        },
        secondary:{
            main:"#FFFFFF"
        }
    },
    typography:{
  
    fontFamily:"fontEn1,  fontFa1 , fontFa2",
            button:{
            fontFamily:"fontEn1,  fontFa1 , fontFa2",
            fontSize:"2rem",
            // fontWeight:"bold"
        },
   
    }
  });

