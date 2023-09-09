import { useEffect, useState } from "react";
import "../App.css";

import { useTheme } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";
import MainContext from '../Context'
import {Sidebar} from "../Components/Sidebar";
import PagesContainer from "./PagesContainer";
import MainLayout from "../layout/MainLayout";
import Page from "../Components/Page/Page";
import { Typography,Box } from "@mui/material";
import DrawerActionButton from '../Components/Drawer/DrawerActionButton';
import SidebarContainer from "./SidebarContainer";
import SwipeableViews from 'react-swipeable-views';
import toast,{Toaster} from 'react-hot-toast'



import { Home,About,Project,Comments,ContactMe } from "../Components/Pages";
import { theme } from './../layout/Theme/Theme';

function App() {


  const [pageNumber,SetPageNumber]=useState(0)
  const [drawerOpen,setDrawerOpen]=useState(false)

  
  const theme=useTheme();
  const isMdUp=useMediaQuery(theme.breakpoints.up("md"));
  useEffect(()=>{
if(isMdUp)
{
  setDrawerOpen(false)
}
  },[isMdUp])

  const handlePageNumber=(event,newValue)=>{

    SetPageNumber(newValue)
  }
  return (
        <div className="App">
          <Toaster/>
          <MainContext.Provider value={{pageNumber,handlePageNumber,drawerOpen,setDrawerOpen}}>

          <MainLayout>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <DrawerActionButton/>

                <PagesContainer>
                  <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber} disabled={true}>

                    <Page  index={0}>
             <Home/>
                        {/* <Typography>صفحه اصلی</Typography> */}
                    </Page>


                    <Page  index={1}  >
                          <About/>

                    </Page>
                    <Page  index={2}>
                            <Project/>


              {/* <Box sx={{width:200,height:200}}>

      <div style={{ marginTop: 200, display: "flex",flexDirection: "row" }}>
         <div>
            <QRCode
               value="https://contact.reactnovin.com/Contacts"style={{ marginRight: 50 }}/>
            <p>saaaaaa </p>
         </div>

  
      </div>
           </Box> */}





                    </Page>
                    <Page  index={3}>
                        {/* <Typography> نظرات دانشجویان</Typography> */}
                        <Comments/>
                    </Page>
                    <Page  index={4}>
                        {/* <Typography>ارتباط با من </Typography> */}
                        <ContactMe/>
                    </Page>
          </SwipeableViews>
                </PagesContainer>
          </MainLayout>

          </MainContext.Provider>
        </div>
  );
}

export default App;
