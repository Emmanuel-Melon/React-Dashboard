import React from 'react'

/**
 * @material-ui/core components
 */
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'

/**
 * styles
 */
import styles from './styles'

function GridItem ({ ...props }) {
    const { classes, children, className, ...rest } = props
    return (
        <Grid item {...rest} className={classes.column + ' ' + className}>
            {children}
        </Grid>
    )
}

export default withStyles(styles)(GridItem)
