import styled, { keyframes } from 'styled-components';

const load = keyframes`
    from { visibility: visible; }
    to { transform: rotate(360deg); }
`;

export const BtnContainerStyled = styled.div`
    ${({ theme }) => `
        height: 3rem;
        font-weight: bold;
        color: white;
        width: 100%;
        border-radius: .5rem;
        position: relative;
        background: ${theme.SIDEBAR_2()};

        :hover {
            outline: none;
            background: ${theme.SIDEBAR_2({ s: '40%', l: '50%' })};
            box-shadow: 1px 1px 4px ${theme.SIDEBAR_2({ s: '40%', l: '70%' })};
        }
    `}
`;

export const BtnStyled = styled.button`
    width: 100%;
    height: 100%;
    font-weight: bold;
    color: white;
    cursor: pointer;
`;

export const LoaderStyled = styled.svg`
    overflow: visible;
    position: absolute;
    
    circle {
        fill: none;
        stroke: white;
        stroke-width: 1;
        stroke-dasharray: 6px 4px;
        animation: ${load} 1s infinite;
        transform-origin: center;
    }
`;