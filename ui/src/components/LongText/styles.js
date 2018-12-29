import styled from 'styled-components';

export const LongTextStyled = styled.div`
    ${({ isOpened, height }) => `
        ${!isOpened && `
            max-height: ${height};
        `}
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: pre-wrap;
    `}
`;

export const ReadMoreStyled = styled.div`
    font-weight: bold;
    cursor: pointer;
`;