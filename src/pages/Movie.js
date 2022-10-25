import React from 'react';
import {useParams} from "react-router-dom";
import  {useFetchMovieById} from "../hooks/useFetchMovieById";
import { MovieCard } from '../components/MovieCard';

export const Movie = () => {

  const {movieId, media_type} = useParams();
  const {movie, isLoading} = useFetchMovieById(movieId, media_type);

  console.log("Movie", movie);

  return (
    <div className="text-center">
      <MovieCard
        {...movie}
     />
    </div>
  )
}
