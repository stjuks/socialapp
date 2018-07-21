import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {
            isHovering: false
        }
    }

    render() {
        const {
            className,
            onClick,
            value,
            isLoading,
            disabled,
            color
        } = this.props;

        const {
            isHovering
        } = this.state;

        let backgroundStyle = {
            background: isLoading || disabled ? '#eee' : 'dodgerblue',
            cursor: isLoading || disabled ? 'default' : 'pointer'
        };

        let hoverStyle = {
            background: '#eee',
            cursor: isLoading || disabled ? 'default' : 'pointer'
        };

        return (
            <button
                className={`${className} button`}
                style={isHovering ? backgroundStyle : hoverStyle}
                onClick={isLoading || disabled ? null : onClick}
                onMouseOver={e => this.setState({ isHovering: true })}
                onMouseOut={e => this.setState({ isHovering: false })}
            >
                {isLoading ? <div className="loader" /> : value}
            </button>
        );
    }
}

export default Button;
