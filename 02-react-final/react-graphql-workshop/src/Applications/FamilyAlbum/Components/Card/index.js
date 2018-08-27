import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../Photo/index.js'
import './index.css';
import {
    UNKNOWN,
    GENDERS,
    UNKNOWN_PHOTO,
  } from '../Photo/constants.js';

const propTypes = {
    photoUrl: PropTypes.string,
    gender: PropTypes.oneOf(GENDERS),
    name: PropTypes.string,
    birthDate: PropTypes.string,

};
const defaultProps = {
    photoUrl: UNKNOWN_PHOTO,
    gender: UNKNOWN,
    name: 'Unknown',
    birthDate: null,
};

class Card extends React.PureComponent {

    renderBirthDate(birthDate) {
        return birthDate && <span className="birth_date">born on {birthDate.text}</span>;
    }

  render() {
    const {photoUrl, gender, name, birthDate} = this.props;

    return (
      <span className="card_container">
        <Photo
            url={photoUrl}
            gender={gender}    
        />
        {name}
        {this.renderBirthDate(birthDate)}
      </span>
    );
  }
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

export default Card;
