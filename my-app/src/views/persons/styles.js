import { InputBase } from '@mui/material'
import styled from 'styled-components'
export const SectionPersons = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    background: #429EBD;
    height: 550px;
    width: 400px;
    @media (max-width: 500px){
        width: 320px;
    }
`
export const Master = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: white;
margin: 0 auto;
padding-bottom: 8px;
`
export const Input = styled(InputBase)`
margin-right: 8px;
border: 2px solid;
border-color: #fff #fff #429EBD;
border-radius: 4px;
`
export const InfoPerson = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: ${props => props.inputColor === "Alive" ? "#66C47F" : props.inputColor === "Dead" ? "#D62611" : "#8A866C"};
margin: 12px;
padding: 8px;
border-radius: 16px;
img{
    :hover {
        -webkit-transform:scale(1.02);
    }
}
@media (max-width: 500px){
    width: 280px;
    img {
        width: 250px;
        
    }
    @media (max-width: 480px){
        width: 270px;
    }
}
`

export const BttAndPersons = styled(Master)`
flex-direction: column;
@media (max-width: 480px){

    button {
        height: 50px;
        width: 150px
    }
}
`
export const Inputs = styled.div`
display: grid; 
grid-auto-columns: 1fr; 
grid-template-columns: 1fr  ; 
grid-template-rows: 1fr auto 1fr; 
padding: 8px;
 @media (max-width: 360px){
    
    label{
        font-size: 14px; 
    }
}
}
`