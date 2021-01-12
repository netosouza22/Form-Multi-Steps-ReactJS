import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HappyIcon from '@material-ui/icons/SentimentVerySatisfied';

import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'linear-gradient(to right, #ff105f, #ffad06)',
  },
});

const useStyles = makeStyles(theme => ({
    buttonColor: {
        width: '50px',
        borderRadius: '30px',
        background: 'linear-gradient(to right, #ff105f, #ffad06)',
        fontWeight: 'bold',
        color: 'white',
    },
    titleDialog: {
        color: '#ff105f !important',
    }
  }))

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({value}) {
    const [open, setOpen] = useState(value);

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    const classes = useStyles();

    console.log("The second Open", open);
  return (
    <div>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" classNmae={classes.titleDialog} onClose={handleClose}>
        See you later!
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Typing ok, you confirm your subscription!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={handleClose} className={classes.buttonColor}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}