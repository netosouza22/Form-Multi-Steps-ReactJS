// import react from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import '../styles/form-style.css';

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import { Box } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';

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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const classes = useStyles();

    const onSubmit = data => console.log(data);
    
    const next = (e) =>  {
        e.preventDefault();
        nextStep();
    }
 

    return(
            <Grid container >
                {/* <div className="App-header"> */}
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="First Name" 
                                    onChange= {handleChange('firstName')} 
                                    variant="outlined"
                                    className={classes.textField} 
                                    />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Last Name" 
                                    onChange= {handleChange('lastName')} 
                                    variant="outlined" 
                                    className={classes.textField} />
                    </Grid>

                    {/* style={{ paddingLeft: 45, paddingRight: 45,}} */}

                    <Grid container item xs={12} style={{paddingLeft: 45, paddingRight: 45,}} >
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Birthdate" 
                                        onChange= {handleChange('birthdate')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="CPF" 
                                        onChange= {handleChange('cpf')} 
                                        variant="outlined" 
                                        className={classes.textField} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Married Status" 
                                    onChange= {handleChange('marriedStatus')} 
                                    variant="outlined" 
                                    className={classes.textField} />
                    </Grid>
                   
                <Grid item xs={12}>
                    <Button variant="contained" 
                    color="primary" className={classes.buttonColor} 
                    onClick={next}> Next</Button>
                </Grid>
                
            {/* </div> */}


        </Grid>

    )
}