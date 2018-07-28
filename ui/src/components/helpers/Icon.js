import React, { Component } from 'react';

import { Tooltip } from 'reactstrap';

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
            <div onClick={onClick} id={alt} className="icon-container">
                <img
                    onMouseOut={e => this.setState({ isTooltipOpen: false })}
                    onMouseEnter={e => this.setState({ isTooltipOpen: true })}
                    className="icon"
                    src={src}
                    alt={alt} />
                <Tooltip
                    placement="bottom"
                    isOpen={this.state.isTooltipOpen}
                    target={alt}
                >
                    {alt}
                </Tooltip>
            </div>
        );
    }
}

export default Icon;
