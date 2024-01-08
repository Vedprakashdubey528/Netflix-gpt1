import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';


// fetch trailer video && updating store with the trailer data;
const useTrailer = (movieId) => {
    const dispatch = useDispatch();
    // this api call give all the clip and video related the id we have passed in from main container api
    const getMovieVideoes = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);

        const json = await data.json();

        const filtertrailer = json.results.filter(video => video.type === "Trailer");
        // in case of multiple trailer we have taken filtertrailter and then the 1 st one from that aso the case possible that movie have no trailer so take the first video and show on screen.
        const trailer = filtertrailer.length ? filtertrailer[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        console.log(trailer);
    };
    useEffect(() => {
        getMovieVideoes();
    }, [])
}

export default useTrailer;