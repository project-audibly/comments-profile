import React from 'react';
import albumProfile from '../images/profile-album-image.jpg';

const MusicProfile = () => (
  <div className="CM-music-profile">
    <span className="CM-musicProfile-left">
      <div>
        <img className="CM-profile-album-image" src={albumProfile} alt="album-profile" />
      </div>
      <div>name</div>
      <div>followers   tracks</div>
      <button>follow</button>
    </span>
    <span className="CM-musicProfile-right">
      <div>
        <strong>Released By:</strong>
        <div>ATO Records</div>
      </div>
      <div>
        <strong>Released Date:</strong>
        <div>January 24, 2018</div>
      </div>
      <div>
        <strong>P-Line:</strong>
        <div>℗ 2017 Flightless Records, under exclusive license to ATO Records, LLC.</div>
      </div>
      <div>
        <strong>C-Line:</strong>
        <div>© 2017 2017 Flightless Records, under exclusive license to ATO Records, LLC.</div>
      </div>
    </span>
  </div>
);

export default MusicProfile;
