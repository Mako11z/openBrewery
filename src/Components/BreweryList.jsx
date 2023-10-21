import React from 'react';
import { useEffect, useState } from 'react';

function BreweryList({ cityBrews }) {
    const [cityBreweries, setCityBreweries] = useState([]);
    useEffect(() => {
        setCityBreweries(cityBrews);
    }, [cityBrews]);
    return (
        <>
        <ul>
            {cityBreweries.map((brewery) => (
                <li key={brewery.id}>
                    <h3>Name: {brewery.name}</h3>
                    <h4>Website: {brewery.website_url}</h4>
                </li>
            ))}
        </ul>
        </>
    );
};
export default BreweryList;