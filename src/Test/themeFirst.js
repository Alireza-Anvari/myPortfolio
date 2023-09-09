import { createTheme } from '@mui/material/styles';
import React from 'react'
import { Typography } from '@mui/material';

export const themeFirst =createTheme({
    [themeFirst.breakpoints.up('md')]: {
        backgroundColor: 'red',
      },
})