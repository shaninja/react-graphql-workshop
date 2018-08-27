import React, { Component } from 'react';
import './App.css';
import Photo from './Components/Photo/index.js';

class FamilyAlbum extends Component {
  render() {
    return (
      <div className="my_family_album">
        <header className="family_album_header">
          <h1 className="family_album_title">My Family Album</h1>
        </header>
        <section className="me_section">
          <div> This is me! </div>
          <Photo 
              url="https://www.myheritageimages.com/Z/storage/system/files/18/17/62/181762_154085dbd6add741bfq3of.jpg"
              gender="M"
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
