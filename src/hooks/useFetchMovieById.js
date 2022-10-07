import React from 'react';
import { getMovieById } from '../helpers/getMovieById';

export const useFetchMovieById = () => {
    const [movie, setMovie] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getMovie = async (movieID, language) => {
        const results = await getTrending(media_type, time_window);
        setMovies(results);
        setIsLoading(false);
    };

    React.useEffect(() => {
        getTrendingMovies();
    }, []);

    return { movies, isLoading };
};