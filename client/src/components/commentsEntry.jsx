import React from 'react';

const CommentsEntry = ({comment}) => (
  <div>
    <div><img className="CM-profileImage" src={comment.user[0].image} alt="" /></div>
    <div className="CM-userName">{comment.user[0].name}</div>
    <div className="CM-commentText">{comment.text}</div>
    <div className="CM-time">{comment.time}</div>
  </div>
);

export default CommentsEntry;
