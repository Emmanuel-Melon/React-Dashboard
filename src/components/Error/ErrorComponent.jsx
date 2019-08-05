import React from 'react';
import Warning from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import './ErrorComponent.scss';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 80,
  },
}));
const ErrorComponent = (error) => {
  const classes = useStyles();

  return (
    <div className="error">
      <Warning className={classes.icon}/>
      <span className="error__message">Error occurred while fetching data</span>
    </div>
  )
}

export default ErrorComponent;
