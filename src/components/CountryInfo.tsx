import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import type { ICountryFull } from '../types';
import { BASE_URL } from '../constans'
import CardMedia from '@mui/material/CardMedia'

interface CountryInfoProps {
    country: ICountryFull;
}

export const CountryInfo = ({ country }: CountryInfoProps) => {
    const [borderNames, setBorderNames] = useState<string[]>([])

    useEffect(() => {
        const getBorderNames = async () => {
            if (!country.borders || country.borders.length === 0) {
                setBorderNames([])
                return
            }

            try {
                const names = await Promise.all(
                    country.borders.map(async (code) => {
                        const response = await fetch(`${BASE_URL}/alpha/${code}?fields=name`)
                        const data = await response.json()
                        return data.name
                    })
                )
                setBorderNames(names)
            } catch (e) {
                console.log(e)
            }
        }

        getBorderNames()
    }, [country])

    return (
         <Card>
            {country.flag && (
                <CardMedia
                    component="img"
                    height="200"
                    image={country.flag}
                    alt={`Флаг ${country.name}`}
                    sx={{ objectFit: 'contain', p: 2 }}/>
            )}
            <CardContent>
                <Typography variant="h4" gutterBottom>{country.name}</Typography>
                <Typography variant="body1">Столица: {country.capital || 'Нет данных'}</Typography>
                <Typography variant="body1">Население: {country.population.toLocaleString()} чел.</Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>Граничит с:</Typography>
                {borderNames.length > 0 ? (
                    <List>
                        {borderNames.map((name, index) => (
                            <ListItem key={index}>
                                <Typography variant="body2">• {name}</Typography>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography variant="body2" color="text.secondary">Нет граничащих стран</Typography>
                )}
            </CardContent>
        </Card>
    )
}