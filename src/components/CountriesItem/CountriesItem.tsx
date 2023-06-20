import React from 'react';
import './CountriesItem.css';

interface Props {
  country: ICountry;
}

const CountriesItem: React.FC<Props> = ({ country }) => {
  return (
    <div className="countries-item">{ country.name }</div>
  );
};

export default CountriesItem;