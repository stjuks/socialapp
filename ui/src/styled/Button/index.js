import React from 'react';

import {
    BtnContainerStyled,
    BtnStyled,
    LoaderStyled
} from './styles';

export default props =>
    <BtnContainerStyled>
        {!props.isLoading ?
            <BtnStyled onClick={() => props.onClick()}>
                {props.value}
            </BtnStyled> :
            <LoaderStyled height="100%" width="100%">
                <circle r="8" fill="black" cy="50%" cx="50%" />
            </LoaderStyled>
        }
    </BtnContainerStyled>
;
