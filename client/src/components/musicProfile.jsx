import React from 'react';
import albumProfile from '../images/profile-album-image.jpg';
import trackIcon from '../images/tracks-icon.png';
import followersIcon from '../images/followers-icon.png';

class MusicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: 0,
      tracks: 0,
    };
  }

  render() {
    return (
      <div className="CM-music-profile">
        <span className="CM-musicProfile-left">
          <div>
            <img className="CM-profile-album-image" src={albumProfile} alt="album-profile" />
          </div>
          <div>Pink Floyd</div>
          <div>
            <span>
              <img className="CM-follower-icon" src={followersIcon} alt="" />{this.state.followers}
            </span>
            <span>
              <img className="CM-tracks-icon" src={trackIcon} alt="" /> {this.state.tracks}
            </span>
          </div>
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
  }
}



export default MusicProfile;
