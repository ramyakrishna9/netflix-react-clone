import React, { useEffect, useState } from 'react';
import axios from "./axios";

import "./Row.css";

function Row({title, fetchUrl}) {
const [movies, setMovies] = useState([]);

//it runs snippet of code runs in a specific code
useEffect(() => {
    // if [], runs once when the row loads and dont run again
    async function fetchData() {
        const request = await axios.get(fetchUrl); 
        console.log(request.data.results);
        return request;
    }
    fetchData();
}, []);


    return (
        <div>
            <h2>{title}</h2>

            
        </div>
    )
}

export default Row
