import axios from "axios";

import { useEffect } from "react";
import { Environment } from "../environment";


export const GetCharacters: React.FC = () => {

    useEffect(() => { 
        axios.get(Environment.URL_BASE)
        .then(response => console.log(response.data.results))
        .catch(err => Environment.LISTAGEM_VAZIA);
      }, [])
    return <div>Characters</div>
};