import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import NavBar from './NavBar'
import { ThemeProvider } from 'styled-components'

const drawerWidth = 240

const useStyles = makeStyles( 
  (theme) => {
    return {
        page: { 
          background: '#f9f9f9',
          width: '100%',
        },
        root: {
          // display: 'flex',
        },
        drawer: {
          width: drawerWidth,
        },
        drawerPaper: {
          width: drawerWidth,
        },
        active: {
          // background: '#f4f4f4'
          background: '#f9f9'
        },
        toolbar: {
        marginLeft: drawerWidth,
        }
      }
    
  }
)

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    },
    {
      text: 'Test',
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: '/test'
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <NavBar />
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Mufasa Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                history.push(item.path)
              }}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}>
          {children}
        </div>
      </div>
    </div>
  )
}