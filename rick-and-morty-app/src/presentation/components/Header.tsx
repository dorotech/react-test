import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import logo from './../assets/logo.png'
import './Header.style.scss'
export const Header = () => {
  return (
    <Box className='container'>
      <img className='logo' src={logo} alt='logo' />
    </Box>
  )
}
