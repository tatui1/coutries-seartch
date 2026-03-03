import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import type { IContryShort } from '../types';

interface SidebarProps {
    countries: IContryShort[];
}

export const Sidebar = ({ countries }: SidebarProps) => {
    return (
        <Drawer open sx={{ width: 300, '& .MuiDrawer-paper': { width: 300 } }}>
            <List>
                {countries.map((country) => (
                    <ListItem key={country.alpha3Code} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={country.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};