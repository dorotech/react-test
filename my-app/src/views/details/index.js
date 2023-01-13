import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPerson } from "../persons/hooks";
import { InfoPerson } from "../persons/styles";

const Details = () => {
const {id} = useParams();

const [person, setPerson] = useState({})

useEffect(()=>{
    id&&getPerson(id, setPerson)
},[id])

    return (
<InfoPerson inputColor={person.status}>
<a href={person.image} target="_blank" rel="noreferrer" >
    <img 
        src={person?.image} 
        alt="imagem do personagem">
    </img>
</a>
<p>Genêro: {person?.gender}</p>
<p>Espécie: {person?.species}</p>
<p>Origem: {person?.origin?.name}</p>
</InfoPerson>
    )
}

export default Details;