import styled from 'styled-components';

export const SidebarStyled = styled.div`
    padding: 15px;
    width: 20%;
    min-width: 250px;
    border-right: 1px solid #eee;
    
    @media only screen and (max-width: 640px) {
        display: none;
    }
`;