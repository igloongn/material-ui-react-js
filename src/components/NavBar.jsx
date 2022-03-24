import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { format } from 'date-fns'
import { Avatar } from '@material-ui/core';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});


const drawerWidth = 240

const useStyle = makeStyles({
    appbar: {
        // width: `calc(100% - ${drawerWidth})`,
        // width: `100%`,
        marginLeft: drawerWidth,
        display: 'flex'
    }
})

export default function EnableColorOnDarkAppBar() {
    const classes = useStyle()
    return (
        <Stack spacing={2} className={classes.appbar}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color="primary" enableColorOnDark
                >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            Today is the {format(new Date(), 'do MMMM Y')}
                        </Typography>
                        <Typography>
                            Mufasa
                        </Typography>
                        <Avatar
                            // src='jeff.jpg'
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Fjeff-bezos%2F&psig=AOvVaw2PzOul4C1NsjMSbptvd9wC&ust=1648187351523000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjulb-G3vYCFQAAAAAdAAAAABAD"
                            variant='circular'
                        />
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}