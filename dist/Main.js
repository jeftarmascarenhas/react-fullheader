Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FullHeader = function FullHeader(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        bgColor = _ref.bgColor,
        textColor = _ref.textColor,
        font = _ref.font,
        bgImg = _ref.bgImg,
        video = _ref.video;

    var headerStyleCombined = Object.assign({}, _styles.headerStyle, {
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: 'url(' + String(bgImg) + ')'
    });
    var component = _react2['default'].createElement(
        'header',
        { style: headerStyleCombined },
        _react2['default'].createElement(
            'div',
            { style: _styles.contentStyle },
            title && _react2['default'].createElement(
                'h1',
                { style: _styles.titleStyle },
                title
            ),
            subtitle && _react2['default'].createElement(
                'h2',
                { style: _styles.subtitleStyle },
                subtitle
            )
        ),
        video && _react2['default'].createElement('video', { style: _styles.videoStyle, src: video, autoPlay: true, muted: true, loop: true })
    );
    return component;
};

FullHeader.propTypes = {
    title: _propTypes2['default'].string,
    subtitle: _propTypes2['default'].string,
    bgColor: _propTypes2['default'].string,
    bgImg: _propTypes2['default'].string
};

FullHeader.defaultProps = {
    bgColor: '#ccc',
    textColor: '#000',
    font: 'Arial',
    bgImg: ''

};

exports['default'] = FullHeader;