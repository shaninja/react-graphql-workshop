import React, { Component } from 'react';
import './FamilyAlbum.css';
import Photo from './Components/Photo/Photo.js';
import {MOCK_DATA} from './Constants/family-data.js';
/**
 * TODO
 * Don't forget to import your Card component here
 */


/**
 * FamilyAlbum
 * Page to display a person and details about his/hers family members
 */
class FamilyAlbum extends Component {
  constructor(props) {
    super(props);
    /**
     * TODO
     * If you want to save the favorite family member in the state,
     * initiate the state here, in the constructor.
     */
  }

  /**
   * TODO
   * If you want to create a function with some logic (for example,
   * to save the new favorite family member to the state), you should do
   * it here, above the render methods.
   */

   
  /**
   * Renders the section with the personal photo
   */
  renderMeSection() {
    const individualData = JSON.parse(MOCK_DATA).data.individual;

    return (
      <section className="me_section">
          <div className="personal_photo">
              <Photo
                url={individualData.personal_photo.url}
                gender={individualData.gender}
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

            {/* 
            TODO
            Here you can iterate over all the family members, and display
            each one using the Card component.
            */}

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

export default FamilyAlbum;
