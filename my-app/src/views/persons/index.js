import axios from 'axios'
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { SectionPersons } from './styles'
import React from 'react';
import { Link } from 'react-router-dom';

const Persons = () => {
const [persons, setPersons] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [search, setSearch] = useState('')
const [gender, setGender] = useState('')
const [specie, setSpecie] = useState('')
const [status, setStatus] = useState('')

useEffect(() => {
  getPersons()
}, [currentPage, search, gender, specie, status])


const getPersons = () => {
  axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}
  &name=${search}
  &gender=${gender}
  &species=${specie}
  &status=${status}`)

  .then((res)=>{
    setPersons(res.data.results)
    console.log(res.data.results)
  }).catch((e)=>{
    console.log(e)
  })
}
console.log(status)
const mapPersons = persons.map((person)=>{
return (
<div >
  <Link to={`/details/${person.id}`}>
    <img src={person.image} alt="imagem do personagem"></img>
   <p>{person.name}</p>
   <p>{person.status === 'unknown' ? 'Rick não se importa' : person.status}</p>
  </Link>

</div>

)
})


return (
  <div className="App">
    <Header/>
    <div>
      <input value= {search} type="text" onChange={(ev) => setSearch(ev.target.value)} placeholder='nome'/>
    </div>
    <input value= {gender} type="text" onChange={(ev) => setGender(ev.target.value)} placeholder='gender'/>
    <input value= {specie} type="text" onChange={(ev) => setSpecie(ev.target.value)} placeholder='especie'/>
    <p>se o Rick não se importa com o status do personagem, pesquise por "unknown"</p>
    <input value= {status} type="text" onChange={(ev) => setStatus(ev.target.value)} placeholder='status'/>
    <SectionPersons>
       {mapPersons}
    </SectionPersons>
    <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
    <button onClick={() => setCurrentPage(currentPage + 1)}>Prox</button>
  </div>
);
}
export default Persons;