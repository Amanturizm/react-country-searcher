import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import Countries from "../../components/Countries/Countries";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import './CountrySearcher.css';

const BASE_URL: string = 'https://restcountries.com/v2/';
const ALL_COUNTRIES_URL: string = 'all?fields=alpha3Code,name';
const COUNTRY_INFO_URL: string = 'alpha/';

const CountrySearcher = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [countrySelectedInfo, setCountrySelectedInfo] = useState<ICountryInfo | null>(null);
  const [isPreloader, setIsPreloader] = useState<boolean>(false);

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

  const setCountryInfo = async (alpha3Code: string) => {
    setIsPreloader(true);
    try {
      const { data } = await axios.get<ICountryInfo>(BASE_URL + COUNTRY_INFO_URL + alpha3Code);

      const borders = data.borders ? await Promise.all(
        data.borders.map(border => axios.get(BASE_URL + COUNTRY_INFO_URL + border)))
          .then(res => res.map(border => border.data.name))
        : null;

      setCountrySelectedInfo(
        {
          name: data.name,
          capital: data.capital,
          population: data.population,
          flag: data.flag,
          borders,
        }
      );
    } catch (e) {
      console.error(e);
    } finally {
      setIsPreloader(false);
    }
  };

  return (
    <div className="country-searcher">
      <Countries countries={countries} countryFetch={setCountryInfo} />
      <CountryInfo countryInfo={countrySelectedInfo} isPreloader={isPreloader} />
    </div>
  );
};

export default CountrySearcher;