import styled from 'styled-components';

import {
    ModalBodyStyled
} from 'styled/modal';

export const UploadModalBodyStyled = styled(ModalBodyStyled)`
    display: flex;
    flex-direction: column;
`;

export const ImageContainer = styled.label`
    width: 100%;
    padding-top: 100%;
    position: relative;

    div {
        
    }

    canvas, img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const FileInputStyled = styled.input`
    display: none;
`;

export const InputsStyled = styled.div`
    padding: 1rem;
`;

export const LabelStyled = styled.label`
    ${({ theme }) => `
        color: ${theme.GREY_119()};
        font-weight: bold;
        width: 100%;
    `}
`

export const CaptionStyled = styled.textarea`
    ${({ theme }) => `
        width: 100%;
        margin-bottom: .5rem;
        border-radius: .5rem;
        border: 1px solid ${theme.GREY_208()};
    `}
`;

export const SubmitBtnStyled = styled.button`
    ${({ theme }) => `
        width: 100%;
        height: 3rem;
        font-weight: bold;
        color: ${theme.WHITE()};
        border-radius: .5rem;
        background: ${theme.SIDEBAR_2()};
        cursor: pointer;

        :hover, :focus {
            outline: none;
            background: ${theme.SIDEBAR_2({ s: '40%', l: '50%' })};
            box-shadow: 1px 1px 4px ${theme.SIDEBAR_2({ s: '40%', l: '70%' })};
        }
    `}
`;

export const ImageStyled = styled.div`
    ${({ theme }) => `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${theme.GREY_238()};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: ${theme.BLACK(.3)};
    `}
`;

export const ImageOverlayStyled = styled.div`
    ${({ theme }) => `
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
    `}
`;

export const ErrorMessageStyled = styled.div`
    ${({ theme }) => `
        margin-top: .5rem;
        font-weight: bold;
        color: indianred;
        border-left: 2px solid indianred;
        padding-left: 5px;
    `}
`;

