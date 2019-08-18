import React from 'react';
import PropTypes from 'prop-types';

import {
    contentStyle,
    headerStyle,
    titleStyle,
    subtitleStyle,
    videoStyle,
} from './styles';

const FullHeader = ({
    title,
    subtitle,
    bgColor,
    textColor,
    font,
    bgImg,
    video,
}) => {
    const headerStyleCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImg})`,
    };
    const component = (
        <header style={headerStyleCombined}>
            <div style={contentStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && <video style={videoStyle} src={video} autoPlay muted loop></video>}
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
