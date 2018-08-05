import styled from 'styled-components';

export const ScreenContainer = styled.div`
    overflow-y: scroll;
    background: #fafafa;
    padding: 25px;
    width: 100%;
    
    @media only screen and (max-width: 640px) {
        padding: 0;
    }
`;