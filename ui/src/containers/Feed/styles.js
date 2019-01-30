import styled from 'styled-components';
import { ScreenContainer } from 'styled/ScreenContainer';

export const FeedTitleStyled = styled.div`
    font-size: 4rem;
    font-weight: 300;
    padding-left: .5rem;
    width: 100%;
`;

export const FeedStyled = ScreenContainer.extend`
    ${({ theme }) => `
        flex: 1;
        height: 100%;
        
        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            padding: 1rem;
        }
    `}
`;

export const DividerStyled = styled.hr`
    margin: .25rem 0 1rem 0;
    border-color: ${({ theme }) => theme.BLACK(.05)};
    width: 100%;
`