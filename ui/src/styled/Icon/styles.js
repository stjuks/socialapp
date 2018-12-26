import styled from 'styled-components';

export const IconSvgStyled = styled.svg`
    stroke: red;
    ${({ noHover }) => !noHover &&
        `:hover {
            cursor: pointer;
            opacity: .5;
        }`
    }
`;