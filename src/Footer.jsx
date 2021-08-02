import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#424242',
      height: '60px',
      width: '100%'
    },
    text: {
      color: '#BDBDBD',
      fontSize: '13px',
      paddingLeft: '40px',
      paddingTop: '20px'
    }
  })
)

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Typography className={classes.text}>
        Copyright &copy; Panepo@Github 2020 All Rights Reserved.
      </Typography>
    </footer>
  )
}
