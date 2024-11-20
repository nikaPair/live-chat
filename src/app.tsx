import React from 'react';
import './assets/styles/style.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/Loader/Loader';
function App() {
    const { auth }: any = React.useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
