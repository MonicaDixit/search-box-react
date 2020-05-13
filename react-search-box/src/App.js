import React, { useState, useEffect } from "react";
import { SENTENCES } from "./data";
import SearchResultView from "./SearchResultView";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState(SENTENCES);
  const [filteredSearchResults, setFilteredSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] =  useState('');

  useEffect(() => {
    if (!searchTerm || !searchTerm.length) {
      setFilteredSearchResults(searchResults);
    } 
     let copySearchResults =  [...searchResults].filter(results =>
        results.data.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSearchResults(copySearchResults);
  }, [searchTerm, searchResults]);
    

  return (
    <div className="search-container">
      <input type="text" 
      id="search" 
      value={searchTerm}
      onChange={e=> setSearchTerm(e.target.value)}
      placeholder="Type your keywords here.."/>
      <h3>Total Results: {filteredSearchResults.length}</h3>
      <SearchResultView searchResults={filteredSearchResults}></SearchResultView>
    </div>
  );
};

export default App;
