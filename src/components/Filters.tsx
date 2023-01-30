import React from 'react';
import {
  Button, MenuItem, SelectChangeEvent, TextField,
} from '@mui/material';
import './Filters.css';
import { useSearchParams } from 'react-router-dom';
import { Characters } from '../interfaces/Services';
import SelectComponent from './Select';
import getCharacters from '../services/get/getCharacters';
import { FilterParams } from '../interfaces/Filters';
import serializeParams from '../utils/serializeParams';

interface FiltersProps {
  setCharList: (value: Characters) => void;
  setQueryParams: (value: any) => void;
  queryParams: FilterParams;
  setLoading: (value: boolean) => void;
}

export default function Filters(props: FiltersProps) {
  const {
    queryParams, setQueryParams, setCharList, setLoading,
  } = props;
  const [, setSearchParams] = useSearchParams();

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setQueryParams({ ...queryParams, [name.toLowerCase()]: value });
  };

  const fetchFilteredCharacters = async (obj: FilterParams) => {
    setLoading(true);
    setQueryParams({ ...obj, page: '1' }); // faz com que a paginação volte para a primeira página e atualiza os values das options
    const params = serializeParams(obj); // remove parametros não utilizados
    const { data } = await getCharacters({ ...params, page: '1' });
    setSearchParams({ ...params, page: '1' }); // atualiza a url
    setCharList(data);
    setLoading(false);
  };

  const handleClearFilter = async () => {
    fetchFilteredCharacters({
      page: '1',
      gender: 'none',
      status: 'none',
      name: '',
      species: 'none',
    });
  };

  const handleSearch = () => {
    fetchFilteredCharacters(queryParams);
  };

  return (
    <div className="filters-container">
      <TextField
        id="name"
        name="name"
        label="Search by character name"
        variant="standard"
        value={queryParams.name}
        onChange={(e) => handleChange(e as SelectChangeEvent<string>)}
        sx={{
          input: { color: 'white' },
          label: { color: 'gray' },
          div: { color: '#ffffff' },
          '.css-v4u5dn-MuiInputBase-root-MuiInput-root:after': {
            borderBottom: '2px solid gray',
          },
          '.Mui-focused': { color: 'gray' },
        }}
      />

      <SelectComponent
        name="Status"
        size="small"
        value={queryParams.status}
        handleChange={handleChange}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="Alive">Alive</MenuItem>
        <MenuItem value="Dead">Dead</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </SelectComponent>

      <SelectComponent
        name="Gender"
        size="small"
        value={queryParams.gender}
        handleChange={handleChange}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Genderless">Genderless</MenuItem>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </SelectComponent>

      <SelectComponent
        name="Species"
        size="small"
        value={queryParams.species}
        handleChange={handleChange}
      >
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="Alien">Alien</MenuItem>
        <MenuItem value="Animal">Animal</MenuItem>
        <MenuItem value="Cronenberg">Cronenberg</MenuItem>
        <MenuItem value="Disease">Disease</MenuItem>
        <MenuItem value="Human">Human</MenuItem>
        <MenuItem value="Humanoid">Humanoid</MenuItem>
        <MenuItem value="Robot">Robot</MenuItem>
        <MenuItem value="Mythological">Mythological</MenuItem>
        <MenuItem value="Poopybutthole">Poopybutthole</MenuItem>
        <MenuItem value="Planet">Planet</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </SelectComponent>

      <Button
        type="button"
        variant="contained"
        size="large"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
      <Button
        type="button"
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleClearFilter}
      >
        Clear Filters
      </Button>
    </div>
  );
}
