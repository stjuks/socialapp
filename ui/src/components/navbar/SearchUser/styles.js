import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchUserStyled = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    height: 3rem;

    .popover-body {
        padding: 0 !important;
    }

    @media only screen and (max-width: ${({ theme }) => theme.BREAKPOINT}) {
        display: none;
    }
`;

export const InputContainerStyled = styled.div`
    border: 1px solid ${({ theme }) => theme.GREY_238()};
    display: flex;
    width: 80%;
    border-radius: 5px;
    position: relative;
    align-items: center;
    height: 3rem;
    max-width: 400px;
    background: ${({ theme }) => theme.GREY_250()};
`;

export const SearchInputStyled = styled.input`
    border: none;
    background: transparent;
    padding: 7px 30px 7px 14px; 
    width: 100%;
    height: 100%;
    font-weight: 300;
    color: ${({ theme }) => theme.GREY_160()};
    ::placeholder {
        color: ${({ theme}) => theme.GREY_160()};
    }
`;

export const SearchIconStyled = styled.div`
    position: absolute;
    height: 100%;
    right: 0;
    width: 3rem;
    padding: 8px;
    
    svg { 
        fill: ${({ theme }) => theme.GREY_160()}; 
    }
`;

export const UserListStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const UserListItemStyled = styled(Link)`
    ${({ theme }) => `
        padding: .5rem 3rem;
        cursor: pointer;
        color: ${theme.SIDEBAR_1()};

        :hover {
            color: ${theme.SIDEBAR_1({ l: '50%' })};
        }
    `}
`;
