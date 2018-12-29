import React, { Component } from 'react';

import {
    LongTextStyled,
    ReadMoreStyled
} from './styles';

class LongText extends Component {
    state = {
        isOpened: false
    };

    toggle = () => {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        const {
            text,
            height
        } = this.props;

        const {
            isOpened
        } = this.state

        return (
            <div>
                <LongTextStyled isOpened={isOpened} height={height || '3rem'}>
                    {text}
                </LongTextStyled>
                {text.length > 150 &&
                    <ReadMoreStyled onClick={() => this.toggle()}>
                        {isOpened ? ' Read less' : ' Read more'} 
                    </ReadMoreStyled>
                }
            </div>
        );
    }
}

export default LongText;
