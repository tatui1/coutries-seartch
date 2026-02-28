export interface IContryShort {
    name: string;
    alpha3Code: string;
    independent: boolean;
}
export interface ICountryFull {
    name: string;
    alpha3Code: string;
    capital: string;
    population: number;
    area: number;
    region: string;
    flags: {
        svg: string;
        png: string;
    };
    currencies: Array<{
        name: string;
    }>;
    languages: Array<{
        name: string;
    }>;
    borders: string[];
}