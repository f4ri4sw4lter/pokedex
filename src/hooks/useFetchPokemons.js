import { useState, useEffect } from 'react';

// Función para obtener la lista de Pokémon
const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9');
    return response.json();
}

// Función para obtener detalles del Pokémon (por ejemplo, nombre, imagen)
const getPokemon = async (url) => {
    const response = await fetch(url);
    return response.json();
}

export const useFetchPokemons = () => {

    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPokemons = async () => {
        setIsLoading(true);
        getPokemons()
            .then(({ results }) => {

                results.forEach((element) => {
                    getPokemon(element.url)
                        .then((data) => {

                            setPokemons((prevPokemons) => [
                                ...prevPokemons,
                                {
                                    name: data.name,
                                    url: element.url,
                                    img: data.sprites.front_default,
                                },
                            ]);
                        })
                        .catch((error) => {
                            console.error('Error with Pokemon data', error);
                        });
                });
                
            })
            .catch((error) => {
                console.error('Error with Pokemon data', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return {
        pokemons,
        isLoading,
        fetchPokemons
    };
};
