import styled from 'styled-components';

export const OptionListStyled = styled.ul`
    ${({ theme }) => `
        margin: 0; 
        list-style: none; 
        padding: 0;
        
        li:not(:last-child) {
            border-bottom: 1px solid ${theme.GREY_238()};
        }
        
        li { box-sizing: border-box; text-align: center; padding: 1rem; cursor: pointer; }
        
        li:hover {
            background: ${theme.GREY_250()};
        }
    `}
`;