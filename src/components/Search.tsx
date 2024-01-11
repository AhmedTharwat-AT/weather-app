import { styled } from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { getCityCoords } from "../services/weatherApi";
import { useSearchParams } from "react-router-dom";

const SearchWrapper = styled.div`
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  min-width: 50%;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 90%;
    margin-inline: auto;
    max-width: 90%;
  }
  @media (max-width: 650px) {
    width: 100%;
    max-width: 500px;
  }
`;

function Search() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearch() {
    if (!query) return;
    getCityCoords(query).then((result) => {
      if (!result || result.data.length == 0) return;
      const { lat, lon } = result.data[0];
      searchParams.set("lat", lat);
      searchParams.set("long", lon);
      setSearchParams(searchParams);
    });
  }

  return (
    <SearchWrapper>
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        type="text"
        placeholder="Enter city name or code"
      />
      <Button onClick={handleSearch}>search</Button>
    </SearchWrapper>
  );
}

export default Search;
