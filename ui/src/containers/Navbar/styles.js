import styled from 'styled-components';

export const NavbarStyled = styled.div`
    ${({ theme }) => `
        padding: 1.5rem;
        border-bottom: 1px solid ${theme.GREY_238()};
        display: flex;
        flex-shrink: 0;

        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            order: 2;
            padding: .5rem;
            border-bottom: none;
            border-top 1px solid ${theme.GREY_238()};
        }
    `}
`;