import { useEffect } from 'react'
import { useState } from 'react'
import BreweryList from './Components/BreweryList';
import Statistics from './Components/Statistics';
import StateCity from './Components/StateCity';
import BreweryFilter from './Components/BreweryFilter';


function App() {
  const [allBreweries, setAllBreweries] = useState([]);
  const [cityBreweries, setCityBreweries] = useState([]);
  const [stateBreweries, setStateBreweries] = useState([]);
  const [cityName, setCityName] = useState('austin'); // default city
  const [stateName, setStateName] = useState('texas'); // defualt state
  const [filteredBreweries, setFilteredBreweries] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Fetch all the breweries
  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_state=texas&per_page=200`);
        const data = await response.json();
        setStateBreweries(data); // All breweries in texas
      } catch (error) {
        console.error();
      }
    };
    fetchBreweries();
  }, []);

  // Fetch the breweries in the selected city
  const fetchBreweriesByCity = async (city) => {
    try {
      const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=200`);
      const data = await response.json();
      setCityBreweries(data);
      if (data.length > 0) {
        setStateName(data[0].state); // Get the state the city is located in
      } else {
        setStateName(''); // Handle the case where there is no data for the city
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterSubmit = (city) => {
    setCityName(city);
    const filteredCities = stateBreweries.filter((brewery) => brewery.city === city);
    setCityBreweries(filteredCities);
    setSearchText('');
  }
 
  return (
    <>
    <h3>Search Cities</h3>
        <input
          type="text"
          placeholder="Search by city"
          onChange={(inputString) => setSearchText(inputString.target.value)}
        />
       <button onClick={() => handleFilterSubmit(searchText)}>Submit</button>
    <StateCity state={stateName} city={cityName} /> 
    <Statistics state={stateBreweries} city={cityBreweries} />
    <BreweryList cityBrews={cityBreweries} />
    </>
  )
}

export default App
