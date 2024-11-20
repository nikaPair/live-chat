import React from 'react';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container } from '@mui/material';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, addDoc, orderBy, query } from 'firebase/firestore';
import SendIcon from '@mui/icons-material/Send';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { v4 as uuidv4 } from 'uuid';
import { ChatContainer, ChatHeading, Input, InputContainer, MessagesContainer, SendButton } from './Chat.styled';

const Chat = () => {
    const { auth, firestore }: any = React.useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = React.useState('');

    const messagesRef = collection(firestore, 'messages');

    const messagesQuery = query(messagesRef, orderBy('createdAt'));

    const [messages, loading] = useCollectionData(messagesQuery);

    const sendMessage = async () => {
        value &&
            (await addDoc(messagesRef, {
                uid: user?.uid,
                displayName: user?.displayName,
                photoURL: user?.photoURL,
                text: value,
                createdAt: new Date(),
            }));
        setValue('');
    };

    if (loading) return <Loader />;

    return (
        <Container>
            <ChatHeading>Here you can chat with your friends.</ChatHeading>

            <ChatContainer>
                <MessagesContainer>
                    {messages?.map((msg: any) => (
                        <Message key={uuidv4()} src={msg.photoURL} content={msg.text} msg={msg} user={user} />
                    ))}
                </MessagesContainer>
                <InputContainer>
                    <Input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && sendMessage()}
                    />
                    <SendButton onClick={sendMessage}>
                        <SendIcon />
                    </SendButton>
                </InputContainer>
            </ChatContainer>
        </Container>
    );
};

export default Chat;
