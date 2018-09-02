import styled, { keyframes } from 'styled-components';

const load = keyframes`
    from { visibility: visible; }
    to { transform: rotate(360deg); }
`;

export const AuthFormStyled = styled.form`
    ${({ theme }) => `
        box-shadow: 2px 4px 4px ${theme.BLACK(.05)};
        height: 60%;
        padding: 30px;
        min-height: 450px;
        min-width: 300px;
        max-height: 550px;
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
    flex: 1.5;
    display: flex;
    align-items: center;
`;

export const InputsStyled = styled.div`
    flex: ${({ flex }) => flex || 3};            return dispatch(REGISTER.ERROR('Passwords do not match!'));

    display: flex;
    padding: ${({ padding }) => padding || 0};
    margin-top: 1rem;
    flex-direction: column;
    justify-content: space-around;
`;

export const ErrorMessage = styled.div`
    ${({ hasError }) => `
        transform: ${hasError ? 'scaleY(1)' : 'scaleY(0)'};
        transition: all .2s;
        height: 1.5rem;
        display: flex;
        align-items: center;
        color: indianred;
        padding-left: 5px;
        border-left: 2px solid indianred;
    `}
`;

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1.5;
`;

export const SubmitBtn = styled.button`
    ${({ theme, isLoading, isSubmitted, isSuccess }) => `
        height: 3rem;
        display: flex;
        padding: 0;
        align-items: center;
        justify-content: center;
        position: relative;
        width: ${isSubmitted ? '3rem' : '100%'};
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all .2s;
        box-shadow: ${isSubmitted ? 
            isSuccess ? `inset 5px 5px 10px rgba(0, 0, 0, .4)` : 
                `1px 1px 4px ${theme.SIDEBAR_2({ s: '40%', l: '70%' })}` : 
            `2px 4px 4px ${theme.BLACK(.1)}`
        };
        background: ${isSubmitted ? 
            theme.SIDEBAR_2({ s: '40%', l: '50%' }) : 
            theme.SIDEBAR_2({ s: '40%', l: '40%' })
        };
        border-radius: ${isSubmitted ? '3rem' : '5px'};
        color: ${isSubmitted ? 'rgba(0, 0, 0, 0)' : theme.SIDEBAR_2({ l: '90%' })};
        transform: ${isSuccess ? 'scale(0)' : 'scale(1)'};
        
        :hover, :focus {
            outline: none;
            background: ${theme.SIDEBAR_2({ s: '40%', l: '50%' })};
            margin-bottom: -5px;
            box-shadow: 1px 1px 4px ${theme.SIDEBAR_2({ s: '40%', l: '70%' })};
        }
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
        align-items: flex-start;
        font-size: 1rem;
        color: ${theme.GREY_160()};
        
        a, a:hover {
            text-decoration: underline;
            color: ${theme.SIDEBAR_1({ s: '30%', l: '60%' })};
        }
    `}
`;
