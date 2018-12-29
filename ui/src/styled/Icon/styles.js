import styled from 'styled-components';

export const IconSvgStyled = styled.svg`
    ${({ noHover, isActive, activeColor }) => `
        ${!noHover && `
            :hover {
                cursor: pointer;
                opacity: .5;
            }
        `}
        ${isActive && `
            path { fill: ${activeColor}; }
        `}
    `}
`;