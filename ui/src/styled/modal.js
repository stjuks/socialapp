import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export const ModalStyled = styled(Modal)`
    ${({ width, theme }) => `
        width: ${width};
        margin: auto;
        padding: 5px;

        @media only screen and (max-width: 720px) {
            width: 100%;
        }
    
        .modal-content {
            border: none;
            border-radius: 3px;
            overflow: hidden;
            box-shadow: 2px 4px 4px ${theme.BLACK(.1)};
        }
    `}
`;

export const ModalHeaderStyled = styled(ModalHeader)`
    ${({ theme }) => `
        background: ${theme.SIDEBAR_1()};
        border-radius: 0;
        border: none;
        color: ${theme.SIDEBAR_1({ l: '95%' })};
        border-top: 2px solid ${theme.SIDEBAR_2()};
        justify-content: center;
        
        svg { height: 2rem; width: 2rem; fill: ${theme.SIDEBAR_1({ l: '95%' })}; }
    `}
`;

export const ModalBodyStyled = styled(ModalBody)`
    padding: 0;    
`;
