import { Box } from "@mui/material";
import React, { useContext } from "react";
import MainContext from "../../Context";

const Page = ({ children,  index, ...others }) => {
  const { pageNumber } = useContext(MainContext);
  const pageStyle= (pageNumber !==0 ) ? { height:"auto",overflow:"hidden" }:{ height:"100vh",overflow:"hidden" } 
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebarTab-${index}`}
      {...others}
    >
      {pageNumber === index &&  (<Box sx={pageStyle}>{children}</Box>)}
    </div>
  );
};

export default Page;
