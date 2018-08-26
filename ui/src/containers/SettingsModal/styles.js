import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

export const SettingsModalStyled = styled(Modal)`
    width: 30rem;
    
    .modal-content {
        border: none;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 2px 4px 4px ${({ theme }) => theme.BLACK(.1)};
    }
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

export const OptionListStyled = styled.ul`
    ${({ theme }) => `
        margin: 0; 
        list-style: none; 
        padding: 0;
        
        li:not(:last-child) {
            border-bottom: 1px solid ${theme.GREY_238()};
        }
        
        li { box-sizing: border-box; text-align: center; padding: 1rem; cursor: pointer; }
        
        li:hover {
            background: ${theme.GREY_250()};
        }
    `}
    
`;