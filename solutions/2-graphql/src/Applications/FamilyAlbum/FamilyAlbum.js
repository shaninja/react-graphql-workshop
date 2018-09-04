import React, { Component } from 'react';
import './FamilyAlbum.css';
import Photo from './Components/Photo/Photo.js';
import Card from './Components/Card/Card.js';
import PropTypes from 'prop-types';
import {MOCK_DATA} from './Constants/family-data.js';


const propTypes = {
  familyInformation: PropTypes.object,
};

const defaultProps = {
  familyInformation: JSON.parse(MOCK_DATA),
};

/**
 * FamilyAlbum
 * Page to display a person and details about his/hers family members
 * 
 * @param {object} [familyInformation] Object response from the FGQL call we made, with information about the family members
 */
class FamilyAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {favoriteFamilyMember: {}};
  }

  /**
   * Sets the favorite family member
   * @param {object} familyMemeberDetails 
   */
  setFavorite(familyMemeberDetails) {
    const {name, birth_date, personal_photo, gender} = familyMemeberDetails;
    this.setState({favoriteFamilyMember: {
      name: name,
      birthDate: birth_date,
      photoUrl: (personal_photo ? personal_photo.url : undefined),
      gender: gender,
    }});
  }

  /**
   * Renders the section with the personal photo
   */
  renderMeSection() {
    const individualData = JSON.parse(MOCK_DATA).data.individual;
    const {favoriteFamilyMember} = this.state;

    return (
        <section className="me_section">
          <div className="personal_photo">
              <Photo
                url={individualData.personal_photo.url}
                gender={individualData.gender}
              />
              </div>
            <div className="favorite_family_memberr">
              <Photo 
                url={favoriteFamilyMember.photoUrl}
                gender={favoriteFamilyMember.gender}
              />
            </div>
        </section>
    );
  }


  /**
   * Renders the section with the cards of all the family members
   */
  renderFamilySection() {
    const individualData = JSON.parse(MOCK_DATA).data.individual;
    const familyMembers = individualData.close_family.data;

    return (
        <section className="family_section">
          <div className="family_members">
            {
              familyMembers.map(member =>
                {
                  const {name, birth_date, personal_photo, gender} = member.individual;
                  return <Card
                    key={name}
                    name={name}
                    birthDate={birth_date}
                    photoUrl={personal_photo ? personal_photo.url : undefined}
                    gender={gender}
                    onClick={() => this.setFavorite(member.individual)}
                  />;
                })
            }
          </div>
        </section>
    );
  }

  render() {
    const individualData = JSON.parse(MOCK_DATA).data.individual;
    return (
      <div className="my_family_album">
        <header className="family_album_header">
          <h1 className="family_album_title">{individualData.name}'s Family</h1>
        </header>
        {this.renderMeSection()}
        {this.renderFamilySection()}
      </div>
    );
  }
}


FamilyAlbum.propTypes = propTypes;
FamilyAlbum.defaultProps = defaultProps;

export default FamilyAlbum;
