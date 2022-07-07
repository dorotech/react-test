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
import { status } from '../enums/status'
import { species } from '../enums/species'

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
        <>
          {filterType === 'especie' && (
            <FormControl variant='standard' fullWidth>
              <InputLabel>Filtrar por espécie</InputLabel>
              <Select
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value)
                }}
              >
                {species.map((status) => (
                  <MenuItem key={status.value} value={status.value}>
                    {status.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {filterType === 'status' && (
            <FormControl variant='standard' fullWidth>
              <InputLabel>Filtrar por status</InputLabel>
              <Select
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value)
                }}
              >
                {status.map((status) => (
                  <MenuItem key={status.value} value={status.value}>
                    {status.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {filterType === 'nome' && (
            <FormControl variant='standard' fullWidth>
              <InputLabel>Filtrar por nome</InputLabel>
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
        </>
      )}
      <Button variant='outlined' onClick={handleResetFilters}>
        Limpar
      </Button>
    </Box>
  )
}
