import styled from 'styled-components';

export const MenuBarStyled = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    box-sizing: border-box;
    padding: 10px;
    
    svg { height: 1.5rem; fill: ${({ theme }) => theme.GREY_160()};

    @media only screen and (max-width: ${({ theme }) => theme.BREAKPOINT}) {
        width: 100%;
    }
`;
