export const getPokemons = async () => {

    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9";
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  