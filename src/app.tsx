import React from 'react';
import './assets/styles/style.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader/Loader';
import { ContextType } from './index';
function App() {
    const { auth }: ContextType = React.useContext(Context);
    const [loading] = useAuthState(auth);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter basename='/live-chat'>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
