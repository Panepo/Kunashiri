import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Ribbon from './Ribbon'
import withRoot from './withRoot'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    },
    content: {
      minHeight: 'calc(100vh - 124px)'
    }
  })
)

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.content}>
        <Ribbon />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default withRoot(App)
