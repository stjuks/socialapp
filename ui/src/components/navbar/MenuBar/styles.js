import styled from 'styled-components';

export const MenuBarStyled = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    box-sizing: border-box;
    padding: 10px;
    
    svg { height: 1.5rem; fill: ${({ theme }) => theme.GREY_160()};
`;
