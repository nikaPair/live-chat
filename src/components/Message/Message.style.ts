import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const MessageContainer = styled(Box)`
    display: flex;
    gap: 10px;
    align-items: center;
`;
export const MessageAvatar = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    align-self: flex-end;
`;
export const MessageContent = styled(Typography)`
    padding: 10px;
    border-radius: 20px;
    font-family: 'Delius', cursive;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.5px;
`;
