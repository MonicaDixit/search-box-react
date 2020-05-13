import React from "react";

const SearchResultView = props => {
  const { searchResults } = props;

  return (
    <>
      <div>
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>{result.data}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchResultView;
