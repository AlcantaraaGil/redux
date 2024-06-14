import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPokemonsQuery } from './api/pokemonApi'; 
import { setPage } from './store/slices/pokemon'; 
import PokemonCard from './components/PokemonCard'; 

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const PokemonAPP = () => {
  const dispatch = useDispatch();
  const { page } = useSelector(state => state.pokemons);
  const { data, error, isLoading } = useGetPokemonsQuery(page);

  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');

  if (error) return <p>Error: {error.message}</p>;

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
    // setSelectedPokemon(null); 
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      dispatch(setPage(page - 1));
      // setSelectedPokemon(null); 
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />
      <h1>PokemonAPP</h1>
      <hr />
      <div className="main-container" style={{ display: 'flex', justifyContent:'center' }}>
        <div className="list-container" style={{ marginRight: '100px' }} >
          <ul>
            {data?.results.map(({ name }) => (
              <li 
                key={name} 
                onClick={() => setSelectedPokemon(name)} 
                style={{ cursor: 'pointer', textDecoration: selectedPokemon === name ? 'underline' : 'none', color: selectedPokemon === name && '#2196f3'}} 
              >
                {name}
              </li>
            ))}
          </ul>
          <Button variant="text" disabled={isLoading} onClick={handlePreviousPage}>
            Previous
          </Button>
          <Button variant="text" disabled={isLoading} onClick={handleNextPage}>
            Next
          </Button>
        </div>

        {selectedPokemon && <PokemonCard pokemonName={selectedPokemon} />} 
      </div>
    </ThemeProvider>
  );
};
