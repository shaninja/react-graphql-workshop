import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';
import {
  UNKNOWN,
  GENDERS,
  UNKNOWN_PHOTO,
} from './constants.js';

const propTypes = {
    url: PropTypes.string,
    gender: PropTypes.oneOf(GENDERS),
};
const defaultProps = {
    url: UNKNOWN_PHOTO,
    gender: UNKNOWN,
};

/**
 * Photo Component
 * Round photo with border that indicats the person't gender
 * 
 * @param {string} [url] Url for the photo that will be displayed
 * @param {string} [gender] M/F/U
 */
class Photo extends React.Component {
  render() {
    const {url, gender} = this.props;
    const imageClass = `photo ${gender}`;

    return (
      <span className="photo_container">
        <img 
            className={imageClass} 
            src={url} 
            alt="Personal Photo"    
        />
      </span>
    );
  }
}

Photo.propTypes = propTypes;
Photo.defaultProps = defaultProps;

export default Photo;
