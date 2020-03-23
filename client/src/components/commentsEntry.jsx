import React from 'react';
import ReplyInputBar from './replyInputBar.jsx';
import ReplyList from './replyList.jsx';
import UserToolTip from './userToolTip.jsx';


class CommentsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showReply = this.showReply.bind(this);
  }

  showReply() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <div className="CM-commentEntry">
          <UserToolTip user={this.props.comment.name[0]} >
            <img className="CM-profileImage" src={this.props.comment.name[0].image} alt='' />
          </UserToolTip>
          <div className="CM-userName">{this.props.comment.name[0].name}</div>
          <div className="CM-commentText">{this.props.comment.text}</div>
          <div className="CM-time">{this.props.comment.time}</div>
          <input className="CM-reply-btn" type='submit' value='Reply' onClick={this.showReply} />
          {this.state.show ? <ReplyInputBar /> : null}
          <div className='CM-reply-list'>
            <ReplyList replies={this.props.comment.reply} />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsEntry;
