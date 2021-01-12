import React, {useState} from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'

import Confirm from './Confirm';

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    textField: {
        margin: '10px',
        width: '75%',
    },
    buttonColor: {
        width: '100px',
        borderRadius: '30px',
        background: 'linear-gradient(to right, #ff105f, #ffad06)',
        fontWeight: 'bold',
    },
    spaceBetweenBtn: {
        width: '75%',
        display: 'flex',
        justifyContent: 'space-between',
    },
  }))

export default function FormUserDetails({previousStep, handleChange}) {
    const [openDialog, setOpenDialog] = useState(false);
    
    const classes = useStyles();

    const prev = (e) =>  {
        e.preventDefault();
        previousStep();
    }

    const handleBtnClick = () => {
        setOpenDialog(true);
        console.log("the first open:", openDialog)
    };
 
    return(
        <>
            <form>
                <TextField id="outlined-basic" label="State" 
                                onChange= {handleChange('stateCity')} 
                                variant="outlined"
                                className={classes.textField} 
                                />
                
                <TextField id="outlined-basic" label="City" 
                                onChange= {handleChange('city')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

                <TextField id="outlined-basic" label="Neighbourhood" 
                                onChange= {handleChange('neighbourhood')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

                <TextField id="outlined-basic" label="Street" 
                                onChange= {handleChange('street')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

                <TextField id="outlined-basic" label="Number" 
                                onChange= {handleChange('number')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

            </form>
            <Box className={classes.spaceBetweenBtn}>
                <Button variant="contained" color="primary" className={classes.buttonColor} onClick={prev}> Prev </Button>
                <Button variant="contained" color="primary" className={classes.buttonColor} 
                onClick={() => handleBtnClick()}
                > Send </Button>
            </Box>
            <Box>
                    {openDialog ? <Confirm value={openDialog}> </Confirm> : null}
            </Box>
        </>

    )
}