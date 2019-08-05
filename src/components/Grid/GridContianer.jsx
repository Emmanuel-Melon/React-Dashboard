import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

/**
 * @material-ui/core components
 */
import Grid from '@material-ui/core/Grid'

/**
 * styles
 */
import styles from './styles'
import withStyles from '@material-ui/core/styles/withStyles'

function GridContainer ({ ...props }) {
    const { classes, children, className, ...rest } = props
    return (
        <Grid container {...rest} className={classes.container + ' ' + className}>
            {children}
        </Grid>
    )
}

GridContainer.defaultProps = {
    className: ''
}

GridContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
}

export default withStyles(styles)(GridContainer)
