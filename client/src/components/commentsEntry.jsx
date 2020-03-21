import React from 'react';

// const CommentsEntry = ({comment}) => (
//   <div>
//     <div><img className="CM-profileImage" src={comment.user[0].image} alt="" /></div>
//     <div className="CM-userName">{comment.user[0].name}</div>
//     <div className="CM-commentText">{comment.text}</div>
//     <div className="CM-time">{comment.time}</div>
//   </div>
// );

class CommentsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    this.setState({
      show: !this.state.show,
    })
  }

  render() {
    return (
      <div>
        <div className='CM commentEntry'>
        <div><img className="CM-profileImage" src={comment.user[0].image} alt="" onMouseOver={this.showModal}/></div>
        <div className="CM-userName">{comment.user[0].name}</div>
        <div className="CM-commentText">{comment.text}</div>
        <div className="CM-time">{comment.time}</div>
        </div>
      </div>
    )
  }
}

export default CommentsEntry;
