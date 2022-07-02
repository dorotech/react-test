import React, { ChangeEvent, useEffect, useState } from 'react'
import { CharacterModel } from '../../domain/models'
import {
  makeRemoteFilterCharactersByName,
  makeRemoteFilterCharactersBySpecies,
  makeRemoteFilterCharactersByStatus,
  makeRemoteGetCharacters,
} from '../../main/fatories/usecases'
import useDebounce from '../hooks/use-debounce'

export const useCharacter = () => {
  const [data, setData] = useState<CharacterModel[]>()
  const [count, setCount] = useState<number>()
  const [filterType, setFilterType] = useState('Nenhum')
  const [filterValue, setFilterValue] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(filterValue, 500)

  useEffect(() => {
    switch (filterType) {
      case 'status':
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersByStatus()
            .perform({ page, status: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
                console.log(data)
              }
              setLoading(false)
            })
        }
        break
      case 'especie':
        console.log('especie')
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersBySpecies()
            .perform({ page, species: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
                console.log(data)
              }
              setLoading(false)
            })
        }
        break
      case 'nome':
        console.log('nome')
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersByName()
            .perform({ page, name: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
                console.log(data)
              }
              setLoading(false)
            })
        }
        break
      case 'Nenhum':
        console.log('default')
        setLoading(true)
        makeRemoteGetCharacters()
          .perform({ page })
          .then((data) => {
            setData(data.results)
            setCount(data.info.pages)
            console.log(data)
            setLoading(false)
          })

        break
    }
  }, [debouncedSearchTerm, filterType, page])

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return {
    data,
    count,
    filterType,
    filterValue,
    setFilterType,
    setFilterValue,
    page,
    loading,
    handleChangePage,
  }
}
