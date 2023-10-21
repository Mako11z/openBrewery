import React, { useState } from "react";
import { useEffect } from "react";

function BreweryFilter({ onFilterSubmit }) {
    const [filterText, setFilterText] = useState('');
    const handleFilterSubmit = () => {
        onFilterSubmit(filterText);
    }
    return (
        <div>
          <h3>Filter Breweries</h3>
          <input
            type="text"
            placeholder="Search by brewery name"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
         <button onClick={handleFilterSubmit}>Submit</button>
        </div>
      );
};
export default BreweryFilter;