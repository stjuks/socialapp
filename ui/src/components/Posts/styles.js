import styled from 'styled-components';

export const PostsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-around;
    > * {
        flex-basis: calc(100% / ${({ itemsPerRow }) => itemsPerRow || 2});
    }
`;