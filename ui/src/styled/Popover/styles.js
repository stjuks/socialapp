import styled, { keyframes } from 'styled-components';

const draw = keyframes`
    to { stroke-dashoffset: 0; }
`;

export const InputContainer = styled.div`
    ${({ theme, validated }) => `
        position: relative;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${theme.GREY_208()};
        
        .validated-icon {
            height: 1rem;
        }
        
        .validated-icon path {
            stroke: green;
            stroke-width: 30px;
            stroke-dasharray: 1000;
            stroke-dashoffset: ${validated ? 0 : 1000};
            transition: stroke-dashoffset .2s linear;
        }
    `}
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 0 .5rem;
    background: transparent;
    border: none;
    outline: none;
    z-index: 9;
    height: 2.5rem;
    
    ${({ value }) => `
        :focus ~ div ${value.length > 0 ? ',~ div ' : ''} { 
            transform : scaleX(1); 
        }
        :focus ~ label ${value.length > 0 ? ',~ label ' : ''} { 
            bottom: 2rem; font-size: .9rem; 
        }
    `}
`;

export const InputLabel = styled.label`
    position: absolute;
    font-weight: 400;
    left: 0;
    bottom: 0;
    font-weight: 600;
    transition: all .2s;
    color: ${({ theme }) => theme.GREY_119()};
`;

export const AnimatedBorder = styled.div`
    position: absolute;
    width: 100%;
    bottom: -1px;
    height: 1px;
    transition: all .2s;
    background: linear-gradient(to right, black, black 50%, green 50%);
    background-size: 200%;
    background-position: ${({ validated }) => validated ? '100%' : '0'};
    transition: all .2s;
    transform: scaleX(0);
    transform-origin: left;
`;