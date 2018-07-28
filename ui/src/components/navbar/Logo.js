import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Logo extends Component {
    render() {
        return (
            <Link to="/" className="navbar-section logo-container">
                <strong>SOC1ALITY</strong>
            </Link>
        );
    }
}

export default Logo;
