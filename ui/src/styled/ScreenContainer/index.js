import styled from 'styled-components';

export const ScreenContainer = styled.div`
    overflow-y: scroll;
    background: ${({ theme }) => theme.GREY_250()};
    padding: 15px;
    width: 100%;
    height: 100%;
    
    @media only screen and (max-width: 640px) {
        padding: 0;
    }
`;