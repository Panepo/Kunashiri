import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconBookmark from '@material-ui/icons/Bookmarks'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'

import { linkDrawer, linkHeader } from './constants/link.const'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    button: {
      margin: theme.spacing(1)
    },
    drawer: {
      color: '#990033'
    },
    drawerTitle: {
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      color: '#990033',
      marginLeft: -12,
      marginRight: 20
    }
  })
)

export default function Header() {
  const classes = useStyles()
  const [drawer, setDrawer] = React.useState(false)

  const handleDrawer = (open) => () => {
    setDrawer(open)
  }

  const renderDrawer = (
    <Drawer
      className={classes.drawer}
      open={drawer}
      onClose={handleDrawer(false)}>
      <Typography
        className={classes.drawerTitle}
        variant="h6"
        color="inherit"
        noWrap>
        Reference
      </Typography>
      <div
        tabIndex={0}
        role="button"
        onClick={handleDrawer(false)}
        onKeyDown={handleDrawer(false)}>
        <List>
          {linkDrawer.map((data: Link) => (
            <ListItem
              button
              divider
              key={data.text}
              component="a"
              href={data.link}>
              <ListItemIcon>
                <IconBookmark color="secondary" />
              </ListItemIcon>
              <ListItemText primary={data.text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )

  const renderLink = linkHeader.reduce((output, data) => {
    output.push(
      <Button
        color="primary"
        className={classes.button}
        key={data.text}
        href={data.link}>
        {data.text}
      </Button>
    )
    return output
  }, [])

  return (
    <header>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        {renderDrawer}
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <b>Kunashiri</b>
          </Typography>
          {renderLink}
        </Toolbar>
      </AppBar>
    </header>
  )
}
