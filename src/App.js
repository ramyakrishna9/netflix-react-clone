import React from "react";
import Row from "./Row";
import './App.css';
import requests from "./requests";
import Nav from "./Nav";
import Banner from "./Banner";

function App() {
  return (
    <div className="app">
       <Nav />
       <Banner />
      <Row 
        title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow 
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
      
    </div>
  );
}

export default App;
