import styled from 'styled-components';

export const ImageContainer = styled.div`
    :before {
        content: '';
        width: 100%;
        padding-top: 100%;
        position: relative;
    }
    
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const FileInputStyled = styled.input`
    
`;

