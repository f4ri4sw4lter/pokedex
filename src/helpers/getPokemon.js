export const getPokemon = async (url) => {

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  