import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg }) => {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImg})`,
    };
    const component = (
        <header style={headerStyle}>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    );
    return component;
};


FullHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    bgImg: PropTypes.string,
};

FullHeader.defaultProps = {
    bgColor: '#ccc',
    textColor: '#000',
    font: 'Arial',
    bgImg: '',

};

export default FullHeader;
