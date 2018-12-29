import styled from 'styled-components';

export const PostHeaderStyled = styled.div`
    ${({ theme }) => `
        padding: .5rem 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${theme.GREY_238()};
    `}
`;

export const ProfilePictureStyled = styled.img`
    height: 4rem;
    padding-right: .5rem;
`;

export const PostDetailsStyled = styled.div`
`;

export const ImageWrapperStyled = styled.div`
    ${({ theme }) => `
        cursor: pointer;
        width: 100%;
        padding-top: 100%;
        box-sizing: border-box;
        background: ${theme.GREY_250()};
        position: relative;
    `}
`;

export const ImageContainerStyled = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageStyled = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`;

export const PostFooterStyled = styled.div`
    ${({ theme }) => `
        width: 100%;
        padding: .5rem 1rem;
        border-top: 1px solid ${theme.GREY_238()};
        font-size: 1rem;

        .row-1 {
            display: flex;
            align-items: center;
            font-weight: bold;
            padding-bottom: .5rem;
            font-size: 1.25rem;
            
            .icon {
                margin-right: .75rem;
            }

            svg {
                margin-right: .4rem;
                width: 1.75rem;
            }
        }
    `}
`;
