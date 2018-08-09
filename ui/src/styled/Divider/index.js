import styled from 'styled-components';

export const Divider = styled.div`
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.WHITE(.2)};
    margin: ${({ margin }) => margin};
`;
