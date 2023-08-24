import React from 'react';

const Picture = ({ onClick }) => {
    const imagePath = require('./images/checkPick.jpeg');

    return (
        <img
            src={imagePath.default}
            alt="Your Picture"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        />
        );
};

export default Picture;
