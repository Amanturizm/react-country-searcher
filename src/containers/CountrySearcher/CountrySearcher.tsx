import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import Countries from "../../components/Countries/Countries";
import './CountrySearcher.css';

const BASE_URL: string = 'https://restcountries.com/v2/';
const ALL_COUNTRIES_URL: string = 'all?fields=alpha3Code,name';

const CountrySearcher = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);

  const setAllCountries = useCallback(async () => {
    try {
      const { data } = await axios.get<ICountry[]>(BASE_URL + ALL_COUNTRIES_URL);
      setCountries(data.map(country => {
        return {
          name: country.name,
          alpha3Code: country.alpha3Code
        }
      }));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    setAllCountries().catch(e => console.error(e));
  }, [setAllCountries]);

  return (
    <div className="country-searcher">
      <Countries countries={countries} />
    </div>
  );
};

export default CountrySearcher;