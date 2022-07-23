import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from '../pages/signin/signin'
import Signup from '../pages/signup/signup'
import Dashboard from '../pages/Dashboard/Dashboard'

function Routers() {
    return (
        <div>
            {/* <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter> */}

            <Router>
                <Routes>
                    <Route exact path="/" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routers