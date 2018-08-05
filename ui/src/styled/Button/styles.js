import styled from 'styled-components';

export const ButtonStyled = styled.button`
    width: ${({ width }) => width};
    background: ${({ background, isLoading, disabled }) =>
    (isLoading || disabled) ? '#E0E0E0' :
        (background || '#7ED700')
    };
    height: 30px;
    margin: ${({ margin }) => margin || '10px'};
    color: white;
    border: none;
    border-radius: 20px;
    transition: all .3s;
    ${({ isLoading, disabled }) => (!isLoading && !disabled) &&
    `:hover {
            transform: scale(1.1, 1.1);
            background: #96F500;
        }`
    }
`;