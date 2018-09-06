import styled from 'styled-components';

export const ProfileDetailsStyled = styled.div`
    
`;

export const FirstRowStyled = styled.div`
    display: flex;
    align-items: center;
`;

export const SecondRowStyled = styled.div`
`;

export const ProfilePictureStyled = styled.img`
    ${({ theme }) => `
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin-right: 1rem;
        box-shadow: 3px 2px 5px ${theme.BLACK(.02)};
    `}
`;

export const DetailsStyled = styled.div`
    ${({ theme }) => `
        display: flex;
        flex-direction: column;
        justify-content: center;
    `}
`;

export const FollowBtnStyled = styled.div`
    ${({ theme }) => `
        display: flex; 
        align-items: center;
        color: ${theme.SIDEBAR_2()};

        .follow-icon {
            margin-right: .25rem;
            fill: ${theme.SIDEBAR_2()};
            width: 1.5rem;
        }
    `}
`;

export const UsernameStyled = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    font-size: 4rem;
    font-weight: 300;
    margin: 0 0 .75rem 0;
`;

export const StatisticsStyled = styled.div`
    span { margin-right: 2rem; }
`;

export const DescriptionStyled = styled.div`
`;


