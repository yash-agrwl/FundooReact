import axios from "axios"

export const logIn = (signInObj) => {
    let response = axios.post("https://localhost:44349/api/User/Login", signInObj)
    //let response = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", signInObj)
    return response
}

export const createAccount = (signUpObj) => {
    let response = axios.post("https://localhost:44349/api/User/Register", signUpObj)
    return response
}