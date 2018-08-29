import React, { Component } from 'react';

import Icon from '../Icon';

import {
    InputContainer,
    InputLabel,
    FormInput,
    AnimatedBorder
} from './styles';

class Input extends Component {
    render() {
        const {
            label, name, validated
        } = this.props;

        return (
            <InputContainer validated={validated}>
                <FormInput id={name} {...this.props} />
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <AnimatedBorder validated={validated} />
                <Icon noHover fill="none" type="tick" className="validated-icon" />
            </InputContainer>
        );
    }
}

export default Input;
