import React from 'react';
import Warning from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';
import './ErrorComponent.scss';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 80,
    color: "#FF7043",
  },
}));
const ErrorComponent = (props) => {
  const classes = useStyles();
  const { message } = props;

  return (
    <div className="error">
      <div className="error__icon">
        <Warning className={classes.icon}/>
      </div>
      <span className="error__message">{message}</span>
    </div>
  )
};

export default ErrorComponent;
