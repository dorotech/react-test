import axios from "axios"

export const getPersons = (currentPage, search, gender, specie, status, setPersons) => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}
    &name=${search}
    &gender=${gender}
    &species=${specie}
    &status=${status}`)
  
    .then((res)=>{
      setPersons(res.data.results)
  
    }).catch((e)=>{
      console.log(e)
    })
  }

export const getPerson = (id, setPerson) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res)=>{
       setPerson(res.data)
    })
    .catch((e)=>{
        console.log(e)
    })
}  