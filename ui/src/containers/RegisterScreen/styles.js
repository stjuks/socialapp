import styled from 'styled-components';

export const RegisterScreenStyled = styled.div`
    background: ${({ theme }) => `
        linear-gradient(to bottom right, 
        ${theme.SIDEBAR_1({ l: '20%' })}, 
        ${theme.SIDEBAR_1({ l: '10%' })})
    `};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;