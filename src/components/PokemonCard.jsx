import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useGetPokemonDetailsQuery } from '../api/pokemonApi';

const PokemonCard = ({ pokemonName }) => {
  const { data, error, isLoading } = useGetPokemonDetailsQuery(pokemonName);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    // <div className="pokemon-card">
    //   <h2>{data.name}</h2>
    //   <img src={data.sprites.front_default} alt={data.name} />
    //   <p>Height: {data.height}</p>
    //   <p>Weight: {data.weight}</p>
    //   <p>Types: {data.types.map(type => type.type.name).join(', ')}</p>
    // </div>
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={data.sprites.front_default}
          alt={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Height: {data.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {data.weight}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Types: {data.types.map(type => type.type.name).join(', ')}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default PokemonCard;