import styled, { keyframes } from 'styled-components';

const BTN_COMPRESS_DURATION = '.2s';

const success = keyframes`
    50% { 
        box-shadow: inset 2px 4px 4px ${({ theme }) => theme.BLACK(.1)}; 
        transform: scale(1);
    }
    100% { transform: scale(0); }
`;

const error = keyframes`
    0% {
        width: 3rem;
        color: rgba(0, 0, 0, 0);
        border-radius: 3rem;
    }
  
    15% { transform: rotate(0deg); }
    20% { transform: rotate(5deg); }
    35% { transform: rotate(-3deg); }
    50% { transform: rotate(4deg); }
    65% { transform: rotate(-1deg); }
    80% { transform: rotate(3deg); }  
    95% { transform: rotate(0deg); }

    100% {
        width: 100%;
        color: ${({ theme }) => theme.SIDEBAR_2({ l: '90%' })};
        background: ${({ theme }) => theme.SIDEBAR_2({ s: '40%', l: '40%' })};
        border-radius: 5px;
    }
`;

const compressBtn = keyframes`
    to { 
        width: 3rem; 
        color: rgba(0, 0, 0, 0);
        border-radius: 3rem;
    }
`;

const load = keyframes`
    from { visibility: visible; }
    to { transform: rotate(360deg); }
`;

export const LoginFormStyled = styled.form`
    ${({ theme }) => `
        box-shadow: 2px 4px 4px ${theme.BLACK(.05)};
        height: 60%;
        padding: 30px;
        min-height: 350px;
        min-width: 300px;
        background: ${theme.GREY_250()};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        color: ${theme.SIDEBAR_1()};
        
        @media only screen and (max-width: 420px) {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    `}
`;

export const FormTitle = styled.div`
    font-size: 3.5rem;
    font-weight: 600;
    flex: 1;
    display: flex;
    align-items: center;
`;

export const InputsStyled = styled.div`
    flex: 1.5;
    display: flex;
    margin: 1rem 0;
    flex-direction: column;
    justify-content: space-around;
`;

export const ErrorMessage = styled.div`
    ${({ hasError }) => `
        transform: ${hasError ? 'scaleY(1)' : 'scaleY(0)'};
        margin: ${hasError ? '.5rem 0' : '0'};
        transition: all .2s;
        color: indianred;
        padding-left: 5px;
        border-left: 2px solid indianred;
    `}
`;

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const SubmitBtn = styled.button`
    ${({ theme, isLoading, isSubmitted, isSuccess }) => `
        height: 3rem;
        display: flex;
        padding: 0;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all .2s;
        box-shadow: 2px 4px 4px ${theme.BLACK(.1)};
        background: ${theme.SIDEBAR_2({ s: '40%', l: '40%' })};
        border-radius: 5px;
        color: ${theme.SIDEBAR_2({ l: '90%' })};
        
        :hover {
            background: ${theme.SIDEBAR_2({ s: '40%', l: '50%' })};
            margin-bottom: -5px;
            box-shadow: 1px 2px 2px ${theme.BLACK(.2)};
        }
        
        ${isSubmitted && `
            animation: ${compressBtn} ${BTN_COMPRESS_DURATION} forwards, ${isSuccess ? success : error} .5s forwards;
            animation-delay: 0s, ${BTN_COMPRESS_DURATION};
            animation-play-state: ${isLoading ? 'paused' : 'running'};
        `}
    `}
`;

export const LoaderStyled = styled.svg`
    overflow: visible;
    position: absolute;
    visibility: hidden;
    
    circle {
        fill: none;
        stroke: white;
        stroke-width: 1;
        stroke-dasharray: 6px 4px;
        animation: ${load} 1s infinite;
        transform-origin: center;
    }
`;

export const SuggestionStyled = styled.div`
    ${({ theme }) => `
        flex: .5;
        display: flex;
        padding-top: 1rem;
        justify-content: center;
        font-size: 1rem;
        color: ${theme.GREY_160()};
        
        a, a:hover {
            text-decoration: underline;
            color: ${theme.SIDEBAR_1({ s: '30%', l: '60%' })};
        }
    `}
`;
