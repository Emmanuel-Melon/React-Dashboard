import React from 'react';
import Warning from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import './ErrorComponent.scss';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 80,
  },
}));
const ErrorComponent = (errorBool) => {
  const classes = useStyles();
  const { error } = errorBool;
  return (
    <div className="error">
      <div className="error__icon">
        <Warning className={classes.icon}/>
      </div>
      <span className="error__message">{error ? 'No entry has been added' : 'Error occured while fetching data'}</span>
    </div>
  )
}

export default ErrorComponent;
