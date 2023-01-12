import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
const {id} = useParams();

const [person, setPerson] = useState({})

useEffect(()=>{
    id&&getPerson()
},[id])
const getPerson = () => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res)=>{
       setPerson(res.data)
       console.log(res.data)
    })
    .catch((e)=>{
        console.log(e)
    })
}
    return (
<div>
<a href={person.image} target="_blank" rel="noreferrer" >
    <img 
        src={person?.image} 
        alt="imagem do personagem">
    </img>
</a>
<p>{person?.gender}</p>
<p>{person?.species}</p>
<p>{person?.origin?.name}</p>
</div>
    )
}

export default Details;