import React, { createContext, useState, useEffect } from 'react';
import { fetchStarships } from '../../hooks/fetchStarships';

export const StarshipsContext = createContext();

export const StarshipsProvider = ({ children }) => {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStarships = async () => {
      setStatus('loading');
      try {
        const data = await fetchStarships(page);
        setStarships(prev => [...prev, ...data.results]);
        setStatus('succeeded');
      } catch (err) {
        setError(err.message);
        setStatus('failed');
      }
    };

    loadStarships();
  }, [page]);

  const incrementPage = () => {
    if (starships.length < 36) {
      setPage(prevPage => prevPage + 1);
    }
  };

  return (
    <StarshipsContext.Provider value={{ starships, status, error, incrementPage }}>
      {children}
    </StarshipsContext.Provider>
  );
};