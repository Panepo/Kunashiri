import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '60vh',
      background: 'linear-gradient(165deg, #990033 20%, #ff6699 70%)'
    }
  })
)

export default function Footer() {
  const classes = useStyles()
  return <div className={classes.root}></div>
}
