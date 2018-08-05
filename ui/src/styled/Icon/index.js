import React, { Component } from 'react';

import { Tooltip } from 'reactstrap';
import { IconStyled, IconImage } from './styles';

class Icon extends Component {
    state = {
        isTooltipOpen: false
    };

    render() {
        const {
            src,
            alt,
            onClick
        } = this.props;

        return (
            <IconStyled onClick={onClick} id={alt}>
                <IconImage
                    onMouseOut={() => this.setState({ isTooltipOpen: false })}
                    onMouseEnter={() => this.setState({ isTooltipOpen: true })}
                    src={src}
                    alt={alt}
                />
                <Tooltip
                    placement="bottom"
                    isOpen={this.state.isTooltipOpen}
                    target={alt}
                >
                    {alt}
                </Tooltip>
            </IconStyled>
        );
    }
}

export default Icon;
