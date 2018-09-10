import styled from 'styled-components';

export const ProfileDetailsStyled = styled.div`
    
`;

export const FirstRowStyled = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${({ theme }) => theme.BREAKPOINT}) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const SecondRowStyled = styled.div`
`;

export const ProfilePictureStyled = styled.img`
    ${({ theme }) => `
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        margin-right: 1rem;

        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            margin: 0;
            margin-bottom: 1rem;
        }
    `}
`;

export const DetailsStyled = styled.div`
    ${({ theme }) => `
        display: inline-block;
        flex-direction: column;
        justify-content: center;

        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            align-items: center;
            text-align: center;
        }
    `}
`;

export const FollowBtnStyled = styled.div`
    ${({ theme }) => `
        display: inline-flex; 
        align-items: center;
        color: ${theme.SIDEBAR_2()};
        z-index: 9;
        cursor: pointer;

        :hover {
            opacity: .5;
        }

        .follow-icon {
            margin-right: .25rem;
            fill: ${theme.SIDEBAR_2()};
            width: 1.5rem;
        }
    `}
`;

export const UsernameStyled = styled.div`
    ${({ theme }) => `
        height: 4rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        font-size: 4rem;
        font-weight: 300;

        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            justify-content: center;
        }
    `}
`;

export const StatisticsStyled = styled.div`
    ${({ theme }) => `

        span { margin-right: 1rem; }

        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            display: flex;
            justify-content: space-around;
            span { margin: 0 1rem; }
        }
    `}
`;

export const DescriptionStyled = styled.div`
    padding-left: 13rem;
    line-height: 2rem;
    max-width: 800px;
    width: 80%;

    @media only screen and (max-width: ${({ theme }) => theme.BREAKPOINT}) {
        width: 100%;
        padding: 1rem 0 0 0;
        text-align: center;
    }
`;


