import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'



const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                    {/* <SidebarLink to="contact-me" onClick={toggle}>Contact Me</SidebarLink> */}
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="/signin">Download Resume</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
