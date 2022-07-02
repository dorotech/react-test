import React from 'react'
import { Box, LinearProgress, Pagination } from '@mui/material'
import { Header } from '../../components/Header'
import { FilterComponent } from '../../components/Filter'
import { CharCard } from '../../components/CharCard'
import { CharacterModel } from '../../../domain/models'
import { useCharacter } from '../../hooks/useCharacter'
import styles from './Home.module.scss'

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
    <Box className={styles.body}>
      <Header />
      <Box className={styles.main}>
        <FilterComponent
          filterType={filterType}
          filterValue={filterValue}
          setFilterType={setFilterType}
          setFilterValue={setFilterValue}
        />
        {loading && <LinearProgress />}
        <Box className={styles.characters}>
          {data?.map((char: CharacterModel) => (
            <CharCard key={char.id} char={char} />
          ))}
        </Box>
        <Box className={styles.pagination}>
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
