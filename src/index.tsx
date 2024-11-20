import ReactDOM from 'react-dom/client';
import App from './app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';

const app = initializeApp({
    apiKey: 'AIzaSyC4L3jgEwVTQb6wiTQ6uDRGy8E95GQHltk',
    authDomain: 'live-chat-8d72c.firebaseapp.com',
    projectId: 'live-chat-8d72c',
    storageBucket: 'live-chat-8d72c.appspot.com',
    messagingSenderId: '1018372646643',
    appId: '1:1018372646643:web:61bad92d208b619599b986',
    measurementId: 'G-8YFPS4E8ML',
});

const firestore = getFirestore(app);
const auth = getAuth(app);

export const Context: any = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Context.Provider value={{ firestore: firestore, auth }}>
        <App />
    </Context.Provider>
);
