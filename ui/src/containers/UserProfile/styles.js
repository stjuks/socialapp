import styled from 'styled-components';
import { ScreenContainer } from 'styled/ScreenContainer';

export const UserProfileStyled = ScreenContainer.extend`
    ${({ theme }) => `
        padding: 2rem 6rem;
        flex: 1;

        @media only screen and (max-width: ${theme.BREAKPOINT}) {
            padding: 1rem;
        }
    `}
`;

export const DividerStyled = styled.hr`
    margin: 1.5rem 0 5px 0;
    border-color: ${({ theme }) => theme.BLACK(.05)};
    width: 100%;
`