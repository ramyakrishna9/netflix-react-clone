import React from "react";
import Row from "./Row";
import './App.css';
import request from "./request";

function App() {
  return (
    <div className="App">
      <h1>let's build a netflix-clone</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={request. fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
