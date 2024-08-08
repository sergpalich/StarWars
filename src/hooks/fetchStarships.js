 const BASE_URL = 'https://swapi.dev/api/starships/';

    export async function fetchStarships(page = 1) {
      try {
        const response = await fetch(`${BASE_URL}?page=${page}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
        
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
      }
      
    }