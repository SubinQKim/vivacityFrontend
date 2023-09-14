import React from 'react';

const Picture = ({ onClick }) => {
    const imagePath = require('../images/checkPic.jpeg');

    const imageStyle = {
        width: '320px',
        height: '240px',
        cursor: 'pointer'
    }

    return (
        <img
            src={imagePath}
            alt="Your Picture"
            onClick={onClick}
            style={imageStyle}
        />
        );

};

export default Picture;
