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

                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>

                    <NavLink to="/sign-in" activeStyle>
                        Sign In
                    </NavLink>

                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navigation;