import React from 'react'
import { Box, LinearProgress, Pagination } from '@mui/material'
import { Header } from '../../components/Header'
import { FilterComponent } from '../../components/Filter'
import { CharCard } from '../../components/CharCard'
import { CharacterModel } from '../../../domain/models'
import { useCharacter } from '../../hooks/useCharacter'
import './style.scss'

export const Home = () => {
  const {
    data,
    count,
    filterType,
    filterValue,
    setFilterType,
    setFilterValue,
    page,
    loading,
    handleChangePage,
  } = useCharacter()

  return (
    <Box className='body'>
      <Header />
      <Box className='main'>
        <FilterComponent
          filterType={filterType}
          filterValue={filterValue}
          setFilterType={setFilterType}
          setFilterValue={setFilterValue}
        />
        {loading && <LinearProgress />}
        <Box className='characters'>
          {data?.map((char: CharacterModel) => (
            <CharCard key={char.id} char={char} />
          ))}
        </Box>
        <Box className='pagination'>
          <Pagination
            size='large'
            count={count}
            page={page}
            onChange={handleChangePage}
            color='primary'
          />
        </Box>
      </Box>
    </Box>
  )
}
