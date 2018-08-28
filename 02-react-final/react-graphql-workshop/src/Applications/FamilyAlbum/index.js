import React, { Component } from 'react';
import './index.css';
import Photo from './Components/Photo/index.js';
import Card from './Components/Card/index.js';
import {MOCK_DATA} from './Constants/family-data.js';

class FamilyAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {favoriteFamilyMember: {}};
  }

  setFavorite(familyMemeberDetails) {
    const {name, birth_date, personal_photo, gender} = familyMemeberDetails;
    this.setState({favoriteFamilyMember: {
      name: name,
      birthDate: birth_date,
      photoUrl: (personal_photo ? personal_photo.url : undefined),
      gender: gender,
    }});
  }

  render() {
    const individualData = JSON.parse(MOCK_DATA).data.individual;
    const familyMembers = individualData.close_family.data;
    const {favoriteFamilyMember} = this.state;
    return (
      <div className="my_family_album">
        <header className="family_album_header">
          <h1 className="family_album_title">{individualData.name}'s Family</h1>
        </header>
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
      </div>
    );
  }
}

export default FamilyAlbum;
