import React from 'react';
import axios from 'axios';
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
    this.getTrackedInfo = this.getTrackedInfo.bind(this);
  }

  componentDidMount() {
    this.getTrackedInfo();
  }

  getTrackedInfo() {
    axios.get('/api/tracker')
      .then((response) => {
        console.log('grabbing tracker info');
        this.setState({
          plays: response.data[0].plays,
          likes: response.data[0].likes,
          reposts: response.data[0].reposts,
        });
      })
      .catch((error) => {
        console.log(error, 'unable to grab tracker info');
      });
  }

  render() {
    return (
      <div className='CM-tracker'>
        <span className='CM-tracker-btn'>
          <button className='CM-like-btn'>like</button>
          <button className='CM-repost-btn'>repost</button>
          <button className='CM-share-btn'>share</button>
          <button className='CM-addToNextUp-btn'>Add to Next Up</button>
          <button className='CM-more-btn'>more...</button>
        </span>
        <span className='CM-trackerValues'>
          <span className='CM-track-plays'>
            <img className='CM-tracker-play-image' src="https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/play-icon.png" alt="" />
            {this.state.plays}
          </span>
          <span className='CM-track-likes'>
            <img className='CM-tracker-likes-image' src="https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/heart-icon.png" alt="" />
            {this.state.likes}
          </span>
          <span className='CM-track-reposts'>
            <img className='CM-tracker-reposts-image' src="https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/repost-icon.png" alt="" />
            {this.state.reposts}
          </span>
        </span>
      </div>
    )
  }
}

export default Tracker;
