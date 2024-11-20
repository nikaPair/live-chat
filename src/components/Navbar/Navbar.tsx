import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../constants/consts';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavbarContainer, NavButton, NavLogo, NavLogoContainer } from './Navbar.styled';

const Navbar = () => {
    const { auth }: any = React.useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <NavbarContainer>
            <NavLogoContainer>
                <span>LIVE ---</span>
                <NavLogo src='https://i.ibb.co/VV4WMnG/support.png' alt='message-logo' />
                <span>--- CHAT</span>
            </NavLogoContainer>
            {user ? (
                <NavButton onClick={() => auth.signOut()}>Logout</NavButton>
            ) : (
                <NavLink to={LOGIN_ROUTE}>
                    <NavButton>Login</NavButton>
                </NavLink>
            )}
        </NavbarContainer>
    );
};

export default Navbar;
