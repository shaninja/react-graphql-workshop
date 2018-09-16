import React from 'react';
import PropTypes from 'prop-types';
import Photo from '../Photo/Photo.js'
import './Card.css';
import {
    UNKNOWN,
    GENDERS,
    UNKNOWN_PHOTO,
  } from '../Photo/constants.js';

const propTypes = {
    photoUrl: PropTypes.string,
    gender: PropTypes.oneOf(GENDERS),
    name: PropTypes.string,
    relationship: PropTypes.string,
    birthDate: PropTypes.object,
    onClick: PropTypes.func,

};
const defaultProps = {
    photoUrl: UNKNOWN_PHOTO,
    gender: UNKNOWN,
    name: 'Unknown',
    relationship: '',
    birthDate: null,
    onClick: () => {},
};

/**
 * Card Component
 * Displayes information about a person - photo, name, and date of birth
 *
 * @param {string} [photoUrl] Url for the photo that will be displayed
 * @param {string} [gender] M/F/U
 * @param {string} [name] The person's name
 * @param {string} [relationship] The person's relationship to the root individual (father, daughter, etc)
 * @param {string} [birthDate] The person's date of birth, as a string
 * @param {function} [onClick] Callback to handle click event
 */
class Card extends React.PureComponent {
  render() {
    const {photoUrl, gender, name, relationship, birthDate, onClick} = this.props;

    return (
      <span
        className="card_container"
        onClick={() => onClick()}
        >
        <Photo
            url={photoUrl}
            gender={gender}
        />
        <span className="name"> {name} </span>
        <span className="relationship"> {relationship} </span>
        {birthDate && <span className="birth_date">born on {birthDate.text}</span>}
      </span>
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
