import React from "react";
import PropTypes from 'prop-types';


class Card extends React.Component {

    render() {
        const styles = {
            backgroundColor: this.props.cardColor,
            height: this.props.height,
            width: this.props.width
        }

        return (
            <div style={styles}/>
        )
    }

}

Card.propTypes = {
    cardColor: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number,
}

Card.defaultProps = {
    // cardColor: 'coral',
    width: 100,
    // height: 150
}


export default Card;
