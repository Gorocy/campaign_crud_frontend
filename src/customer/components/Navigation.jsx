import React from "react";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./navbarElements";
import Balance from "./Balance.jsx";

const Navigation = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to="/about" >
                        About
                    </NavLink>

                    <NavLink to="/">
                        Home
                    </NavLink>
                    
                    <NavLink to="/post-product">
                        Post Product
                    </NavLink>

                    <NavLink to="/post-campaign">
                        Post Campaign
                    </NavLink>

                    <NavLink to="/my-campaigns">
                        My Campaigns
                    </NavLink>

                    <NavLink to="/sign-up">
                        Sign Up
                    </NavLink>

                    <NavLink to="/sign-in">
                        Sign In
                    </NavLink>
                </NavMenu>
                
                <Balance/>

            </Nav>
        </>
    );
};

export default Navigation;