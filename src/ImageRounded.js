import React from "react";
import PropTypes from 'prop-types';

function ImageRounded(props) {

    return (
        <img
            src={props.src}
            alt="logo"
            style={{borderRadius: props.borderRadius}}
            className="round-image"
        />
    )

}

ImageRounded.propTypes = {
    src: PropTypes.string.isRequired,
    borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

ImageRounded.defaultProps = {
    borderRadius: '20',
}

export default ImageRounded;

