import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css';
import logo from '../../assets/logo.svg';
import { logIn } from '../../services/userservice';
import { useHistory, useNavigate } from "react-router-dom";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
    const [signInObj, setSignInObj] = React.useState({ email: "", password: "" });
    const [regexObj, setRegexObj] = React.useState({ emailBorder: false, emailHelper: "", pwdBorder: false, pwdHelper: "" });

    let navigate = useNavigate();

    const TakeEmail = (event) => {
        setSignInObj((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const TakePassword = (event) => {
        setSignInObj((prevState) => ({ ...prevState, password: event.target.value }))
    }

    const Submit = () => {
        // console.log(signInObj.email)
        // console.log(signInObj.password)

        let emailTest = emailRegex.test(signInObj.email)
        let passwordTest = passwordRegex.test(signInObj.password)

        if (emailTest === true) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct Email" }))
        }

        if (passwordTest === true) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: false, pwdHelper: "" }))
        }
        else if (passwordTest === false) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: true, pwdHelper: "Enter correct Password" }))
        }

        if (emailTest === true && passwordTest === true) {
            logIn(signInObj).then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
                navigate("/dashboard")
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <div className='signin_outerbox'>

            <div className="signin_innerbox">

                <div className="signin_logo">

                    <img src={logo} alt="logo" />

                </div>

                <div className="signin_heading">

                    <h1>Sign in</h1>

                    <div className='signin_sub-heading'>Use your Google Account</div>

                </div>

                <div className="signin_container">

                    <form method='post'>

                        <div className='signin_email'>

                            <TextField onChange={TakeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}
                                id="email" label="Email" variant="outlined" type='email' size='medium' fullWidth />

                        </div>

                        <div className='signin_link'>

                            <Button size="small">Forgot email?</Button>

                        </div>

                        <div className='signin_password'>

                            <TextField onChange={TakePassword} error={regexObj.pwdBorder} helperText={regexObj.pwdHelper}
                                id="password" label="Password" variant="outlined" type='password' size='medium' fullWidth />

                        </div>

                        <div className='signin_link'>

                            <Button size="small">Forgot password?</Button>

                        </div>

                    </form>

                    <div className="signin_guestmode">

                        <div className="signin_guest">

                            <span>Not your computer? Use Guest mode to sign in privately. </span>

                            <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB" jsname="guestlink">Learn more</a>

                        </div>

                    </div>

                    <div className="signin_clickme">

                        <div className='signin_textbutton'>

                            <Button onClick={() => navigate("/signup")}>Create account</Button>

                        </div>

                        <div className='signin_containedbutton'>

                            <Button onClick={Submit} variant='contained' size='large'>Next</Button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Signin;