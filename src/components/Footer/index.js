import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {FooterContainer, FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'


const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    {/* <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Connect With Me</FooterLinkTitle>
                                <FooterLink to='about'>About</FooterLink>
                                <FooterLink to='about'>Learn More</FooterLink>
                                <FooterLink to='about'>Contact me</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer> */}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                Rojaun Samuda
                            </SocialLogo>
                            <WebsiteRights> Rojaun Samuda &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FaGithub/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/in/rojaunsamuda/" target="_blank" aria-label="LinkedIn">
                                    <FiMail/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
