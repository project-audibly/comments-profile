import React from 'react';
import albumProfile from '../images/profile-album-image.jpg';

const MusicProfile = () => (
  <div>
    <div className="CM-musicProfile-left">
      <div>
        <img className="CM-profile-album-image" src={albumProfile} alt="album-profile" />
      </div>
      <div>name</div>
      <div>followers   tracks</div>
      <button>follow</button>
    </div>
    <div className="CM-musicProfile-right">
      music info
    </div>
  </div>
);

export default MusicProfile;
