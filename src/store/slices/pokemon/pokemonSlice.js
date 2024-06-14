import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPage, setPokemons } = pokemonSlice.actions;
