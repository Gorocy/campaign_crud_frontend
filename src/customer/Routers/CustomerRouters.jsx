import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from '../Pages/About';
import Home from '../Pages/Home';
import Navigation from '../components/Navigation';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

const CustomerRouters = () => {

    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>

                <Route path='/' element={<Home />}></Route>

                <Route path='/about' element={<About />}></Route>

                <Route path='/sign-in' element={<SignIn />}></Route>

                <Route path='/sign-up' element={<SignUp />}></Route>

            </Routes>

        </div>
    );

};

export default CustomerRouters;