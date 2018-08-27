import React, { Component } from 'react';
import './index.css';
import Photo from './Components/Photo/index.js';
import Card from './Components/Card/index.js';
import {MOCK_DATA} from './Constants/family-data.js';

class FamilyAlbum extends Component {
  render() {
    const individualData = JSON.parse(MOCK_DATA).data.individual;
    const familyMembers = individualData.close_family.data;
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
                  const individual = member.individual;
                  return <Card
                    key={individual.name}
                    name={individual.name}
                    birthDate={individual.birth_date}
                    photoUrl={individual.personal_photo ? individual.personal_photo.url : undefined}
                    gender={individual.gender}
                  />;
                })
            }
          </div>
        </section>
        <section className="chosen_member_section">
          <div className="section_title"> And this is my favorite family member (don't worry, we wont tell...)  </div>
        </section>
      </div>
    );
  }
}

export default FamilyAlbum;
