// import react from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'

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

export default function FormUserDetails({nextStep, previousStep, handleChange}) {
    //Estilizando os componetes com o React UI, usando o makeStyles
    const classes = useStyles();

    //
    const next = (e) =>  {
        e.preventDefault();
        nextStep();
    }
    const prev = (e) =>  {
        e.preventDefault();
        previousStep();
    }
 
    return(
        <>
                <form>
                   
                    <TextField id="outlined-basic" label="Email" 
                                onChange= {handleChange('email')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

                    <TextField id="outlined-basic" label="Phone Number" 
                                onChange= {handleChange('phone')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

                    <TextField id="outlined-basic" label="Mobile Number" 
                                onChange= {handleChange('mobile')} 
                                variant="outlined"
                                className={classes.textField} 
                                />

                </form>

            <Box className={classes.spaceBetweenBtn}>
                <Button variant="contained" color="primary" className={classes.buttonColor} onClick={prev}> Prev </Button>
                <Button variant="contained" color="primary" className={classes.buttonColor} onClick={next}> Next </Button>
            </Box>

        </>

    )
}