export interface IContryShort {
    name: string;
    alpha3Code: string;
}

export interface ICountryFull {
    name: string;
    capital: string;
    population: number;
    borders: string[];
    flag: string;
}