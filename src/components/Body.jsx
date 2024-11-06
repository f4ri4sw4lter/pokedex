import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import PokemonCard from './PokemonCard';
import Box from '@mui/material/Box';
import { useFetchPokemons } from '../hooks/useFetchPokemons';


export default function Body() {

    const { pokemons, isLoading, fetchPokemons } = useFetchPokemons();

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                {!isLoading &&

                    pokemons.map((pokemon) => (
                    <Grid size={4} key={pokemon.name}>
                        <PokemonCard data={pokemon}/>
                    </Grid>

                ))}
            </Grid>
        </Box>
    );
}
