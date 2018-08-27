import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../Photo/index.js'
import './index.css';
import {
    FEMALE,
    MALE,
    UNKNOWN,
    GENDERS,
    UNKNOWN_PHOTO,
  } from '../Photo/constants.js';

const propTypes = {
    url: PropTypes.string,
    gender: PropTypes.oneOf(GENDERS),
    name: PropTypes.string,
    birthDate: PropTypes.string,

};
const defaultProps = {
    url: UNKNOWN_PHOTO,
    gender: UNKNOWN,
    name: 'Unknown',
    birthDate: null,
};

class Card extends React.PureComponent {
  render() {
    const {url, gender, name, birthDate} = this.props;

    return (
      <span className="card_container">
        <Photo
            url={url}
            gender={gender}    
        />
        {name}
        {birthDate && <span className="birth_date">born on {birthDate}</span>}
      </span>
    );
  }
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

export default Card;
