const BASE = 'https://swapi.dev/api/starships/?page=1'; 



export async function fetchStarships() {
    try {
        const response = await fetch(BASE);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}