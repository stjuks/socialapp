import styled from 'styled-components';

export const ImageContainer = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;

    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    canvas, img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const FileInputStyled = styled.input`
    
`;

