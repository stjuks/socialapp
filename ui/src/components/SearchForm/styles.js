import styled from 'styled-components';
import { NavbarSection } from '../../containers/Navbar/styles';

export const SearchFormStyled = NavbarSection.extend`
    width: 40%;
    align-items: center;
    justify-content: center;
`;

export const SearchInputStyled = styled.input`
    width: 100%;
    border-radius: 5px;
    background: #fafafa;
    border: 1px solid #eee;
    padding: 5px 10px;
`;

export const SearchItemStyled = styled.div`
    border-bottom: 1px solid #eee;
    padding: 5px 10px;
    text-align: center;
    cursor: pointer;
    font-size: 1.2rem;
    
    :hover {
        background: #eee;
    }
    
    :last-child {
        border: none;
    }
`;