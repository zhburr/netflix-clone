import React,{useState,useEffect} from 'react'
import axios from '../axios';
import requests from '../request';
function Banner() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [requests.fetchNetflixOriginals]);

    console.log(`movies`, movies);

    return (
        <header> {/*<< background image  */}
        {/* title */}
        {/* 2 buttons */}
        {/* description */}
        </header>
    )
}

export default Banner
