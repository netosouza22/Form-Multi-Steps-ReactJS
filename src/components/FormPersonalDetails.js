// import react from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import '../styles/form-style.css';

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
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
    }
  }))

export default function FormUserDetails({nextStep, handleChange, values}) {

    const classes = useStyles();

    const next = (e) =>  {
        e.preventDefault();
        nextStep();
    }
 

    return(
            <Box padding={0}>
                {/* <div className="App-header"> */}
                    <Box >
                        <TextField id="outlined-basic" label="First Name" 
                                    onChange= {handleChange('firstName')} 
                                    variant="outlined"
                                    className={classes.textField} 
                                    />

                        <TextField id="outlined-basic" label="Last Name" 
                                    onChange= {handleChange('lastName')} 
                                    variant="outlined" 
                                    className={classes.textField} />
                    </Box>
                    <TextField id="outlined-basic" label="Birthdate" 
                                onChange= {handleChange('birthdate')} 
                                variant="outlined" 
                                className={classes.textField} />

                    <TextField id="outlined-basic" label="CPF" 
                                onChange= {handleChange('cpf')} 
                                variant="outlined" 
                                className={classes.textField} />

                    <TextField id="outlined-basic" label="Married Status" 
                                onChange= {handleChange('marriedStatus')} 
                                variant="outlined" 
                                className={classes.textField} />
                <Box>
                <Button variant="contained" 
                    color="primary" className={classes.buttonColor} 
                    onClick={next}> Next</Button>
                </Box>
            {/* </div> */}
        </Box>

    )
}