import React, { useEffect } from 'react'
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
import styles from './Filter.module.scss'

interface IProps {
  filterType: string
  filterValue: string
  setFilterType: (value: string) => void
  setFilterValue: (value: string) => void
}

export const FilterComponent = ({
  filterType,
  filterValue,
  setFilterType,
  setFilterValue,
}: IProps) => {
  const handleResetFilters = () => {
    setFilterType('Nenhum')
    setFilterValue('')
  }
  useEffect(() => {
    if (filterType === 'Nenhum') {
      handleResetFilters()
    }
  }, [filterType])
  return (
    <Box className={styles.container}>
      <FormControl variant='standard' fullWidth>
        <InputLabel>Filtrar por</InputLabel>
        <Select
          value={filterType || 'Nenhum'}
          onChange={(e) => {
            setFilterType(e.target.value)
          }}
        >
          <MenuItem value={'Nenhum'}>Nenhum</MenuItem>
          <MenuItem value={'status'}>Status</MenuItem>
          <MenuItem value={'especie'}>Espécie</MenuItem>
          <MenuItem value={'nome'}>Nome</MenuItem>
        </Select>
      </FormControl>
      {filterType !== 'Nenhum' && (
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
