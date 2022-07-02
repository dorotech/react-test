import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './Filter.style.scss'

export const FilterComponent = () => {
  const [filterType, setFilterType] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const handleResetFilters = () => {
    setFilterType('')
    setFilterValue('')
  }
  return (
    <Box className='container'>
      <FormControl variant='standard' fullWidth>
        <InputLabel>Filtrar por</InputLabel>
        <Select
          defaultValue={''}
          onChange={(e) => {
            setFilterType(e.target.value)
          }}
        >
          <MenuItem value={'status'}>Status</MenuItem>
          <MenuItem value={'espécie'}>Espécie</MenuItem>
          <MenuItem value={'nome'}>Nome</MenuItem>
        </Select>
      </FormControl>
      {filterType !== '' && (
        <FormControl fullWidth variant='standard'>
          <InputLabel>Pesquisar por {filterType}</InputLabel>
          <Input
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value)
            }}
            endAdornment={
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      )}
      <Button variant='outlined' onClick={handleResetFilters}>
        Limpar
      </Button>
    </Box>
  )
}
