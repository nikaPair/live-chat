import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../constants/consts';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
const AppRouter = () => {
    const { auth }: any = React.useContext(Context);
    const [user] = useAuthState(auth);
    return user ? (
        <Routes>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} Component={Component} />
            ))}
            <Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} Component={Component} />
            ))}
            <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
        </Routes>
    );
};

export default AppRouter;
