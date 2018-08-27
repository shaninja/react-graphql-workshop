import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const propTypes = {
    url: PropTypes.string,
    gender: PropTypes.oneOf(['M', 'F', 'U']),
};
const defaultProps = {
    url: 'https://northmemorial.com/wp-content/uploads/2016/10/PersonPlaceholder.png',
    gender: 'U',
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
