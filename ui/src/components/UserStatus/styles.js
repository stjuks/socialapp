import styled from 'styled-components';

export const UserStatusStyled = styled.div`
    display: flex;
    height: 45px;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProfilePictureStyled = styled.div`
    width: 45px;
    background: ${({ theme }) => theme.GREY_160()};
    border-radius: 50%;
    height: 45px;
`;

export const StatusDetailsStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 5px;
`;

export const NameStyled = styled.div`
    font-size: 1.4rem;
`;

export const StatusStyled = styled.div`
    display: inline-flex;
    align-items: center;
    color: ${({ theme }) => theme.GREY_160()};
    cursor: pointer;
`;

export const StatusIconStyled = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.ONLINE};
    margin-right: 3px;
`;

export const MenuButtonStyled = styled.div`
    height: 5px;
    display: flex;
    align-items: center;
    margin-left: 3px;
`;