import React from 'react';
import './error-indicator.scss';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="Error-Image" />
            <span className="boom">BOOM!</span>
            <span> something has gone terribly wrong</span>
            <span>
                (but we already send droids to fix it)
            </span>
        </div>
    );
}

export default ErrorIndicator