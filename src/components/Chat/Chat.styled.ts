import styled from '@emotion/styled';

import { Container } from '@mui/material';
export const ChatContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    height: calc(80vh - 50px);
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const MessagesContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    gap: 2px;
    scrollbar-width: none;
    overflow-y: auto;
    width: 100%;
    height: 70vh;
    padding: 10px 0;
    border-radius: 50px;
`;

export const InputContainer = styled(Container)`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    padding: 0 !important;
    width: 100%;
`;
export const Input = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 20px;
    padding: 10px;
    border: 2px solid #9b73f2;
    font-family: 'Delius', cursive;
    font-size: 16px;
    background-color: aliceblue;

    &:hover {
        border: 2px solid #9b73f2;
    }

    &:focus-visible {
        outline: none;
    }
`;
export const SendButton = styled.button`
    padding: 14px 20px;
    border-radius: 30%;
    border: none;
    background-color: #677989;
    color: white;
    font-size: 16px;
    cursor: pointer;
`;
export const ChatHeading = styled.h1`
    text-align: center;
    color: #9b73f2;
    padding: 25px;
    border-bottom: 2px solid #9b73f2;
`;
