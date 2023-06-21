import React from 'react';
import CountriesItem from "../CountriesItem/CountriesItem";
import './Countries.css';

interface Props {
  countries: ICountry[];
  countryFetch: (alpha3Code: string) => void;
}

const Countries: React.FC<Props> = ({ countries, countryFetch }) => {
  return (
    <div className="countries">
      {
        countries.map((country, index) => (
          <CountriesItem
            country={country}
            onClick={() => countryFetch(country.alpha3Code)}
            key={country.alpha3Code + index}
          />
        ))
      }
    </div>
  );
};

export default Countries;