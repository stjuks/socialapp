import styled from 'styled-components';

export const PostsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media only screen and (max-width: ${({ theme }) => theme.BREAKPOINT}) {
        justify-content: center;
    }
`;