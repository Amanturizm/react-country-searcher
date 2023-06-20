import React from 'react';
import CountriesItem from "../CountriesItem/CountriesItem";
import './Countries.css';

interface Props {
  countries: ICountry[];
}

const Countries: React.FC<Props> = ({ countries }) => {
  return (
    <div className="countries">
      {
        countries.map((country, index) => (
          <CountriesItem
            country={country}
            key={country.alpha3Code + index}
          />
        ))
      }
    </div>
  );
};

export default Countries;