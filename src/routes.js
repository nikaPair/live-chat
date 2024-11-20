import { LOGIN_ROUTE, CHAT_ROUTE } from './constants/consts';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
];
export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat,
    },
];
