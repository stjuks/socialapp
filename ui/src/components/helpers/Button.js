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
            style,
            color
        } = this.props;

        const {
            isHovering
        } = this.state;

        let backgroundStyle = {
            ...style
        };

        let hoverStyle = {
            ...style
        };

        return (
            <div className="button-container">
                <button
                    className={`${className} button`}
                    style={isHovering ? backgroundStyle : hoverStyle}
                    onClick={isLoading || disabled ? null : onClick}
                    onMouseOver={e => this.setState({ isHovering: true })}
                    onMouseOut={e => this.setState({ isHovering: false })}
                >
                    {isLoading ? <div className="loader" /> : this.props.children}
                </button>
            </div>
        );
    }
}

export default Button;
