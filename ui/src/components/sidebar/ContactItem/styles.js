import styled from 'styled-components';

export const ContactItemStyled = styled.div`
    display: flex;
    padding: 5px 10px;
    align-items: center;
    cursor: pointer;
    
    :hover {
        background: ${({ theme }) => theme.BLACK(.1)};
    }
`;

export const ContactPictureStyled = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 7px;
    filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, .25));
`;

export const ContactStatusStyled = styled.div`
    background: ${({ theme }) => theme.ONLINE};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-left: auto;
`;
