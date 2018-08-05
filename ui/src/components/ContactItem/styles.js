import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactItemStyled = styled(Link)`
    align-items: center;
    display: flex;
    padding: 5px 0 5px 5px;
    cursor: pointer;
    
    :hover {
        background: #fafafa;
    }
`;

export const AvatarContainerStyled = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;