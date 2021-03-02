import React, {useState} from 'react'
import {Nav, Bars, NavMenu, NavLogo, NavBtnLink, NavBtn, MobileIcon, NavBarContainer, NavItem, NavLinks } from "./NavbarElements";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        <h1>Logo</h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <Bars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" activeStyle>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience" activeStyle>
                                Experience
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills" activeStyle>
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contactMe" activeStyle>
                                Contact Me
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
        </>
    )
}

export default Navbar
