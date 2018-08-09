import styled from 'styled-components';

export const SidebarStyled = styled.div`
    width: 250px;
    border-right: 1px solid black;
    background: linear-gradient(to bottom right, #604A70, #2E383D);
    color: ${({ theme }) => theme.GREY_238()};
    padding: 20px 30px;
    
    @media only screen and (max-width: 640px) {
        display: none;
    }
`;