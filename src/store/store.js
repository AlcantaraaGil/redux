import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './slices/pokemon';
import { pokemonApi } from '../api/pokemonApi'; 

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware), 
});
