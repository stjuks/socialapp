import styled from 'styled-components';

export const ScreenContainer = styled.div`
    overflow-y: scroll;
    background: ${({ theme }) => theme.GREY_250()};
    padding: 15px;
    width: 100%;
    height: 100%;
`;