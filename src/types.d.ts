interface ICountry {
  name: string;
  alpha3Code: string;
}

interface ICountryInfo {
  name: string;
  capital: string;
  population: number;
  flag: string;
  borders: string[] | null;
}