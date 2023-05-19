import { useState } from 'react';
import './filtro.css';

//COMPONENTE
export default function Filtro({ onFilterChange }) {
  //ESTADO LOCAL - ARMAZENA O VALORES DO FILTRO
  const [filtro, setFiltro] = useState({
    nome: '',
    genero: 'None',
    especie: 'None',
    status: 'None'
  });

  //FUNÇÃO - LIDA COM A ALTERAÇÃO DOS CAMPOS DO FILTRO
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFiltro((prevFiltro) => ({ ...prevFiltro, [name]: value }));
  };

  //FUNÇÃO -  LIDA COM O ENVIO DO FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterChange(filtro);
  };

  //FUNÇÃO - LIDA COM O BOTÃO DE LIMPAR FILTRO
  const handleLimpar = () => {
    setFiltro({
      nome: '',
      genero: 'None',
      especie: 'None',
      status: 'None'
    });
    onFilterChange({
      nome: '',
      genero: 'None',
      especie: 'None',
      status: 'None'
    });
  };

  //RENDERIZAÇÃO DO COMPONENTE
  return (
    <form onSubmit={handleSubmit} className="filtro__container">
      <p>Filter</p>
      <div className='filtro'>
        <div className="filtro__nome">
          <label>Name</label>
          <input type="text" name="nome" value={filtro.nome}onChange={handleChange} placeholder="Enter the name"/>
        </div>
        <div className="filtro__status">
          <label>Status</label>
          <select name="status" value={filtro.status} onChange={handleChange}>
            <option value="None">None</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <div className="filtro__especie">
          <label>Species</label>
          <select name="especie" value={filtro.especie} onChange={handleChange}>
            <option value="None">None</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
          </select>
        </div>
        <div className="filtro__genero">
          <label>Gender</label>
          <select name="genero" value={filtro.genero} onChange={handleChange}>
            <option value="None">None</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
      </div>
      <div>
        <button type="submit">Search</button>
        <button type="button" onClick={handleLimpar}>Clean</button>
      </div>
    </form>
  );
}
