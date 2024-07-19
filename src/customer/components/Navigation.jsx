import React from "react";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from "./navbarElements";

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
                    
                    <NavLink to="/sign-up">
                        Sign Up
                    </NavLink>

                    <NavLink to="/sign-in">
                        Sign In
                    </NavLink>

                    <NavLink to="/post-campaign">
                        Post Campaign
                    </NavLink>

                    <NavLink to="/my-campaigns">
                        My Campaigns
                    </NavLink>
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navigation;