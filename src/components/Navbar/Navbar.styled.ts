import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #9b73f2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`;
export const NavLogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    color: white;
`;
export const NavLogo = styled.img`
    width: auto;
    height: 40px;
    border-radius: 50%;
`;

export const NavButton = styled.button`
    background-color: #9b73f2;
    border: 2px solid #9b73f8;
    font-family: 'Delius', cursive;
    padding: 5px 10px;
    border-radius: 25px;
    color: white;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
        border: 2px solid #fff;
    }
`;
