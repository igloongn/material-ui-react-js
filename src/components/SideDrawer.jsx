import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240

const useStyle = makeStyles({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#f9f9f9',
    },
})

const menuitems = [
    {
        id: 1,
        name: 'Create New Item',
        path: '/create',
        icon: <AddCircleIcon />,
    },
    {
        id: 2,
        name: 'View All ',
        path: '/create',
        icon: <ViewComfyIcon />,
    },
]

function PermanentDrawerLeft() {
    const classes = useStyle()
    const navigate = useNavigate()
    // const handledirection = (link) => navigate(link)
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant={'permanent'}
                anchor={'left'}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div>
                    <Typography variant='h4' align='center'>
                        Mufasa UI
                    </Typography>
                </div>
                <List>
                    {menuitems.map(item =>
                        <div>
                            <ListItem 
                                key={item.id}
                                button
                                onClick={ 
                                    () => {
                                        navigate('/')
                                    }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                            <br />
                        </div>
                    )}
                </List>
            </Drawer>
        </div>
    )
}

export default PermanentDrawerLeft