import React from 'react';
import './CountriesItem.css';

interface Props {
  country: ICountry;
  onClick: React.MouseEventHandler;
}

const CountriesItem: React.FC<Props> = ({ country, onClick }) => {
  return (
    <div className="countries-item" onClick={onClick}>{ country.name }</div>
  );
};

export default CountriesItem;