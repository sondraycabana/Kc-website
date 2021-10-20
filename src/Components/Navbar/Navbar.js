 import React,{useState,useEffect} from 'react'
 import {Nav, 
    NavbarContainer,
     NavLogo, 
    //  NavIcon, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks, 
     NavItemBtn, 
     NavBtnLink,
     closeMobileMenu} from './Navbar.element'
 import { Button} from '../../globalStyles'
 import {FaBars, FaTimes} from 'react-icons/fa';
 import { IconContext} from 'react-icons/lib'
//  import FirstImg from '../../../src/images/svg2.svg'
 import FirstImg from '../../../src/images/Logo2.jpg'

// import {Button } from '../../globalStyles';
 //the ../../ means (outside Navbar and outside Component then Globalstyles)
  const Navbar = () => {
      const[click, setClick] = useState(false)
      const[button, setButton] = useState(true)

      const handleClick = () => setClick(!click);
      const closeMobileMenu = () => setClick(false)

      const showButton = () => {
          if(window.innerwidth <= 960){
              setButton(false)
          }else{
              setButton(true)
          }
      }
      useEffect(()=> {
          showButton()
      }, [])

      window.addEventListener('resize', showButton);
     return (
          <>
          <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
       
            <NavbarContainer>
           
            <img src={FirstImg} />
            <NavLogo to="/" onClick={closeMobileMenu}>
            
            {/*<NavIcon/>*/}
          
        
            </NavLogo>
           
            <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
            <NavLinks to='/'>Home</NavLinks>
            </NavItem>
           
            <NavItem>
            <NavLinks to='services'>Service</NavLinks>
            </NavItem>
          
            <NavItem>
            <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>

            <NavItem>
            <NavLinks to='About'>About</NavLinks>
            </NavItem>

            <NavItemBtn>
            {button ? (
                <NavBtnLink to="/sign-up">
                <Button primary>SIGN UP</Button>
                </NavBtnLink>
            ):(
                <NavBtnLink to="/sign-up">
                <Button onClick={closeMobileMenu} fontBig primary>
                SIGN UP
                </Button>
                </NavBtnLink>
            )}
            </NavItemBtn>


            </NavMenu>
            
            </NavbarContainer>
           
        </Nav>
        </IconContext.Provider>
        </>
     );
 };
 export default Navbar