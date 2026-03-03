import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import type { IContryShort } from '../types'

interface SidebarProps {
    countries: IContryShort[]
    onSelectCountry: (alpha3Code: string) => void
}

export const Sidebar = ({ countries, onSelectCountry }: SidebarProps) => {
    return (
        <Drawer 
            open variant="permanent" sx={{ width: 300, '& .MuiDrawer-paper': { 
                    width: 300,
                    position: 'relative',
                    height: '100vh'
                } 
            }}>
            <List>
                {countries.map((country) => (
                    <ListItem key={country.alpha3Code} disablePadding>
                        <ListItemButton onClick={() => onSelectCountry(country.alpha3Code)}>
                            <ListItemText primary={country.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}