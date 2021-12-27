import React from "react";
import Row from "../Row/Row";
import requests from "../request";
import Banner from "../Banner/Banner";
import Nav from "../Navbar/Nav";

function Homscreen() {
  return (
    <div>
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />

      {/* row */}
      {/* <div> */}
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* </div> */}
    </div>
  );
}

export default Homscreen;
