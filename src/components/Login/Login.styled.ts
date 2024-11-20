import styled from '@emotion/styled';

export const LoginContainer = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 200px;
`;
export const LoginHeading = styled.h1`
    font-family: 'Delius', cursive;
    font-size: 50px;
    font-weight: 500;
    letter-spacing: 0.5px;
`;
export const LoginButton = styled.button`
    background-color: #9b73f2;
    border: none;
    font-family: 'Delius', cursive;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: white;
    padding: 100px 100px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover {
        background-color: #231f2b;
    }
`;
