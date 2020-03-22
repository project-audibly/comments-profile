import React from 'react';
import likes from '../images/tracker-like.png';
import plays from '../images/tracker-play-btn.png';
import reposts from '../images/tracker-repost.png';

class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: 0,
      likes: 0,
      reposts: 0,
    };
  }

  render() {
    return (
      <div>
        <div className='CM-tracker-btn'>
          <button className='CM-like-btn'>like</button>
          <button className='CM-repost-btn'>repost</button>
          <button className='CM-share-btn'>share</button>
          <button className='CM-addToNextUp-btn'>Add to Next Up</button>
          <button className='CM-more-btn'>more...</button>
        </div>
      <div className='CM-trackerValues'>
        <div className='CM-track-plays'>
          <img className='CM-tracker-play-image' src={plays} alt="" />
          {this.state.plays}
        </div>
        <div className='CM-track-likes'>
          <img className='CM-tracker-likes-image' src={likes} alt="" />
          {this.state.likes}
        </div>
        <div className='CM-track-reposts'>
          <img className='CM-tracker-reposts-image' src={reposts} alt="" />
          {this.state.reposts}
        </div>
      </div>
      </div>
    )
  }
}

export default Tracker;
