import React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './signup.css';
import img from '../../assets/account.svg';
import logo from '../../assets/logo.svg';

function Signup() {
    return (
        <div className='outer-box'>
            <div className='inner-box'>
                <div className='account-details'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='heading'>
                        <h1>Create Your Google Account</h1>
                    </div>
                    <div className='content'>
                        <form action="#" method='post'>
                            <div className='twofield'>
                                <div className='firstfield'>
                                    <TextField className="textfield" id="firstname" label="First name" variant="outlined" type='text' size='small' />
                                </div>
                                <div className='lastfield'>
                                    <TextField className="textfield" id="lastname" label="Last name" variant="outlined" type='text' size='small' />
                                </div>
                            </div>
                            <div className="email">
                                <TextField className="textfield" id="email" label="Username" variant="outlined" type='email' size='small' fullWidth />
                                <div className="suggest">You can use letters, numbers & periods</div>
                            </div>
                            <div className="currentemail">
                                <Button className='textbutton'>Use my current email address instead</Button>
                            </div>
                            <div className="password">
                                <div className='twofield'>
                                    <div className="firstfield">
                                        <TextField className="textfield" id="pwd" label="Password" variant="outlined" type='password' size='small' />
                                    </div>
                                    <div className='lastfield'>
                                        <TextField className="textfield" id="confirm" label="Confirm" variant="outlined" type='password' size='small' />
                                    </div>
                                </div>
                                <div className="suggest">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                                <div>
                                    <FormControlLabel control={<Checkbox />} label="Show password" />
                                </div>
                            </div>
                        </form>
                        <div className='links'>
                            <Button className='textbutton'>Sign in instead</Button>
                            <Button className='containedbutton' variant='contained'>Next</Button>
                        </div>
                    </div>
                </div>
                <div className='account-image'>
                    <figure className='figure'>
                        <img src={img} alt="account" width="244px" height="244px" />
                        <figcaption>One account. All of Google working for you.</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Signup;