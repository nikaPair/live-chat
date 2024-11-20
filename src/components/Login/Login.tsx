import React, { useContext } from 'react';
import { Context } from '../..';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleIcon from '@mui/icons-material/Google';
import { LoginButton, LoginContainer, LoginHeading } from './Login.styled';

const Login = () => {
    const { auth }: any = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const { user } = await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Login failed: ', error);
        }
    };

    return (
        <LoginContainer>
            <LoginHeading>Please login via Google</LoginHeading>
            <LoginButton onClick={login}>
                <GoogleIcon sx={{ fontSize: '50px' }} />
            </LoginButton>
        </LoginContainer>
    );
};

export default Login;
