import React from 'react';

import Logo from '../../../src/images/Peteka.png'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {Button} from '../../globalStyles'
import { FooterContainer,
    FooterSubscription,  
    FooterSubHeading, 
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
    
             } from './Footer.element'

const footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Join our exclusive membership to
                 receive the latest news and trends
                </FooterSubHeading>
            <FooterSubText>
            You can unsubscribe at any time.
            </FooterSubText>
            
              <Form>
                                <FormInput name="email" type="email" placeholder="Your email"/>
               
                <Button fontBig>Submit</Button>
            </Form>
        
            </FooterSubscription>
            
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinksItems>

                    <FooterLinksTitle>
                    Technologies
                    </FooterLinksTitle>
                    <FooterLink to="/"> Java software development</FooterLink>
                    <FooterLink to="/"> Javascript software development</FooterLink>
                    <FooterLink to="/"> Mobile software development</FooterLink>
                    
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                    Contact Us
                    </FooterLinksTitle>
                    <FooterLink to="/contact"> Contact</FooterLink>
                    <FooterLink to="/"> Testimonials</FooterLink>
                    
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                   Video
                    </FooterLinksTitle>
                    <FooterLink to="/services"> What we do</FooterLink>
                    <FooterLink to="/"> Testimonials</FooterLink>
                    
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinksTitle>
                   Social media
                    </FooterLinksTitle>
                    
                    <FooterLink to="/"> Career</FooterLink>
                    
                    <FooterLink to="/"> Terms of Service</FooterLink>
                    </FooterLinksItems>



                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                                <img src={Logo} width={80} height={80}   />
                        </SocialLogo>
                        <WebsiteRights>PETEKA 2022 </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                            <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                            <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                            <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                            <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="https://www.linkedin.com/in/oluwaseun-agbomola-b4a6951b5/" target="_blank"
                            aria-label="Linkdin">
                            <FaLinkedin/>
                            </SocialIconLink>
                        
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

        </FooterContainer>
    )
}
export default footer
