import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css';
import logo from '../../assets/logo.svg';

function Signin() {
    return (
        <div className='outer-box'>
            <div className="inner-box">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="heading">
                    <h1>Sign in</h1>
                    <div className='sub-heading'>Use your Google Account</div>
                </div>
                <div className="container">
                    <form method='post'>
                        <div className='email'>
                            <TextField id="email" label="Email or phone" variant="outlined" type='email' size='medium' fullWidth />
                        </div>
                        <div className='link'>
                            <Button size="small">Forgot email?</Button>
                        </div>
                    </form>
                    <div className="guestmode">
                        <div className="guest"><span>Not your computer? Use Guest mode to sign in privately.  </span>
                        <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB" jsname="guestlink">Learn more</a></div>
                        
                    </div>
                    <div className="clickme">
                        <div className='textbutton'>
                            <Button>Create account</Button>
                        </div>
                        <div className='containedbutton'>
                            <Button variant='contained'>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;