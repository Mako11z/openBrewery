import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function Statistics({state, city}) {
    const [numBreweriesCity, setNumBreweriesCity] = useState(0);
    const [numBreweriesState, setNumBreweriesState] = useState(0);


    useEffect(() => {
        setNumBreweriesState(state.length);
        setNumBreweriesCity(city.length);
    }, [state, city]);

    return (
        <>
        <h3>Number of breweries in {city.city}:{numBreweriesCity}</h3>
        <h3>Number of breweries in {state.state}: {numBreweriesState}</h3>
        </>
    );
};

export default Statistics;