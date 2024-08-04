import { useQuery } from '@tanstack/react-query'
import { fetchStarships } from '../hooks/fetchStarships'
import { useNavigate, Outlet } from 'react-router-dom'

const Starships = () => {
    
    const {data, isLoading, isError} = useQuery({
            queryKey: ['starShips', 'all'],
            queryFn:  fetchStarships,
          })

        const navigate = useNavigate();
    
        if (isLoading) {
          return <span>Loading...</span>
        }
      
        if (isError) {
          return <span>Error: {error.message}</span>
        }
        
        const handleClick = (starship) => {
          const id = starship.url.split('/').slice(-2, -1)[0]; // Extracts the ID from the URL
          console.log('Navigating to starship ID:', id, 'with data:', starship);
          navigate(`/starships/${id}`, { state: { starship } });
        }
           
    return ( 
      <div className='flagships_box'>
      <div>
        {data.results.map((result) => (
          <div key={result.name} className='starship_item' onClick={() => handleClick(result)}>
            <div style={{ textTransform: 'uppercase' }}>{result.name}</div>
            <div>{result.model}</div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

 
export default Starships;