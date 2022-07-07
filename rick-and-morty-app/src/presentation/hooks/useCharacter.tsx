import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CharacterModel } from '../../domain/models'
import {
  makeRemoteFilterCharactersByName,
  makeRemoteFilterCharactersBySpecies,
  makeRemoteFilterCharactersByStatus,
  makeRemoteGetCharacters,
} from '../../main/fatories/usecases'
import useDebounce from '../hooks/use-debounce'

export const useCharacter = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [data, setData] = useState<CharacterModel[]>()
  const [count, setCount] = useState<number>()
  const [filterType, setFilterType] = useState(searchParams.get('filterType') || 'Nenhum')
  const [filterValue, setFilterValue] = useState(searchParams.get('filterValue') || '')
  const [page, setPage] = useState(parseInt(searchParams.get('page') as string) || 1)
  const [loading, setLoading] = useState(false)
  const debouncedSearchTerm = useDebounce(filterValue, 500)

  useEffect(() => {
    setSearchParams({
      filterType: filterType,
      filterValue: filterValue,
      page: page.toString(),
    })
  }, [filterValue, debouncedSearchTerm, page])

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
              }
              setLoading(false)
            })
        }
        break
      case 'especie':
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersBySpecies()
            .perform({ page, species: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
              }
              setLoading(false)
            })
        }
        break
      case 'nome':
        if (debouncedSearchTerm) {
          setLoading(true)
          makeRemoteFilterCharactersByName()
            .perform({ page, name: filterValue })
            .then((data) => {
              if (data) {
                setData(data.results)
                setCount(data.info.pages)
              }
              setLoading(false)
            })
        }
        break
      case 'Nenhum':
        setLoading(true)
        makeRemoteGetCharacters()
          .perform({ page })
          .then((data) => {
            setData(data.results)
            setCount(data.info.pages)

            setLoading(false)
          })

        break
    }
  }, [debouncedSearchTerm, filterType, page])

  const handleChangePage = (event: ChangeEvent<unknown>, value: number) => {
    if (filterType !== 'Nenhum' && !filterValue) {
      return
    }
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
