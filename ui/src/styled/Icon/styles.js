import styled from 'styled-components';

export const IconSvgStyled = styled.svg`
    ${({ noHover }) => !noHover &&
        `:hover {
            cursor: pointer;
            opacity: .5;
        }`
    }
`;