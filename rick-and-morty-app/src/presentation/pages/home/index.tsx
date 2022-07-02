import React from 'react'
import { Box } from '@mui/material'
import { Header } from '../../components/Header'
import './style.scss'
import { FilterComponent } from '../../components/Filter'

export const Home = () => {
  return (
    <Box className='body'>
      <Header />
      <Box className='main'>
        <FilterComponent />
      </Box>
    </Box>
  )
}
