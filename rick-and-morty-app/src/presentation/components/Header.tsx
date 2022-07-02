import React from 'react'
import { Box } from '@mui/material'
import logo from './../assets/logo.png'
import styles from './Header.module.scss'
export const Header = () => {
  return (
    <Box className={styles.container}>
      <img className={styles.logo} src={logo} alt='logo' />
    </Box>
  )
}
