import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';

import { pages } from '../utils/pages';

export const NavBar = ({ setActivePage }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {pages.map((page, i) => {
                        return (
                            <Button key={i} color="inherit" sx={{ marginRight: "16px" }} onClick={() => { setActivePage(page.route) }}>{page.name}</Button>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
