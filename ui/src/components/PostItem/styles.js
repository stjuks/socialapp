import styled from 'styled-components';

export const PostItemStyled = styled.div`
    min-width: 300px;
    margin: 25px;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 20px #eee;
    border: 1px solid #eee;
    
    @media only screen and (max-width: 640px) {
        margin: 0;
        margin-bottom: 50px;
        border-radius: 0;
        border: none;
        flex-basis: 100% !important;
    }
`;

export const PostDetailsStyled = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
`;

export const PostImageContainerStyled = styled.div`
    width: 100%;
    height: 0;
    position: relative;
    padding-top: 100%;
    overflow: hidden;
`;

export const PostImageInner = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const PostImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;