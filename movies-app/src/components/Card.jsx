import React, { useState, useEffect } from 'react';

const Card = ({ id }) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            method: 'GET',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWVlMTRjZGMzNWJlN2QyNDUxMWE2MTcwODMxNmZkZCIsIm5iZiI6MTc0ODY4Nzc0NS45NDEsInN1YiI6IjY4M2FkYjgxMWM5ZTYxMjY4YzdmMzczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KZhEGgN9z4wvOJ2jVmrxQHb124i-7lQKJpEY8kE5whc',
              accept: 'application/json',
            },
          }
        );

        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [id]);

  if (!show) return null;

  return (
    <div className="bg-red-500 p-4 z-50 text-white rounded-md relative">
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 text-lg font-bold"
      >
        ✕
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movie && (
        <div>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Release: {movie.release_date}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
