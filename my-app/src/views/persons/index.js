import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Master, SectionPersons, Input, InfoPerson, BttAndPersons, Inputs } from './styles'
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, InputLabel } from '@mui/material';
import { getPersons } from './hooks';

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('')
  const [gender, setGender] = useState('')
  const [specie, setSpecie] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    getPersons(currentPage, search, gender, specie, status, setPersons)
  }, [currentPage, search, gender, specie, status])


  const mapPersons = persons.map((person) => {
    return (
      <InfoPerson inputColor={person.status}>
        <Link to={`/details/${person.id}`}>
          <img src={person.image} alt="imagem do personagem"></img>
        </Link>
        <p>{person.name}</p>
        <p>{person.status === 'unknown' ? 'Rick não se importa' : person.status}</p>
      </InfoPerson>

    )
  })


  return (
    <Master>
      <Header />
      <Inputs mb="16px">
        <Input value={search} type="text" onChange={(ev) => setSearch(ev.target.value)} placeholder='nome' />
        <Input value={gender} type="text" onChange={(ev) => setGender(ev.target.value)} placeholder='gender' />
        <Input value={specie} type="text" onChange={(ev) => setSpecie(ev.target.value)} placeholder='especie' />
        <InputLabel>Status desconhecido? pesquise por "unknown"</InputLabel>
        <Input value={status} type="text" onChange={(ev) => setStatus(ev.target.value)} placeholder='status' />
      </Inputs>

      <BttAndPersons>
        <Box display="flex" mb="8px">
          <Button onClick={() => setCurrentPage(currentPage - 1)} variant="contained" color="error">Prev</Button>
          <Button onClick={() => setCurrentPage(currentPage + 1)} variant="contained">Prox</Button>
        </Box>

        <SectionPersons>
          {mapPersons}
        </SectionPersons>

      </BttAndPersons>

    </Master>
  );
}
export default Persons;