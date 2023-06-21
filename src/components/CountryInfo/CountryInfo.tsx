import React from 'react';
import './CountryInfo.css';

interface Props {
  countryInfo: ICountryInfo | null;
}

const CountryInfo: React.FC<Props> = ({ countryInfo }) => {
  const beforeSelectedCountryMessage: React.ReactNode = (
    <div>
      <h1>Выберите страну!</h1>
    </div>
  );

  const countryInfoNode: React.ReactNode = !countryInfo ? beforeSelectedCountryMessage :
    (
    <div className="country-info">
      <div>
        <h2>{countryInfo.name}</h2>
        <h3>Capital: {countryInfo.capital}</h3>
        <p>Population: {countryInfo.population}</p>
        <label htmlFor="border-list">Border with:</label>
        {
          countryInfo.borders ?
          <ul id="border-list">
            { countryInfo.borders.map(border => <li key={`border-${border}`}>{border}</li>) }
          </ul> :
            <h3 style={{ marginLeft: '30px' }}>Не граничит</h3>
        }
      </div>
      <img src={countryInfo.flag} alt={`${countryInfo.name} flag`} />
    </div>
  );

  return (
    <div className="country-info-wrap">
      {countryInfoNode}
    </div>
  );
};

export default CountryInfo;