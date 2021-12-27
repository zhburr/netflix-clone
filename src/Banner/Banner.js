import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";
const imageBaseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([null]);

  function truncate(string, maxLength) {
    return string?.length > maxLength
      ? string.substr(0, maxLength - 1) + "..."
      : string;
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[1]);
      return request;
    }
    fetchData();
  }, [requests.fetchNetflixOriginals]);

  console.log(`movies`, movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imageBaseUrl}${movie.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">PLay</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie.overview, 200)}</h1>
      </div>
      {/* <div className="banner--fadeBottom"></div> */}
    </header>
  );
}

export default Banner;
