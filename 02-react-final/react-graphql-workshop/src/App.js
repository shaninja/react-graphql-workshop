import React, { Component } from 'react';
import './App.css';
import Photo from './Components/Photo/index.js';
import {MOCK_DATA} from './Components/Constants/family-data.js';

class FamilyAlbum extends Component {

  constructor(props) {
    super(props);

  }

  getPersonalPhotoUrl() {
    const data = JSON.parse(MOCK_DATA);
    return data.data.personal_photo.url;
  }

  getGender() {
    const data = JSON.parse(MOCK_DATA);
    return data.data.gender;
  }

  render() {
    const a = MOCK_DATA;
    return (
      <div className="my_family_album">
        <header className="family_album_header">
          <h1 className="family_album_title">My Family Album</h1>
        </header>
        <section className="me_section">
          <div> This is me! </div>
          <Photo
              // url={this.getPersonalPhotoUrl()}
              // gender={this.getGender()}
            />
        </section>
        <section className="family_section">
          Here we'll have a grid of cards of family members 
        </section>
        <section className="chosen_member_section">
          Here we'll have the chosen member, give some state, Card onClick
        </section>
      </div>
    );
  }
}

export default FamilyAlbum;
