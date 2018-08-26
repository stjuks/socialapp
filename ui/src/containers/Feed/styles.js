import styled from 'styled-components';
import { ScreenContainer } from 'styled/ScreenContainer';

export const FeedStyled = ScreenContainer.extend`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    
    @media only screen and (max-width: 640px) {
        flex-direction: column;
    }
`;