import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { ICountryFull } from '../types';

interface CountryInfoProps {
    country: ICountryFull
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>{country.name}</Typography>
                <Typography variant="body1">Столица: {country.capital || 'Нет данных'}</Typography>
                <Typography variant="body1">Население: {country.population.toLocaleString()} чел.</Typography>
            </CardContent>
        </Card>
    )
}