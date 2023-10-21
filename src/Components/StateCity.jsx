import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function StateCity({ state, city }) {
    const [cityName, setCityName] = useState('');
    const [stateName, setStateName] = useState('');

    useEffect(() => {
        setCityName(city);
        setStateName(state);
    }, [city, state]);
    return (
        <>
        <h3>State Name: {stateName} </h3>
        <h3>City Name: {cityName} </h3>
        </>
    );
};

export default StateCity;