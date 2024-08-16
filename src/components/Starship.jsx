import React, { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { StarshipsContext } from '../components/Context/StarshipsContext';

const Starships = () => {
  const { starships, status, error, incrementPage } = useContext(StarshipsContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        if (status === 'succeeded' && starships.length < 36) {
          incrementPage();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [status, starships.length, incrementPage]);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'failed') {
    return <span>Error: {error}</span>;
  }

  const handleClick = (starship) => {
    const id = starship.url.split('/').slice(-2, -1)[0];
    navigate(`/starships/${id}`, { state: { starship } });
  };

  return (
    <div className='flagships_box'>
      <div>
        {starships.map((starship) => (
          <div key={starship.name} className='starship_item' onClick={() => handleClick(starship)}>
            <div style={{ textTransform: 'uppercase' }}>{starship.name}</div>
            <div>{starship.model}</div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Starships; 