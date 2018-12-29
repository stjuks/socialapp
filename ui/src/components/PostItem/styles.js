import styled, { keyframes } from 'styled-components';


const loadImage = keyframes`
    0%{ background-position:0 0%; }
    100%{ background-position: 100% 100%; }
`;

export const PostItemStyled = styled.div`
    ${({ theme }) => `
        flex-basis: calc(100% / 3);
        padding: 5px;
        box-sizing: border-box;
        min-width: 250px;

        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            flex-basis: 50%;
        }

        @media only screen and (max-width: ${theme.BREAKPOINT_SMALL}) {
            flex-basis: 100%;   
        }
    `}
`;

export const PostItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: .25rem .25rem 0 0;
    overflow: hidden;
`;

export const PostImageStyled = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
    cursor: pointer;
    
    :hover .post-name {
        opacity: 1;
    }
`;

export const PostImageWrapper = styled.div`
    ${({ theme, isImageLoaded }) => `
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        
        ${!isImageLoaded ? `
            animation: ${loadImage} 5s linear infinite;
            background: repeating-linear-gradient(
                -45deg, 
                ${theme.BLACK(.05)}, 
                ${theme.BLACK(.05)} 3rem, 
                ${theme.BLACK(.1)} 3rem, 
                ${theme.BLACK(.1)} 6rem
            );
            background-size: 200% 200%;
        ` : `
            background: ${theme.BLACK(.9)};
        `}
    `}
`;

export const PostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PostNameStyled = styled.div`
    ${({ theme }) => `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: .4rem 0 2rem 0;
        opacity: 0;
        transition: opacity .2s;
        color: ${theme.GREY_250()};
        text-align: center;
        background: linear-gradient(to bottom, ${theme.BLACK(.5)}, transparent);
    `}
`;

export const PostDetailsStyled = styled.div`
    ${({ theme }) => `
        padding: 10px;
        border: solid ${theme.GREY_238()};
        color: ${theme.SIDEBAR_1()};
        border-width: 0 1px 1px 1px;
        display: flex;
        align-items: center;
        border-radius: 0 0 .25rem .25rem;
        
        p { 
            white-space: nowrap;
            margin: 0;
            overflow: hidden;
            flex: 1 0 0;
            text-overflow: ellipsis;
        }
        
        svg { 
            height: 16px;
            fill: ${theme.SIDEBAR_1()};
            margin-right: .25rem;
        }
    `}
`;


export const DetailContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: ${({ theme }) => theme.SIDEBAR_1()};
    margin-right: .5rem;
`;