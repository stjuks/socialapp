import styled from 'styled-components';

const titleSizes = {
    SMALL: '1rem',
    MEDIUM: '2rem',
    LARGE: '4rem'
};

export const Title = styled.div`
    font-size: ${({ size }) =>
    (size && titleSizes[size.toUpperCase()]) || titleSizes.MEDIUM
    };
`;