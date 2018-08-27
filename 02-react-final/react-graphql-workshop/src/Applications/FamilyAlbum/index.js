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
          <h1 className="family_album_title">My Family Album</h1>
        </header>
        <section className="me_section">
          <div className="section_title"> This is me! </div>
          <Photo
              url={individualData.personal_photo.url}
              gender={individualData.gender}
            />
        </section>
        <section className="family_section">
          <div className="section_title"> This is my family: </div>
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
        <section className="chosen_member_section">
          <div className="section_title"> And this is my favorite family member (don't worry, we wont tell...)  </div>
            <div className="favorite_container">
              <Card 
                name={favoriteFamilyMember.name}
                birthDate={favoriteFamilyMember.birth_date}
                photoUrl={favoriteFamilyMember.personal_photo ? favoriteFamilyMember.personal_photo.url : undefined}
                gender={favoriteFamilyMember.gender}
              />
            </div>
        </section>
      </div>
    );
  }
}

export default FamilyAlbum;
