import React from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import './signup.css';
import img from '../../assets/account.svg';
import logo from '../../assets/logo.svg';
import { createAccount } from '../../services/userservice';
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signup() {

    const [signUpObj, setSignUpObj] = React.useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });

    const [regexObj, setRegexObj] = React.useState({
        firstNameBorder: false, firstNameHelper: "", lastNameBorder: false, lastNameHelper: "", emailBorder: false,
        emailHelper: "", pwdBorder: false, pwdHelper: "", confirmPwdBorder: false, confirmPwdHelper: ""
    });

    const TakeFirstName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, firstName: event.target.value }))
    }

    const TakeLastName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, lastName: event.target.value }))
    }

    const TakeEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const TakePassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }))
    }

    const TakeConfirmPassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, confirmPassword: event.target.value }))
    }

    const Submit = () => {
        let firstNameTest = firstNameRegex.test(signUpObj.firstName)
        let lastNameTest = lastNameRegex.test(signUpObj.lastName)
        let emailTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)

        if (firstNameTest === true) {
            setRegexObj((prevState) => ({ ...prevState, firstNameBorder: false, firstNameHelper: "" }))
        }
        else if (firstNameTest === false) {
            setRegexObj((prevState) => ({ ...prevState, firstNameBorder: true, firstNameHelper: "Enter Valid FirstName" }))
        }

        if (lastNameTest === true) {
            setRegexObj((prevState) => ({ ...prevState, lastNameBorder: false, lastNameHelper: "" }))
        }
        else if (lastNameTest === false) {
            setRegexObj((prevState) => ({ ...prevState, lastNameBorder: true, lastNameHelper: "Enter Valid LastName" }))
        }

        if (emailTest === true) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter Valid Email" }))
        }

        if (passwordTest === true) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: false, pwdHelper: "" }))

            if (signUpObj.confirmPassword === signUpObj.password) {
                setRegexObj((prevState) => ({ ...prevState, pwdBorder: false, pwdHelper: "" }))
            }
            else if (signUpObj.confirmPassword === "") {
                setRegexObj((prevState) => ({ ...prevState, pwdBorder: true, pwdHelper: "Confirm your password" }))
            }
            else if (signUpObj.confirmPassword !== signUpObj.password) {
                setRegexObj((prevState) => ({
                    ...prevState, pwdBorder: true,
                    pwdHelper: "Those passwords didn’t match. Try again."
                }))
            }
        }
        else if (passwordTest === false) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: true, pwdHelper: "Enter Valid Password" }))
        }

        if (firstNameTest === true && lastNameTest === true && emailTest === true && passwordTest === true &&
            signUpObj.confirmPassword === signUpObj.password) {

            createAccount(signUpObj).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error)
            })

        }

    }

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

                        <form className='signup_form' action="#" method='post'>

                            <div className='twofield'>

                                <div className='firstfield'>

                                    <TextField onChange={TakeFirstName} error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper}
                                        className="textfield" id="firstname" label="First name" variant="outlined" type='text' size='small' />

                                </div>

                                <div className='lastfield'>

                                    <TextField onChange={TakeLastName} error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper}
                                        className="textfield" id="lastname" label="Last name" variant="outlined" type='text' size='small' />

                                </div>

                            </div>

                            <div className="email">

                                <TextField onChange={TakeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}
                                    className="textfield" id="email" label="Username" variant="outlined" type='email' size='small' fullWidth />

                                <div className="suggest">You can use letters, numbers & periods</div>

                            </div>

                            <div className="currentemail">

                                <Button className="textbutton">Use my current email address instead</Button>

                            </div>

                            <div className="password">

                                <div className='twofield'>

                                    <div className="firstfield">

                                        <TextField onChange={TakePassword} error={regexObj.pwdBorder} helperText={regexObj.pwdHelper}
                                            className="textfield" id="pwd" label="Password" variant="outlined" type='password' size='small' />

                                    </div>

                                    <div className='lastfield'>

                                        <TextField onChange={TakeConfirmPassword} error={regexObj.confirmPwdBorder} helperText={regexObj.confirmPwdHelper}
                                            className="textfield" id="confirm" label="Confirm" variant="outlined" type='password' size='small' />

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

                            <Button onClick={Submit} className='containedbutton' variant='contained'>Next</Button>

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