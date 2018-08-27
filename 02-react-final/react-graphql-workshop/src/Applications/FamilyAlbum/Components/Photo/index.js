import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {
  FEMALE,
  MALE,
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

class Photo extends React.PureComponent {
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
